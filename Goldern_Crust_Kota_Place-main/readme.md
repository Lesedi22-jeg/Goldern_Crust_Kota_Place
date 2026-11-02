# Golden Crust Kota Place - Website Project

---

## Project Title
Golden Crust Kota Place Website

---

## Student Information
 Lesedi Potsane
 ST10513400
 WEDE5020 - Web Development (Introduction)
 17 August 2026

---

## Project Overview (Complete)

Golden Crust Kota Place is a small food business located in Orlando West, Soweto. The business was established in 2018 by Thabo Nkosi and serves authentic South African kota to the local community.

The business started as a street food cart in 2018 and grew into a permanent shopfront by 2020. Today, Golden Crust serves over 200 customers daily and is known for its signature "Crunchy Kota" which features a secret spice blend passed down from the founder's grandmother.

This project involves creating a professional website for the business to help increase its online presence and facilitate online ordering. The website allows customers to view the menu, learn about the business, place orders, and contact the business directly.

---

## Website Goals and Objectives

### Primary Goals

1. Increase customer reach by attracting 100+ new customers monthly through online visibility
2. Streamline orders by implementing an online ordering system to reduce in-store wait times by 40%
3. Build brand identity by establishing Golden Crust as a recognised brand beyond Soweto
4. Promote special offers to increase repeat business by 30%
5. Share township food culture by educating visitors about the history and cultural significance of kota

### Key Performance Indicators (KPIs)

- 30+ weekly online orders
- 500+ monthly website visitors
- 25% social media growth
- 60% return customer rate

---

## Key Features and Functionality

### Core Features

- Online Ordering System - Customers can place orders for pickup using a simple form
- Digital Menu - Complete menu with descriptions and prices
- Daily Specials - Promotions and deals displayed prominently
- Customer Reviews - Testimonials from satisfied customers
- Location Information - Business location with Google Maps link
- Contact Form - Customers can send enquiries directly
- Social Media Integration - Links to WhatsApp, Facebook, and Instagram
- Gallery - Photos of the business, food, and team

### Pages Included

- Homepage (index.html) - Welcome message, specials, reviews, location, and hours
- About Us (about.html) - Business history, mission, vision, team, and values
- Menu (menu.html) - Complete menu with descriptions and prices
- Order Online (order.html) - Online ordering form
- Specials (specials.html) - Daily specials and monthly deals
- Gallery (gallery.html) - Photo gallery of the business
- Contact (contact.html) - Contact details, location, and enquiry form

---

## File and Folder Structure
## Sitemap
- Home (index.html)
- About Us (about.html)
- Menu (menu.html)
  - Order Online (order.html)
- Specials (specials.html)
- Gallery (gallery.html)
- Contact Us (contact.html)

## Changelog
- **2026-09-17:** Added Sitemap to README.
- **2026-09-17:** Added HTML comments to all 7 HTML files.
- **2026-09-17:** Created external `style.css` and linked to all pages.
- **2026-09-17:** Implemented CSS reset, typography, color scheme, and layout (Flexbox & Grid).
- **2026-09-17:** Added responsive design features (Media Queries for Tablet and Mobile).

## References
- W3Schools. (2024). *CSS Media Queries*.
- MDN Web Docs. (2024). *CSS Layout*.
## Responsive Design Testing
### Desktop View
![Desktop View](screenshots/desktop.png)

### Tablet View
![Tablet View](screenshots/tablet.png)

### Mobile View
![Mobile View](screenshots/mobile.png)
## Changelog - Part 3 (Final Submission)

### 1. Feedback from Part 2 (Fixes)
- **Pseudo-Classes:** Added explicit `:hover` states to the navigation links (background turns red, text white), buttons (scales up and changes color), and gallery images (zooms in and adds a box-shadow).
- **Image Adjustments:** Implemented `max-width: 100%` and `object-fit: cover` to ensure all images scale perfectly and responsively on desktop, tablet, and mobile screens without breaking the layout.

### 2. Part 3 Functionality (JavaScript)
- **Gallery Lightbox:** Implemented a fully functional Lightbox on `gallery.html`. Clicking any image opens it in a dark modal overlay, complete with a close button.
- **Menu Search Bar:** Added a real-time search input on `menu.html`. Using JavaScript DOM manipulation, the list of meals filters instantly as the user types.
- **Form Validation:** Added custom JavaScript validation to `contact.html` and `enquiry.html`. The script prevents form submission if fields are empty or if an invalid email is entered, providing immediate alert feedback to the user.
- *(Note: To ensure 100% reliability across different local file paths, the JavaScript was embedded directly into the respective HTML files at the bottom of the `<body>` tag).*

### 3. Interactive Map
- **Location:** Embedded a responsive Google Maps iframe on the `contact.html` page, centered on Orlando West, Soweto.

### 4. Search Engine Optimization (SEO)
- **Meta Tags:** Added `description`, `keywords`, and `author` meta tags to the `<head>` of all HTML pages for better indexing.
- **Alt Text:** Ensured all images have descriptive `alt` attributes.
- **Robots.txt:** Created a `robots.txt` file to instruct search engine crawlers on how to index the site.
- **Sitemap.xml:** Created an XML sitemap listing all pages to help search engines understand the site structure.

### 5. Deployment & GitHub
- Finalized all files and pushed the complete project to the GitHub repository.