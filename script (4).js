/* ============================================================
   NAILIPPS — site behaviour
   Product catalogue lives here as data, so adding a new set
   later means adding one object to this array — not touching
   the HTML at all.
   ============================================================ */

const WHATSAPP_NUMBER = "YOURNUMBER";     // <-- replace with your WhatsApp number, digits only, country code first (e.g. 919876543210)
const INSTAGRAM_HANDLE = "YOURUSERNAME";  // <-- replace with your Instagram username
const SITE_URL = "https://nailipps.online"; // <-- your live site — used to build the picture link in WhatsApp orders

const CATEGORY_LABELS = {
  all: "All",
  cateye: "Cat Eye",
  bold: "Bold & Dark",
  pastel: "Pastel & Soft",
  neutral: "Neutral & Warm"
};

const PRODUCTS = [
  { name: "Midnight Stardust", file: "Midnight Stardust.png", price: 499, cat: "bold", desc: "A deep, elegant shade with a celestial sparkle that brings a bold and luxurious touch to your look." },
  { name: "Mandarian Glow", file: "Mandarian Glow.png", price: 350, cat: "neutral", desc: "A warm, radiant shade inspired by golden sunsets, perfect for a fresh and glowing manicure." },
  { name: "Obsidian Glow", file: "Obsidian Glow.png", price: 559, cat: "cateye", tag: "Cat Eye", desc: "A mysterious cat-eye finish with a magnetic glow for a striking and luxurious appearance." },
  { name: "Crushed Ruby", file: "Crushed Ruby.png", price: 399, cat: "bold", desc: "A rich ruby-inspired set with a glamorous finish that adds confidence to every outfit." },
  { name: "Sage Blossom", file: "Sage Blossom.png", price: 380, cat: "pastel", desc: "A soft sage tone that gives a calm, elegant and effortlessly chic vibe." },
  { name: "Olive Eclipse", file: "Olive Eclipse (1).png", price: 420, cat: "neutral", desc: "A unique olive shade with a sophisticated edge, perfect for a statement look." },
  { name: "Ivory Muse", file: "Ivory Muse.jfif", price: 399, cat: "neutral", desc: "A timeless ivory set with a clean, minimal and elegant aesthetic." },
  { name: "Caramel Veil", file: "Caramel Veil.jfif", price: 599, cat: "neutral", desc: "A creamy caramel shade that creates a warm, classy and luxurious finish." },
  { name: "Midnight Marlot", file: "Midnight Marlot.jfif", price: 599, cat: "bold", desc: "A rich dark-toned set designed for those who love a bold and elegant style." },
  { name: "Golden Petals", file: "Golden Petals.png", price: 799, cat: "bold", desc: "A luxurious golden design inspired by delicate petals and a touch of glamour." },
  { name: "Berry Blush", file: "berry-blush.png", price: 370, cat: "pastel", desc: "A soft berry-toned set with a delicate feminine charm, perfect for an elegant everyday look." },
  { name: "Soft Sage", file: "soft-sage.png", price: 699, cat: "cateye", tag: "Cat Eye", desc: "A calming sage shade enhanced with a magical cat-eye glow for a unique finish." },
  { name: "Night Prowl", file: "night-prowl.png", price: 450, cat: "bold", desc: "A bold dark set created for a mysterious and confident statement look." },
  { name: "Chocolate Chic", file: "chocolate-chic.png", price: 499, cat: "neutral", desc: "A rich chocolate-inspired shade that brings warmth and luxury to your nails." },
  { name: "Blush Sparkle", file: "blush-sparkle.png", price: 399, cat: "pastel", desc: "A soft blush shade with a sparkling touch for a dreamy and glamorous finish." },
  { name: "Bronze Glow", file: "bronze-glow.png", price: 499, cat: "neutral", desc: "A warm bronze shade with a radiant finish for a sophisticated look." },
  { name: "Velvet Noir", file: "velvet-noir.png", price: 700, cat: "cateye", tag: "Cat Eye", desc: "A luxurious dark cat-eye finish with a velvet-like magnetic shine." },
  { name: "Silk Blush", file: "silk-blush.png", price: 650, cat: "cateye", tag: "Cat Eye", desc: "A soft blush cat-eye design with a silky glow and elegant appeal." },
  { name: "Blue Opal", file: "blue-opal.png", price: 699, cat: "cateye", tag: "Cat Eye", desc: "A dreamy blue cat-eye design inspired by the shine of precious opal stones." },
  { name: "Pretty in Paws", file: "pretty-in-paws.png", price: 599, cat: "pastel", desc: "A playful yet elegant design made to add a cute and stylish touch to your look." },
  { name: "Bloom Babe", file: "Bloom Babe.png", price: 599, cat: "pastel", desc: "A soft and feminine floral-inspired set with an elegant and fresh finish." },
  { name: "Dark Drift", file: "Dark Drift.png", price: 450, cat: "bold", desc: "A bold dark design created for a mysterious and confident look." },
  { name: "Bluebell Bow", file: "Bluebell Bow.png", price: 450, cat: "pastel", desc: "A charming blue set with a delicate bow detail for a cute and classy style." },
  { name: "Wine Whisper", file: "Wine Whisper.png", price: 699, cat: "cateye", tag: "Cat Eye", desc: "A rich wine shade with a magnetic cat-eye glow for a luxurious finish." },
  { name: "Scarlet Petal", file: "Scarlet Petal.png", price: 450, cat: "bold", desc: "A bold scarlet red set that adds confidence and timeless elegance." },
  { name: "Midnight Marble", file: "Midnight Marble.png", price: 429, cat: "bold", desc: "A sophisticated marble-inspired design with a dark luxury finish." },
  { name: "Bluebell Bloom", file: "Bluebell Bloom.png", price: 399, cat: "pastel", desc: "A dreamy blue floral-inspired set with a soft and graceful look." },
  { name: "Ash & Ivory", file: "Ash & Ivory.png", price: 399, cat: "neutral", desc: "A minimal neutral-toned set combining elegance and sophistication." },
  { name: "Black Stardust", file: "Black Stardust.png", price: 380, cat: "bold", desc: "A dark glamorous set with a sparkling finish for a bold statement." },
  { name: "Mocha Muse", file: "Mocha Muse.png", price: 399, cat: "neutral", desc: "A warm mocha-inspired design for a chic everyday luxury look." },
  { name: "Toffee Temptation", file: "Toffee Temptation.png", price: 370, cat: "neutral", desc: "A warm caramel-inspired set with a sweet and elegant finish." },
  { name: "Bubblegum Bliss", file: "Bubblegum Bliss.png", price: 399, cat: "pastel", desc: "A playful pink set with a cute and dreamy vibe." },
  { name: "Lilac Dream", file: "Lilac Dream.png", price: 350, cat: "pastel", desc: "A soft lilac shade creating a delicate and dreamy nail look." },
  { name: "Golden Cocoa", file: "Golden Cocoa.png", price: 450, cat: "neutral", desc: "A rich cocoa shade with a golden glow for a luxurious finish." },
  { name: "Love Spell", file: "Love Spell.png", price: 370, cat: "pastel", desc: "A romantic and elegant set designed for a charming statement look." },
  { name: "Pink Muse", file: "Pink Muse1.png", price: 399, cat: "pastel", desc: "A soft pink set with a feminine finish for your main character moment." },
  { name: "Crimson Elegance", file: "Crimson_Elegance.jfif", price: 899, cat: "bold", desc: "A daring wine-red set with leopard print, gold French tips and cherry charms for a bold, statement-making finish." },
  { name: "Shadow French", file: "Shadow_French.jfif", price: 450, cat: "neutral", desc: "A modern take on the classic French tip, with a nude base and sleek black tips finished in glitter shimmer." },
  { name: "Cherry Charm", file: "Cherry_Charm.jfif", price: 899, cat: "bold", desc: "A playful mix of tortoiseshell print, chocolate French tips, 3D florals and gold charms, finished with a sweet cherry accent." },
  { name: "Pearl Veil", file: "Pearl_Veil.jfif", price: 699, cat: "pastel", desc: "A soft champagne shimmer set with delicate gold linework and a dainty pearl-bead accent for a romantic, bridal-worthy finish." },
  { name: "Moon Pearl", file: "Moon_Pearl.jfif", price: 370, cat: "pastel", desc: "A luminous pearlescent white set with a soft opalescent shimmer, elegant in its simplicity." }
];

