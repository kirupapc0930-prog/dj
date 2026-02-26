## Dubai Tronics – Static Site

This folder now contains a **fully static HTML/CSS/JavaScript version** of the original Dubai Tronics Next.js demo.

### How to run

- Open `index.html` directly in your browser (double‑click, or drag into a browser tab), or
- Serve the folder with any static file host (GitHub Pages, Netlify, Vercel static export, Nginx, etc.).

No `npm install`, Node.js, or build step is required.

### Key files

- `index.html` – home page with hero, categories, featured products, deals and AI recommendations
- `product.html` – product details page (driven by `?id=` in the URL)
- `cart.html` – shopping cart with quantity controls and totals
- `checkout.html` – static checkout form
- `login.html`, `signup.html` – static auth screens
- `profile.html`, `orders.html`, `wishlist.html`, `contact.html` – supporting pages
- `assets/styles.css` – all layout and UI styles (no Tailwind or build tools)
- `assets/data.js` – static product, category, review, and hero banner data
- `assets/main.js` – vanilla JS for cart state (localStorage), dynamic rendering, and page wiring

### Notes

- Cart contents are stored in `localStorage` under the `cartItems` key so they persist between page loads.
- Product pages use a simple query‑string contract: `product.html?id=iphone-17`.
- All interactivity is handled with vanilla DOM APIs – there are **no React, Next.js, or bundler dependencies**.

