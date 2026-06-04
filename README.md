# Khushi Srivastava — PM Portfolio

A clean, minimal personal portfolio website for an aspiring Product Manager.  
Live demo: *(add your URL here after deploying)*

---

## Files

```
index.html   — all HTML markup
style.css    — all styles
script.js    — all JavaScript (data + interactions)
README.md    — this file
```

No npm. No build step. Open `index.html` in any browser to preview locally.

---

## Deploy to GitHub Pages (free, 5 minutes)

1. Go to [github.com](https://github.com) → **New repository**
2. Name it `pm-portfolio` (or anything you like) → **Create**
3. Drag and drop `index.html`, `style.css`, `script.js`, `README.md` into the repo
4. Commit the files
5. Go to **Settings → Pages → Branch → main → Save**
6. Your site will be live at `https://YOUR-USERNAME.github.io/pm-portfolio/`

---

## Deploy to Netlify (free, 2 minutes)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder onto the page
3. Done — you'll get a `*.netlify.app` URL instantly
4. To connect a custom domain: **Domain Settings → Add custom domain**

---

## Enable the Contact Form (EmailJS)

The form uses [EmailJS](https://www.emailjs.com) — free for 200 emails/month, no backend needed.

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. **Add Email Service** → choose Gmail → connect your Google account → note the **Service ID**
3. **Email Templates → Create Template** → use these variables in your template:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject line
   - `{{message}}` — message body
   - Note the **Template ID**
4. **Account → API Keys** → copy your **Public Key**
5. Open `script.js` and replace the three values at the top:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← replace
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← replace
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← replace
   ```
6. Re-upload `script.js` to GitHub and test the form

---

## Update your information

All personal data is in `script.js` — no need to touch the HTML:

- **Experience** → edit the `experience` array (~line 30)
- **Education** → edit the `education` array (~line 60)
- **Projects** → edit the `projects` array (~line 80)
- **Blog posts** → edit the `blogPosts` array (~line 140)
- **Email** → search and replace `khushisrivastava@email.com` in both `index.html` and `script.js`

---

## Add a profile photo

The current design doesn't use a profile photo (matches the reference style).  
If you'd like to add one in the hero, add this inside `#home` in `index.html`:

```html
<img src="khushi.jpg" alt="Khushi Srivastava" class="hero-photo" />
```

And add this to `style.css`:
```css
.hero-photo { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; }
```

Recommended photo: square crop, 400×400px, JPEG under 100KB.
