# 🏭 Ranjana Plastic — Official Business Website

> A fully responsive, production-grade static website for **Ranjana Plastic**, a leading manufacturer and wholesaler of HDPE, PVC, CPVC, and steel pipes based in Jodhpur, Rajasthan, India.

🌐 **Live Website:** [https://www.ranjanaplastic.in](https://www.ranjanaplastic.in)

---

## 📌 Project Overview

This project is the complete official website for Ranjana Plastic, designed to establish a strong digital presence for the business. The website showcases the company's product range, manufacturing capabilities, and provides a channel for potential dealers and customers to get in touch.

The website was built from scratch with a focus on:
- Clean, professional industrial aesthetic
- Fast loading performance via CDN
- Mobile-first responsive design
- SEO-friendly structure
- Secure HTTPS delivery

---

## 🗂️ Project Structure

```
ranjana-plastic-website/
├── index.html              # Homepage — hero, products preview, about, testimonials
├── products.html           # Full product catalog with specs and enquiry forms
├── manufacturing.html      # Factory, machinery, and process showcase
├── become.html             # Become a dealer — partnership page
├── png/                    # All image assets
│   ├── lg.png              # Company logo
│   ├── s1.jpg – s5.jpg     # Hero slideshow images
│   ├── gardenpipe.jpg      # Product images
│   ├── hdpepipe.jpg
│   ├── pvcbraidedpipe.jpg
│   ├── sectionpipe.jpg
│   ├── levelpipe.jpg
│   ├── mdpepipe.jpg
│   ├── factory1.jpg        # Manufacturing images
│   ├── factory2.jpg
│   └── ...                 # All other assets
└── README.md               # This file
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Styling | Custom CSS (embedded in HTML files) |
| Hosting | AWS S3 Static Website Hosting |
| CDN | AWS CloudFront |
| DNS Management | Cloudflare |
| SSL/HTTPS | AWS Certificate Manager (ACM) + Cloudflare |
| Domain | ranjanaplastic.in (via domain registrar) |

---

## 📄 Pages

### 1. `index.html` — Homepage
- Full-screen hero section with animated image slideshow
- Statistics bar (years of experience, products, clients, etc.)
- About section with company overview
- Product preview grid (6 products)
- "Why Choose Us" section
- Customer testimonials
- CTA banner for dealer enquiries

### 2. `products.html` — Products
- Complete product catalog
- Each product includes: description, specifications, applications, image gallery
- Inline enquiry/quote form per product
- Sticky sidebar navigation for quick product jumping

### 3. `manufacturing.html` — Manufacturing
- Factory image gallery
- Step-by-step manufacturing process
- Machinery and equipment overview
- Raw materials section

### 4. `become.html` — Become a Dealer
- Partnership benefits and perks
- Dealer application form
- Contact information

---

## ☁️ AWS Infrastructure Setup

### S3 Buckets
| Bucket | Purpose |
|---|---|
| `www.ranjanaplastic.in` | Main bucket — stores all website files |
| `ranjanaplastic.in` | Redirect bucket — redirects to www |

### CloudFront Distribution
- **Origin:** `www.ranjanaplastic.in.s3-website.ap-south-1.amazonaws.com`
- **Protocol:** HTTP only (S3 website endpoint)
- **Viewer Protocol Policy:** Redirect HTTP to HTTPS
- **Alternate Domain:** `www.ranjanaplastic.in`
- **SSL Certificate:** ACM certificate (us-east-1 region)
- **Default Root Object:** `index.html`

### Cloudflare DNS Records
| Type | Name | Content |
|---|---|---|
| A | ranjanaplastic.in | 192.0.2.1 (Proxied) |
| CNAME | www | CloudFront distribution domain |
| TXT | ranjanaplastic.in | Google site verification |

---

## 🚀 Deployment Guide

### First-time setup
1. Create two S3 buckets: `www.ranjanaplastic.in` and `ranjanaplastic.in`
2. Enable static website hosting on both
3. Set `ranjanaplastic.in` bucket to redirect to `www.ranjanaplastic.in`
4. Upload all files to `www.ranjanaplastic.in` bucket
5. Set bucket policy to allow public read access
6. Create ACM SSL certificate in `us-east-1` region
7. Create CloudFront distribution pointing to S3 website endpoint
8. Update Cloudflare DNS CNAME for `www` to point to CloudFront domain

### Updating website content
1. Make changes to HTML/image files locally
2. Upload updated files to S3 (`www.ranjanaplastic.in` bucket)
3. Go to **CloudFront → Distributions → your distribution → Invalidations**
4. Create invalidation with path `/*`
5. Wait 2-3 minutes for cache to clear
6. Hard refresh browser with **Ctrl+Shift+R** to verify changes

> ⚠️ **Important:** Always create a CloudFront invalidation after uploading new/updated files. Without it, CloudFront will keep serving the old cached version.

---

## 🎨 Design

- **Font Pairing:** Barlow Condensed (headings) + DM Sans (body)
- **Color Scheme:** Deep forest green + amber/gold accents
- **Style:** Industrial-premium with hover effects and smooth transitions
- **Layout:** Single-column, mobile-first responsive
- **CSS:** Fully embedded inside each HTML file (no external stylesheet needed)
- **JS:** Fully embedded inside each HTML file (no external script file needed)

---

## 📞 Business Contact

**Ranjana Plastic**
Jodhpur, Rajasthan, India
🌐 [www.ranjanaplastic.in](https://www.ranjanaplastic.in)

---

## 📝 Notes

- All CSS and JavaScript is embedded directly inside each HTML file — no separate `styles.css` or `script.js` required
- Images must be inside the `png/` folder maintaining exact filenames (case-sensitive on S3)
- Website is indexed by Google (first indexed: June 2025)
- SSL certificate covers both `ranjanaplastic.in` and `www.ranjanaplastic.in`
