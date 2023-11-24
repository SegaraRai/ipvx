Deno.serve((req, info) => {
  const text = [
    ...req.headers.entries(),
    ["info.remote-addr", JSON.stringify(info.remoteAddr)],
  ]
    .map(([k, v]) => `${k}: ${v}\n`)
    .join("");

  return new Response(text, {
    status: 200,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/plain; charset=UTF-8",
    },
  });
});
