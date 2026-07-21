import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Sprout landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]+lang="pt-PT"/i);
  assert.match(html, /Faz a tua comunidade/);
  assert.doesNotMatch(html, /Explorar eventos|Publicar um evento|Começar agora/);
  assert.match(html, /Para organizações/);
  assert.match(html, /Aberta a todos/);
  assert.match(html, /feature-card feature-teal/);
  assert.match(html, /Sprout © 2026 · by <strong>Unifive<\/strong>/);
  assert.match(html, /https:\/\/unifive-sprout\.oa\.r\.appspot\.com\//);
  const externalAppLinks = html.match(
    /<a\b[^>]*href="https:\/\/unifive-sprout\.oa\.r\.appspot\.com\/"/g,
  ) ?? [];
  assert.equal(externalAppLinks.length, 2);
  assert.doesNotMatch(html, /sprout-dot-unifive-sprout/);
  assert.doesNotMatch(html, /Our Team|A nossa equipa/i);
});
