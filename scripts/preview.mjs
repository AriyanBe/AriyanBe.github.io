import http from "node:http";
import path from "node:path";
import fs from "node:fs";
const root = path.resolve("out");
const port = Number(process.env.PORT || 4173);
if (!fs.existsSync(path.join(root, "index.html")))
  throw new Error("Run npm run build before npm start.");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".json": "application/json",
  ".pdf": "application/pdf",
  ".woff2": "font/woff2",
};
const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    res.end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
  } catch {
    res.writeHead(400);
    res.end();
    return;
  }
  let file = path.resolve(root, "." + pathname);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403);
    res.end();
    return;
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory())
    file = path.join(file, "index.html");
  let status = 200;
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    file = path.join(root, "404.html");
    status = 404;
  }
  res.writeHead(status, {
    "Content-Type": mime[path.extname(file)] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
  });
  if (req.method === "HEAD") res.end();
  else fs.createReadStream(file).pipe(res);
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Portfolio preview: http://127.0.0.1:${port}`),
);