function waLink(productName, fileName, price){
  const imageUrl = `${SITE_URL}/${encodeURI(fileName)}`;
  const msg = encodeURIComponent(
    `Hi Nailipps! I'd love to order the "${productName}" set (₹${price.toFixed(2)}).\n${imageUrl}\n\n(Note: shipping charges apply based on my location.)`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function renderProducts(){
  const grid = document.getElementById("productsGrid");
  if(!grid) return;
  grid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="product-card reveal" data-cat="${p.cat}" style="transition-delay:${(i % 6) * 60}ms">
      <div class="thumb" data-lightbox-trigger>
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        <img src="${encodeURI(p.file)}" alt="${p.name} press-on nail set" loading="lazy">
      </div>
      <div class="body">
        <h3>${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <p class="price">₹${p.price.toFixed(2)}</p>
        <p class="shipping-note">+ shipping charges apply based on location</p>
        <a href="${waLink(p.name, p.file, p.price)}" class="btn" target="_blank" rel="noopener">Order Now</a>
      </div>
    </article>
  `).join("");
}

function renderFilters(){
  const bar = document.getElementById("filterBar");
  if(!bar) return;
  const cats = ["all", ...new Set(PRODUCTS.map(p => p.cat))];
  bar.innerHTML = cats.map(c =>
    `<button class="filter-chip${c === "all" ? " active" : ""}" data-cat="${c}">${CATEGORY_LABELS[c] || c}</button>`
  ).join("");

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if(!btn) return;
    bar.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.cat;
    const cards = document.querySelectorAll(".product-card");
    let visible = 0;
    cards.forEach(card => {
      const show = cat === "all" || card.dataset.cat === cat;
      card.classList.toggle("is-hidden", !show);
      if(show) visible++;
    });
    const empty = document.getElementById("emptyState");
    if(empty) empty.classList.toggle("show", visible === 0);
  });
}

function wireWhatsAppLinks(){
  document.querySelectorAll('a[href^="https://wa.me/YOURNUMBER"]').forEach(a => {
    if(a.closest(".product-card")) return; // already built with a message
    a.href = `https://wa.me/${WHATSAPP_NUMBER}`;
  });
  document.querySelectorAll('a[href^="https://instagram.com/YOURUSERNAME"]').forEach(a => {
    a.href = `https://instagram.com/${INSTAGRAM_HANDLE}`;
  });
}

function setupNav(){
  const nav = document.querySelector("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  if(toggle && links){
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
    }));
  }
}

function setupReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

function setupBackToTop(){
  const btt = document.getElementById("backToTop");
  if(!btt) return;
  btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupLightbox(){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  if(!lightbox || !lightboxImg) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lightbox-trigger]");
    if(!trigger) return;
    const img = trigger.querySelector("img");
    if(!img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  const close = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if(e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProducts();
  wireWhatsAppLinks();
  setupNav();
  setupReveal();
  setupBackToTop();
  setupLightbox();
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
