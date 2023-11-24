function handler(req: Request): Response {
  const text = Array.from(req.headers.entries())
    .map(([k, v]) => `${k}: ${v}\n`)
    .join("");

  return new Response(text, {
    status: 200,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/plain; charset=UTF-8",
    },
  });
}

Deno.serve(handler);
