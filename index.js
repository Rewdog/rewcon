// Placeholder entry-point file for Cloudflare Workers
export default {
  async fetch(request) {
    return new Response("Hello from Cloudflare Workers!", {
      headers: { "content-type": "text/plain" },
    });
  },
};