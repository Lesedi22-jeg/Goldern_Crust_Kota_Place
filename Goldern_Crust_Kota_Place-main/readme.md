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
## Changelog - Part 3 (Enhancing Functionality and SEO)

### 1. Feedback from Part 2 (Fixes)
- **Pseudo-Classes Fixed:** Added explicit `:hover` states to the navigation links (background turns red, text turns white), buttons (scales up 1.05x and changes color), and gallery images (zooms in and adds a box-shadow). 
- **Image Adjustments Fixed:** Applied `max-width: 100%` and `object-fit: cover` to all images to ensure they scale perfectly on desktop, tablet, and mobile without breaking the layout.

### 2. Functionality & JavaScript
- **Gallery Lightbox:** Created a custom JavaScript lightbox (`js/script.js`). Clicking a gallery image now opens it in a full-screen modal with a close button.
- **Search Bar:** Added a real-time search input on the `menu.html` page. Users can type to filter the list of Kotas instantly using JavaScript DOM manipulation.
- **Form Validation:** Added JavaScript validation to the Contact and Enquiry forms. The script prevents submission if fields are empty or if the email format is invalid, providing immediate user feedback.
- **Interactive Map:** Embedded a responsive Google Maps iframe on the `contact.html` page for location-based features.

### 3. New Pages & Forms
- **Enquiry Page:** Created a brand new `enquiry.html` page specifically for catering and sponsorship inquiries, complete with a validated form.

### 4. Search Engine Optimization (SEO)
- **Meta Tags:** Implemented `description`, `keywords`, and `author` meta tags across all HTML pages to improve search engine indexing.
- **Robots.txt:** Created a `robots.txt` file to instruct search engine crawlers to index the site.
- **Sitemap.xml:** Created an XML sitemap to help search engines understand the structure of the website.
- **Alt Text & Headings:** Ensured all images have descriptive `alt` attributes and utilized proper `H1`, `H2`, and `H3` heading structures for on-page SEO.

### 5. GitHub & Deployment
- Pushed all changes with descriptive commit messages.
- Website is deployed and accessible via the GitHub repository.