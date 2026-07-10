# BAITUR - RAHMAN International Tours and Travels Website

A beginner-friendly static website project for Hajj and Umrah Ziyrath services.

## Folder Structure

```text
BAITUR-RAHMAN-website/
  index.html
  assets/
    css/
      styles.css
    js/
      main.js
    images/
  README.md
```

## How To Run Locally

1. Open the project folder in VS Code.
2. Install "Live Server" extension in VS Code (optional but easy).
3. Right-click `index.html` and choose "Open with Live Server".
4. Your website opens in browser.

## Easy GoDaddy Domain + Hosting + Deployment (Step-by-Step)

Use this exact checklist.

### Part A: Buy Domain in GoDaddy

1. Go to https://www.godaddy.com/
2. In search bar, type your domain idea:
   - Example: baiturrahmantravels.com
   - Example: baiturrahmanhajj.com
3. Click Search.
4. If available, click Add to Cart.
5. Skip extra addons if not needed.
6. Checkout and pay.
7. Domain purchase is complete.

### Part B: Buy Hosting (Important)

For custom HTML/CSS/JS websites, buy **Linux Hosting with cPanel**.

1. In GoDaddy, go to Hosting.
2. Choose Web Hosting / cPanel Hosting.
3. Buy a basic plan (enough for single business website).
4. During setup, choose your purchased domain.
5. Wait for setup completion mail from GoDaddy.

### Part C: Connect Domain and Hosting

If domain and hosting are in the same GoDaddy account, it usually links automatically.

Check once:

1. GoDaddy -> My Products.
2. Open Hosting -> Manage.
3. Open Domains -> DNS.
4. Make sure A record points to hosting IP (shown in hosting details).

### Part D: Upload Website Files to GoDaddy

1. In GoDaddy Hosting, click Manage -> cPanel Admin.
2. Open File Manager.
3. Go to folder `public_html/`.
4. Delete default files (only if you do not need them).
5. On your computer, zip your website files:
   - Zip content of project so `index.html` is at top level.
6. Upload zip into `public_html/`.
7. Select zip and click Extract.
8. Confirm `public_html/index.html` exists.

### Part E: Enable SSL (HTTPS)

1. In cPanel or GoDaddy dashboard, open SSL section.
2. Enable free SSL (if plan includes it).
3. Wait for SSL to activate.
4. Test in browser: `https://yourdomain.com`

### Part F: Final Testing Checklist

1. Open domain in mobile and desktop.
2. Click Call button (should open phone dialer).
3. Click WhatsApp button (should open chat).
4. Check all sections load properly.
5. Check no broken links.

## Common Mistakes and Fixes

1. Website not showing:
   - Check that `index.html` is directly inside `public_html/`, not inside another nested folder.
2. CSS/JS not loading:
   - Keep folder names exactly as in project (`assets/css/styles.css` and `assets/js/main.js`).
3. Domain not opening right away:
   - DNS propagation can take from a few minutes up to 24 hours.
4. HTTPS not working:
   - Wait until SSL is issued, then retry.

## Business Details Used

- Firm Name: BAITUR - RAHMAN International Tours and Travels
- Service: Hajj and Umrah Ziyrath
- Mobile: 7676178866

## Next Content You Can Update Easily

- Replace sample testimonials in `index.html`
- Add your package prices in Packages section
- Add office address and map link
- Add original photos under `assets/images/`

## Sample Items To Replace Before Final Launch

Use this section as your final pre-launch checklist.

### 1. Contact and Business Identity (High Priority)

Replace these sample values in `index.html`:

- `contact@baiturrahmantravels.com` -> your real business email
- `Bengaluru, Karnataka (Sample)` -> your real city/branch
- `No. 101, Residency Road, Bengaluru - 560001` -> full office address
- `@baiturrahman_travels (Sample)` -> your actual Instagram handle

Optional additions:

- Add office landline number
- Add working hours
- Add Google Maps location link

### 2. Google Form and Enquiry Setup (High Priority)

Replace these in `index.html`:

- `https://forms.gle/ReplaceWithYourGoogleFormLink` -> your real Google Form URL

Where it is used:

- Open Google Form button
- Custom Package form data attribute (`data-google-form-url`)

If you do not want Google Form:

- Keep only WhatsApp submission flow

### 3. Package Prices (High Priority)

Current package prices are sample values.

Update in `assets/js/main.js` inside:

- `const packagePrices = { ... }`

Current keys you can change:

- `essential-umrah-saver`
- `domestic-ziyrath-prep`
- `comfort-plus-umrah`
- `guided-hajj-comfort`
- `royal-umrah-signature`
- `elite-hajj-concierge`

### 4. Package Names, Duration, Inclusions (High Priority)

Update in `index.html`:

- Package names and badges
- Days/Nights duration
- Destination list
- Inclusion bullet points

Tip:

- Match every package to your actual service and pricing brochure

### 5. Photos and Media (Medium Priority)

Current files used:

- `assets/images/mecca-city.jpg`
- `assets/images/madina-city.jpg`

You may replace with your own licensed photos using same file names, or update image paths in `index.html`.

Recommended:

- Add separate image for each package card
- Compress images for faster loading (WebP/JPEG optimized)

### 6. Testimonials and Social Proof (Medium Priority)

Current testimonials are sample text.

Replace in `index.html`:

- Client names
- Feedback text
- Add city and travel month (optional)

### 7. Legal and Trust Items (Medium Priority)

Add these if available:

- Business registration details
- Terms and conditions page link
- Privacy policy page link
- Refund/cancellation policy summary

### 8. SEO Basics (Important for Google Search)

Update in `index.html`:

- `<title>` with final brand + location
- `<meta name="description">` with real business summary

Recommended future additions:

- Open Graph tags for WhatsApp/Facebook preview
- Favicon (`assets/images/favicon.ico`)

### 9. WhatsApp Prefilled Messages (Optional)

Current links include sample enquiry text. You can rewrite message text in all `wa.me` links in `index.html`.

### 10. Final Go-Live QA Checklist

1. All Call/WhatsApp/Email/Google Form links open correctly.
2. Package prices match your final price sheet.
3. No text includes `(Sample)`.
4. Mobile view tested on at least one Android and one iPhone.
5. Domain opens with HTTPS only.
