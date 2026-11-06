# Your website: how to edit it and put it online

Everything is plain files in this `website` folder. You don't need to install anything.

## What's in the folder

| File | What it is | Do you edit it? |
|---|---|---|
| `assets/papers.js` | **Your list of papers** | Yes, this is the main one |
| `papers/` | Your paper PDFs go here | Yes, drop PDFs in |
| `index.html` | About page (bio) | Yes, once, for your bio |
| `cv.html` | CV page | Yes, fill in the placeholders |
| `files/cv.pdf` | Your CV PDF (add it yourself) | Yes |
| `contact.html` | Contact page | Yes, fill in your links |
| `assets/style.css` | Colours and fonts | Only if you want to change the look |
| `assets/render.js` | Draws the paper list | No |
| `CNAME` | Tells GitHub your domain | No |

To preview, double-click `index.html` and it opens in your browser.

## Adding a paper (about 2 minutes)

1. Copy the PDF into `papers/`. Use a short name with no spaces, e.g. `gbm-extensions.pdf`.
2. Open `assets/papers.js` in any text editor (Notepad works; VS Code is nicer).
3. Copy one `{ ... },` block, paste it at the top of the list and fill it in:

```js
  {
    title:    "Geometric Brownian Motion and Its Extensions",
    authors:  "",
    status:   "working",          // or "finished"
    date:     "2026-11",          // version date, YYYY-MM
    venue:    "",
    abstract: "Your abstract here.",
    pdf:      "papers/gbm-extensions.pdf",
    code:     "",
  },
```

4. Save the file, then refresh the page in your browser to check it.
5. To revise a paper, replace the PDF (keep the same file name) and update `date`.
6. To move a paper from working to finished, change `status` to `"finished"`.

**If the paper list disappears**, there's a typo in `papers.js`. Usually it's a missing comma after `}` or a missing `"` quote. If there's a `"` inside your abstract, type it as `\"`.

## Putting it online (one-time setup, about 30 minutes)

### Step 1: Buy the domain lukevisconte.com

As of 5 Nov 2026 it was unregistered. Buy it from a low-cost registrar, for example **Porkbun** (porkbun.com) or **Cloudflare Registrar** (cloudflare.com). A .com costs roughly $10–12 a year. Both include WHOIS privacy for free, which hides your home address from public lookup. You can skip any add-ons they offer (email, hosting, SSL); you don't need them.

### Step 2: Create the GitHub repository

1. Sign in at github.com. Click **+** (top right), then **New repository**.
2. Name it `<your-username>.github.io` (e.g. `lvisconte.github.io`). Set it to **Public** and click **Create repository**.
3. On the new repo page, click **uploading an existing file**. Drag in **everything inside** the `website` folder: the files and the `assets`, `papers` and `files` folders. Leave out this guide if you like. Click **Commit changes**.

### Step 3: Turn on GitHub Pages

1. In the repo, go to **Settings**, then **Pages**.
2. Under "Build and deployment", set **Source** to *Deploy from a branch*. Set **Branch** to `main` and folder `/ (root)`, then click **Save**.
3. Under **Custom domain**, enter `lukevisconte.com` and click **Save**.

### Step 4: Point the domain at GitHub (at your registrar)

In your registrar's DNS settings, delete any default "parking" records and add:

| Type | Host / Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<your-username>.github.io` |

Changes can take anywhere from a few minutes to a few hours. Then go back to **Settings → Pages** and tick **Enforce HTTPS** (it appears once GitHub has issued the certificate).

These IP addresses are GitHub's published Pages addresses. Check them against GitHub's docs page "Managing a custom domain for your GitHub Pages site" in case they've changed.

### Step 5 (recommended): Verify the domain with GitHub

In GitHub, open **your profile picture → Settings → Pages → Add a domain**. Follow the steps (it asks you to add one TXT record at your registrar). This stops anyone else from claiming your domain on GitHub.

## Updating the live site later

1. Edit the files on your computer and check them by opening `index.html`.
2. In your GitHub repo, click **Add file → Upload files** and drag in the changed files, in the same folders. For example, drop a new PDF into the `papers` folder view, and upload `papers.js` inside the `assets` folder view.
3. Click **Commit changes**. The live site updates within a minute or two.

Alternatively, install **GitHub Desktop** (desktop.github.com). It syncs this folder with one button, so you don't need to drag files in by hand.
