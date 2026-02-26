// Dubai Tronics - Vanilla JS runtime

(function () {
  const DATA = window.DUBAI_TRONICS_DATA || {};

  // ------------- Cart state (localStorage) -------------
  function loadCart() {
    try {
      const raw = localStorage.getItem("cartItems");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCart(items) {
    try {
      localStorage.setItem("cartItems", JSON.stringify(items));
    } catch {
      // ignore
    }
  }

  function getCartItems() {
    return loadCart();
  }

  function findProduct(productId) {
    if (!DATA.products) return null;
    return DATA.products.find((p) => p.id === productId) || null;
  }

  function addToCart(productId, quantity) {
    quantity = Number(quantity) || 1;
    const product = findProduct(productId);
    if (!product) return;

    const items = getCartItems();
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        imageId: product.imageId,
      });
    }
    saveCart(items);
    refreshCartBadge();
  }

  function updateQuantity(productId, quantity) {
    const items = getCartItems();
    const q = Number(quantity) || 1;
    const updated = items
      .map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: q,
            }
          : item
      )
      .filter((item) => item.quantity > 0);
    saveCart(updated);
    refreshCartBadge();
  }

  function removeFromCart(productId) {
    const items = getCartItems().filter((item) => item.id !== productId);
    saveCart(items);
    refreshCartBadge();
  }

  function getCartCount() {
    return getCartItems().reduce((acc, item) => acc + Number(item.quantity || 0), 0);
  }

  function getCartTotal() {
    return getCartItems().reduce(
      (acc, item) => acc + Number(item.price || 0) * Number(item.quantity || 0),
      0
    );
  }

  // ------------- Header badge -------------
  function refreshCartBadge() {
    const badge = document.querySelector("[data-cart-count]");
    if (!badge) return;
    const count = getCartCount();
    if (count <= 0) {
      badge.textContent = "";
      badge.style.display = "none";
    } else {
      badge.textContent = String(count);
      badge.style.display = "flex";
    }
  }

  // ------------- Home page rendering -------------
  function renderProductsGrid(container, products) {
    if (!container || !products) return;
    container.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "grid grid-4";

    products.forEach((product) => {
      const imgUrl = DATA.getImageUrl ? DATA.getImageUrl(product.imageId) : "";
      const hasDiscount = !!product.originalPrice;
      const rating = product.rating || 0;
      const ratingStars = "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));

      const card = document.createElement("article");
      card.className = "card product-card";
      card.innerHTML = `
        <a href="product.html?id=${encodeURIComponent(product.id)}">
          <div class="product-thumb">
            <div class="product-chip chip">
              <span class="chip-dot"></span>
              <span>${product.category}</span>
            </div>
            ${
              imgUrl
                ? `<img src="${imgUrl}" alt="${product.name}" loading="lazy" />`
                : `<div class="empty-icon">📦</div>`
            }
          </div>
        </a>
        <div>
          <div class="row row-space">
            <h3 class="product-name">${product.name}</h3>
            ${
              hasDiscount
                ? `<span class="badge badge-sale">-${Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100
                  )}%</span>`
                : ""
            }
          </div>
          <p class="product-meta">${product.description}</p>
          <div class="row row-space mt-sm">
            <span class="product-price">₹${product.price.toLocaleString("en-IN")}</span>
            ${
              hasDiscount
                ? `<span class="product-price-old">₹${product.originalPrice.toLocaleString(
                    "en-IN"
                  )}</span>`
                : ""
            }
          </div>
          <div class="row row-space mt-sm">
            <span class="product-rating">
              <span class="rating-stars">${ratingStars}</span>
              <span>${rating.toFixed(1)} (${product.reviewCount})</span>
            </span>
            <button class="btn btn-outline btn-icon" data-add-to-cart data-product-id="${
              product.id
            }" aria-label="Add ${product.name} to cart">
              <span>🛒</span>
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  function renderCategories(container) {
    if (!container || !DATA.categories) return;
    container.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "grid grid-3";

    DATA.categories.forEach((cat) => {
      const imgUrl = DATA.getImageUrl ? DATA.getImageUrl(cat.imageId) : "";
      const card = document.createElement("article");
      card.className = "card category-card";
      card.innerHTML = `
        <div class="category-thumb">
          ${
            imgUrl
              ? `<img src="${imgUrl}" alt="${cat.name}" loading="lazy" />`
              : `<div class="empty-icon">📱</div>`
          }
        </div>
        <div>
          <h3 class="category-name">${cat.name}</h3>
          <p class="category-link">Explore ${cat.name} →</p>
        </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  function renderReviews(container) {
    if (!container || !DATA.reviews) return;
    container.innerHTML = "";

    const stack = document.createElement("div");
    stack.className = "stack";

    DATA.reviews.forEach((review) => {
      const imgUrl = DATA.getImageUrl ? DATA.getImageUrl(review.userImageId) : "";
      const card = document.createElement("article");
      card.className = "card card-muted review-card";
      card.innerHTML = `
        <div class="review-header">
          <div class="review-avatar">
            ${
              imgUrl
                ? `<img src="${imgUrl}" alt="${review.userName}" loading="lazy" />`
                : `<div class="empty-icon">👤</div>`
            }
          </div>
          <div>
            <div class="review-name">${review.userName}</div>
            <div class="product-rating">
              <span class="rating-stars">${"★".repeat(review.rating)}${"☆".repeat(
        5 - review.rating
      )}</span>
            </div>
          </div>
        </div>
        <p class="review-text">${review.feedback}</p>
      `;
      stack.appendChild(card);
    });

    container.appendChild(stack);
  }

  function renderAIRecommendations(container) {
    if (!container || !DATA.featuredProducts) return;
    container.innerHTML = "";

    const panel = document.createElement("div");
    panel.className = "ai-panel";

    const picks = DATA.featuredProducts.slice(0, 3);
    panel.innerHTML = `
      <div class="ai-panel-header">
        <div class="stack-tight">
          <div class="ai-label">
            <span class="ai-dot"></span>
            <span>Dubai Tronics AI</span>
          </div>
          <div class="section-title" style="font-size: 1rem;">Smart picks for you</div>
          <p class="section-subtitle">Curated using ratings, demand and price drops.</p>
        </div>
        <span class="ai-badge">Realtime insights</span>
      </div>
      <ul class="ai-list">
        ${picks
          .map(
            (p) => `
          <li>
            <strong>${p.name}</strong>
            <br />
            <span>₹${p.price.toLocaleString(
              "en-IN"
            )} • ${p.rating.toFixed(1)} ★ • ${p.category}</span>
          </li>`
          )
          .join("")}
      </ul>
    `;

    container.appendChild(panel);
  }

  function initHero() {
    const bannerShell = document.querySelector("[data-hero-banner]");
    if (!bannerShell || !DATA.heroBanners || !DATA.heroBanners.length) return;

    let index = 0;

    function update() {
      const banner = DATA.heroBanners[index];
      const img = DATA.getImageUrl ? DATA.getImageUrl(banner.imageId) : "";
      bannerShell.innerHTML = `
        <div class="hero-card">
          <div class="hero-product-label">
            <div class="stack-tight">
              <div class="chip">
                <span class="chip-dot"></span>
                <span>Just dropped</span>
              </div>
              <div class="hero-product-title">${banner.title}</div>
            </div>
            <span class="badge badge-hot">Limited</span>
          </div>
          <div class="hero-image-shell">
            ${
              img
                ? `<img src="${img}" alt="${banner.title}" loading="lazy" />`
                : `<div class="empty-icon">🖼️</div>`
            }
            <div class="hero-ribbon">
              <span>${banner.subtitle}</span>
              <strong>View collection →</strong>
            </div>
          </div>
          <div class="hero-float">
            <div class="hero-float-card">
              <div class="hero-float-count">30K</div>
              <div class="hero-float-text">
                <strong>Gadgets delivered</strong><br />
                across UAE in the last 12 months.
              </div>
            </div>
          </div>
        </div>
      `;
    }

    update();
    setInterval(() => {
      index = (index + 1) % DATA.heroBanners.length;
      update();
    }, 6000);
  }

  function initHomePage() {
    const featuredEl = document.querySelector("[data-featured-products]");
    const dealsEl = document.querySelector("[data-deals]");
    const categoriesEl = document.querySelector("[data-categories]");
    const reviewsEl = document.querySelector("[data-reviews]");
    const aiEl = document.querySelector("[data-ai-recommendations]");

    if (featuredEl && DATA.featuredProducts) {
      renderProductsGrid(featuredEl, DATA.featuredProducts);
    }
    if (dealsEl && DATA.deals) {
      renderProductsGrid(dealsEl, DATA.deals);
    }
    if (categoriesEl) {
      renderCategories(categoriesEl);
    }
    if (reviewsEl) {
      renderReviews(reviewsEl);
    }
    if (aiEl) {
      renderAIRecommendations(aiEl);
    }

    initHero();
  }

  // ------------- Cart page rendering -------------
  function formatCurrency(value) {
    return "₹" + Number(value || 0).toLocaleString("en-IN");
  }

  function renderCartPage() {
    const container = document.querySelector("[data-cart-root]");
    if (!container) return;

    const items = getCartItems();
    if (!items.length) {
      container.innerHTML = `
        <div class="card empty-state text-center">
          <div class="empty-icon">🛒</div>
          <h2 class="section-title">Your cart is empty</h2>
          <p class="section-subtitle mt-sm">Looks like you haven't added anything yet.</p>
          <div class="mt-md">
            <a class="btn btn-primary" href="index.html">Continue shopping</a>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = "";
    const layout = document.createElement("div");
    layout.className = "cart-layout";

    const listCard = document.createElement("section");
    listCard.className = "card";

    const list = document.createElement("div");
    list.className = "stack";

    items.forEach((item) => {
      const imgUrl = DATA.getImageUrl ? DATA.getImageUrl(item.imageId) : "";
      const row = document.createElement("article");
      row.className = "cart-item";
      row.innerHTML = `
        <a href="product.html?id=${encodeURIComponent(item.id)}" class="cart-thumb">
          ${
            imgUrl
              ? `<img src="${imgUrl}" alt="${item.name}" loading="lazy" />`
              : `<div class="empty-icon">📦</div>`
          }
        </a>
        <div>
          <a href="product.html?id=${encodeURIComponent(item.id)}" class="cart-name">${
        item.name
      }</a>
          <p class="muted mt-sm">${formatCurrency(item.price)}</p>
          <div class="cart-qty mt-sm">
            <button class="btn btn-outline btn-icon" data-qty-dec data-product-id="${
              item.id
            }" aria-label="Decrease quantity">
              <span>−</span>
            </button>
            <input class="input qty-input" data-qty-input data-product-id="${item.id}" type="number" min="1" value="${
        item.quantity
      }" />
            <button class="btn btn-outline btn-icon" data-qty-inc data-product-id="${
              item.id
            }" aria-label="Increase quantity">
              <span>+</span>
            </button>
          </div>
        </div>
        <div class="stack-tight" style="align-items: flex-end;">
          <div><strong>${formatCurrency(item.price * item.quantity)}</strong></div>
          <button class="btn btn-outline btn-icon" data-remove-item data-product-id="${
            item.id
          }" aria-label="Remove ${item.name} from cart">
            <span>✕</span>
          </button>
        </div>
      `;
      list.appendChild(row);
    });

    listCard.appendChild(list);

    const summary = document.createElement("aside");
    summary.className = "card cart-summary";
    const total = getCartTotal();
    summary.innerHTML = `
      <h3 class="section-title" style="font-size:1rem;">Order summary</h3>
      <div class="stack-tight mt-sm">
        <div class="row row-space">
          <span class="muted">Subtotal</span>
          <span>${formatCurrency(total)}</span>
        </div>
        <div class="row row-space">
          <span class="muted">Shipping</span>
          <span class="badge badge-free">Free</span>
        </div>
      </div>
      <hr class="divider" />
      <div class="row row-space">
        <span>Total</span>
        <strong>${formatCurrency(total)}</strong>
      </div>
      <div class="mt-md">
        <a class="btn btn-primary" href="checkout.html">Proceed to checkout</a>
      </div>
    `;

    layout.appendChild(listCard);
    layout.appendChild(summary);
    container.appendChild(layout);
  }

  // ------------- Product detail page -------------
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function renderProductPage() {
    const root = document.querySelector("[data-product-root]");
    if (!root) return;
    const id = getQueryParam("id");
    if (!id) {
      root.innerHTML = `<div class="card empty-state text-center"><h2 class="section-title">Product not found</h2></div>`;
      return;
    }

    const product = findProduct(id);
    if (!product) {
      root.innerHTML = `<div class="card empty-state text-center"><h2 class="section-title">Product not found</h2></div>`;
      return;
    }

    const imgUrl = DATA.getImageUrl ? DATA.getImageUrl(product.imageId) : "";

    root.innerHTML = `
      <section class="product-layout">
        <div>
          <article class="card">
            <div class="product-detail-image">
              ${
                imgUrl
                  ? `<img src="${imgUrl}" alt="${product.name}" loading="lazy" />`
                  : `<div class="empty-icon">📦</div>`
              }
            </div>
          </article>
        </div>
        <div>
          <div class="stack">
            <div>
              <div class="pill">${product.category}</div>
              <h1 class="product-detail-title mt-sm">${product.name}</h1>
              <p class="muted mt-sm">${product.description}</p>
            </div>
            <div class="row row-space">
              <div class="stack-tight">
                <span class="product-detail-price">${formatCurrency(product.price)}</span>
                ${
                  product.originalPrice
                    ? `<span class="product-price-old">${formatCurrency(
                        product.originalPrice
                      )}</span>`
                    : ""
                }
              </div>
              <div class="stack-tight" style="align-items:flex-end;">
                <span class="product-rating">
                  <span class="rating-stars">${"★".repeat(Math.round(
                    product.rating
                  ))}${"☆".repeat(5 - Math.round(product.rating))}</span>
                  <span>${product.rating.toFixed(1)} • ${product.reviewCount} reviews</span>
                </span>
                <span class="pill pill-positive">In stock</span>
              </div>
            </div>
            <div class="row" style="gap:0.75rem;">
              <button class="btn btn-primary" data-add-to-cart data-product-id="${product.id}">
                <span>🛒</span>
                <span>Add to cart</span>
              </button>
              <button class="btn btn-outline" data-buy-now data-product-id="${product.id}">
                Buy now
              </button>
            </div>
            <section class="card card-muted">
              <h2 class="section-title" style="font-size:0.95rem;">Specifications</h2>
              <ul class="spec-list mt-sm">
                ${
                  product.specs
                    ? product.specs
                        .map(
                          (spec) => `
                  <li class="spec-item">
                    <span>${spec.name}</span>
                    <span>${spec.value}</span>
                  </li>`
                        )
                        .join("")
                    : ""
                }
              </ul>
            </section>
          </div>
        </div>
      </section>
    `;
  }

  // ------------- Contact page -------------
  function renderContactPage() {
    const imgShell = document.querySelector("[data-contact-image]");
    if (!imgShell) return;
    const contactImg = DATA.placeholderImages
      ? DATA.placeholderImages.find((img) => img.id === "contact-person")
      : null;
    if (!contactImg) return;
    imgShell.innerHTML = `<img src="${contactImg.imageUrl}" alt="Support Representative" loading="lazy" />`;
  }

  // ------------- Event delegation -------------
  function handleGlobalClicks(e) {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const addBtn = target.closest("[data-add-to-cart]");
    if (addBtn) {
      const productId = addBtn.getAttribute("data-product-id");
      if (productId) {
        addToCart(productId, 1);
      }
      e.preventDefault();
      return;
    }

    const buyNowBtn = target.closest("[data-buy-now]");
    if (buyNowBtn) {
      const productId = buyNowBtn.getAttribute("data-product-id");
      if (productId) {
        addToCart(productId, 1);
        window.location.href = "checkout.html";
      }
      e.preventDefault();
      return;
    }

    const decBtn = target.closest("[data-qty-dec]");
    if (decBtn) {
      const productId = decBtn.getAttribute("data-product-id");
      if (!productId) return;
      const items = getCartItems();
      const item = items.find((i) => i.id === productId);
      if (!item) return;
      const nextQty = Math.max(0, Number(item.quantity || 1) - 1);
      updateQuantity(productId, nextQty);
      renderCartPage();
      e.preventDefault();
      return;
    }

    const incBtn = target.closest("[data-qty-inc]");
    if (incBtn) {
      const productId = incBtn.getAttribute("data-product-id");
      if (!productId) return;
      const items = getCartItems();
      const item = items.find((i) => i.id === productId);
      if (!item) return;
      const nextQty = Number(item.quantity || 1) + 1;
      updateQuantity(productId, nextQty);
      renderCartPage();
      e.preventDefault();
      return;
    }

    const removeBtn = target.closest("[data-remove-item]");
    if (removeBtn) {
      const productId = removeBtn.getAttribute("data-product-id");
      if (productId) {
        removeFromCart(productId);
        renderCartPage();
      }
      e.preventDefault();
      return;
    }
  }

  function handleGlobalInput(e) {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.hasAttribute("data-qty-input")) {
      const productId = target.getAttribute("data-product-id");
      if (!productId) return;
      const value = parseInt(target.value, 10);
      const quantity = isNaN(value) || value < 1 ? 1 : value;
      updateQuantity(productId, quantity);
      renderCartPage();
    }
  }

  // ------------- Boot -------------
  function initPage() {
    const page = document.body.getAttribute("data-page");

    refreshCartBadge();

    if (page === "home") {
      initHomePage();
    } else if (page === "cart") {
      renderCartPage();
    } else if (page === "product") {
      renderProductPage();
    } else if (page === "contact") {
      renderContactPage();
    }
  }

  document.addEventListener("click", handleGlobalClicks);
  document.addEventListener("input", handleGlobalInput);
  window.addEventListener("DOMContentLoaded", initPage);

  // expose minimal API for debugging if needed
  window.DUBAI_TRONICS_CART = {
    addToCart,
    getCartItems,
    getCartCount,
    getCartTotal,
    updateQuantity,
    removeFromCart,
  };
})();

