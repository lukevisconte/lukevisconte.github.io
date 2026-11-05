// =====================================================================
//  YOUR PAPERS — this is the only file you need to edit to add a paper.
// =====================================================================
//
//  To add a paper:
//   1. Put the PDF in the "papers" folder (e.g. papers/my-paper.pdf).
//   2. Copy one { ... } block below, paste it at the top of the list,
//      and change the text between the quotes.
//   3. Every block ends with a comma:  },
//
//  Fields:
//   title     Paper title
//   authors   Optional. Leave "" if it's just you.
//   status    "working"  or  "finished"
//   date      "YYYY-MM" (the version date, e.g. "2026-11")
//   venue     Optional. Journal, conference or course, e.g. "Journal of Finance"
//   abstract  The abstract (one paragraph)
//   pdf       Path to the PDF, e.g. "papers/my-paper.pdf"   ("" for none)
//   code      Link to code/data, e.g. a GitHub repo URL      ("" for none)
//
//  Delete the two SAMPLE entries once you add your own.
// =====================================================================

window.PAPERS = [

  {
    title:    "SAMPLE: Title of a Working Paper",
    authors:  "",
    status:   "working",
    date:     "2026-11",
    venue:    "",
    abstract: "This is placeholder text. Replace it with your abstract.",
    pdf:      "papers/sample-working-paper.pdf",
    code:     "",
  },

  {
    title:    "SAMPLE: Title of a Finished Paper",
    authors:  "with A. Coauthor",
    status:   "finished",
    date:     "2026-06",
    venue:    "Journal or Course Name",
    abstract: "This is placeholder text. Replace it with your abstract.",
    pdf:      "papers/sample-finished-paper.pdf",
    code:     "https://github.com/your-username/your-repo",
  },

];
