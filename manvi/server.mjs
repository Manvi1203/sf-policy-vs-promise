import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const urlPath = (req.url || "/").split("?")[0];

  if (urlPath === "/api/data") {
    try {
      const metrics = JSON.parse(fs.readFileSync(path.join(__dirname, "data/metrics.json"), "utf8"));
      const policies = JSON.parse(fs.readFileSync(path.join(__dirname, "data/policies_analyzed.json"), "utf8"));
      const bayArea = JSON.parse(fs.readFileSync(path.join(__dirname, "data/bay_area_agencies.json"), "utf8"));
      res.writeHead(200, { "Content-Type": MIME[".json"] });
      res.end(JSON.stringify({ metrics, policies, bayArea }));
    } catch (err) {
      res.writeHead(500, { "Content-Type": MIME[".json"] });
      res.end(JSON.stringify({ error: String(err) }));
    }
    return;
  }

  const target = urlPath === "/" ? "public/index.html" : path.join("public", urlPath);
  const fullPath = path.join(__dirname, target);
  if (!fullPath.startsWith(path.join(__dirname, "public")) || !fs.existsSync(fullPath)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }
  const ext = path.extname(fullPath);
  res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
  fs.createReadStream(fullPath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`WatchTheFlock running at http://localhost:${PORT}`);
});
