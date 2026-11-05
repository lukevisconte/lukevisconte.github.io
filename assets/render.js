// Draws the paper lists from papers.js. You shouldn't need to edit this file.
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var papers = (window.PAPERS || []).slice();
  // Newest first, by the "date" field (YYYY-MM).
  papers.sort(function (a, b) { return String(b.date || "").localeCompare(String(a.date || "")); });

  var MONTHS = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];
  function niceDate(d) {
    var p = String(d || "").split("-");
    var m = parseInt(p[1], 10);
    return m ? MONTHS[m - 1] + " " + p[0] : (p[0] || "");
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function card(p) {
    var finished = p.status === "finished";
    var meta = '<span class="tag ' + (finished ? "finished" : "working") + '">' +
      (finished ? "Finished" : "Working paper") + "</span>";
    var bits = [];
    if (p.authors) bits.push(esc(p.authors));
    if (p.venue) bits.push("<em>" + esc(p.venue) + "</em>");
    if (p.date) bits.push((finished ? "" : "This version: ") + niceDate(p.date));
    meta += bits.join(" · ");

    var links = [];
    if (p.pdf) links.push('<a href="' + esc(p.pdf) + '">PDF</a>');
    if (p.code) links.push('<a href="' + esc(p.code) + '">Code &amp; data</a>');
    if (p.link) links.push('<a href="' + esc(p.link) + '">Link</a>');

    return '<article class="paper">' +
      '<div class="paper-title">' + esc(p.title) + "</div>" +
      '<div class="paper-meta">' + meta + "</div>" +
      (p.abstract ? '<details class="abstract"><summary>Abstract</summary><p>' + esc(p.abstract) + "</p></details>" : "") +
      (links.length ? '<div class="paper-links">' + links.join("") + "</div>" : "") +
      "</article>";
  }

  function fill(id, list, emptyText) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.length ? list.map(card).join("") : '<p class="muted">' + emptyText + "</p>";
  }

  fill("recent-papers", papers.slice(0, 3), "Papers coming soon.");
  fill("working-papers", papers.filter(function (p) { return p.status !== "finished"; }), "None at the moment.");
  fill("finished-papers", papers.filter(function (p) { return p.status === "finished"; }), "None yet.");
})();
