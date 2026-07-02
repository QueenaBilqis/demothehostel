import worker from './.output/server/index.mjs';

async function test() {
  const req = new Request("http://localhost:8787/");
  const env = { ASSETS: { fetch: async () => new Response("Asset not found", { status: 404 }) } };
  const ctx = { waitUntil: () => {}, passThroughOnException: () => {} };
  
  try {
    const res = await worker.fetch(req, env, ctx);
    console.log("Status:", res.status);
    console.log("Headers:", Object.fromEntries(res.headers.entries()));
    const body = await res.text();
    console.log("Body length:", body.length);
    if (res.status === 500) {
      console.log("Response body:", body);
    }
  } catch (err) {
    console.error("Worker threw an error:", err);
  }
}

test();
