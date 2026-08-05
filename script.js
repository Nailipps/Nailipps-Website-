/* ============================================================
   NAILIPPS — site behaviour
   Product catalogue lives here as data, so adding a new set
   later means adding one object to this array — not touching
   the HTML at all.
   ============================================================ */

const WHATSAPP_NUMBER = "919916476333";     // <-- replace with your WhatsApp number, digits only, country code first (e.g. 919876543210)
const INSTAGRAM_HANDLE = "Nailipps";  // <-- replace with your Instagram username
const SITE_URL = "https://nailipps.online"; // <-- your live site — used to build the picture link in WhatsApp orders

const CATEGORY_LABELS = {
  all: "All",
  cateye: "Cat Eye",
  bold: "Bold & Dark",
  pastel: "Pastel & Soft",
  neutral: "Neutral & Warm"
};

const PRODUCTS = [
  { name: "Midnight Stardust", file: "Midnight Stardust.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 499, cat: "bold", desc: "A deep, elegant shade with a celestial sparkle that brings a bold and luxurious touch to your look." },
  { name: "Mandarian Glow", file: "Mandarian Glow.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 350, cat: "neutral", desc: "A warm, radiant shade inspired by golden sunsets, perfect for a fresh and glowing manicure." },
  { name: "Obsidian Glow", file: "Obsidian Glow.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 559, cat: "cateye", tag: "Cat Eye", desc: "A mysterious cat-eye finish with a magnetic glow for a striking and luxurious appearance." },
  { name: "Crushed Ruby", file: "Crushed Ruby.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 399, cat: "bold", desc: "A rich ruby-inspired set with a glamorous finish that adds confidence to every outfit." },
  { name: "Sage Blossom", file: "Sage Blossom.png", sizes: "Length- Short, Shape- Square, Size- Medium", price: 380, cat: "pastel", desc: "A soft sage tone that gives a calm, elegant and effortlessly chic vibe." },
  { name: "Olive Eclipse", file: "Olive Eclipse (1).png", sizes: "Length- Short, Shape- Square, Size- Medium", price: 420, cat: "neutral", desc: "A unique olive shade with a sophisticated edge, perfect for a statement look." },
  { name: "Ivory Muse", file: "Ivory Muse.jfif", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 399, cat: "neutral", desc: "A timeless ivory set with a clean, minimal and elegant aesthetic." },
  { name: "Caramel Veil", file: "Caramel Veil.jfif", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 599, cat: "neutral", desc: "A creamy caramel shade that creates a warm, classy and luxurious finish." },
  { name: "Midnight Marlot", file: "Midnight Marlot.jfif", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 599, cat: "bold", desc: "A rich dark-toned set designed for those who love a bold and elegant style." },
  { name: "Golden Petals", file: "Golden Petals.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 799, cat: "bold", desc: "A luxurious golden design inspired by delicate petals and a touch of glamour." },
  { name: "Berry Blush", file: "berry-blush.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 370, cat: "pastel", desc: "A soft berry-toned set with a delicate feminine charm, perfect for an elegant everyday look." },
  { name: "Soft Sage", file: "soft-sage.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 699, cat: "cateye", tag: "Cat Eye", desc: "A calming sage shade enhanced with a magical cat-eye glow for a unique finish." },
  { name: "Night Prowl", file: "night-prowl.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 450, cat: "bold", desc: "A bold dark set created for a mysterious and confident statement look." },
  { name: "Chocolate Chic", file: "chocolate-chic.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 499, cat: "neutral", desc: "A rich chocolate-inspired shade that brings warmth and luxury to your nails." },
  { name: "Blush Sparkle", file: "blush-sparkle.png", sizes: "Length- Short, Shape- Square, Size- Medium", price: 399, cat: "pastel", desc: "A soft blush shade with a sparkling touch for a dreamy and glamorous finish." },
  { name: "Bronze Glow", file: "bronze-glow.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 499, cat: "neutral", desc: "A warm bronze shade with a radiant finish for a sophisticated look." },
  { name: "Velvet Noir", file: "velvet-noir.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 700, cat: "cateye", tag: "Cat Eye", desc: "A luxurious dark cat-eye finish with a velvet-like magnetic shine." },
  { name: "Silk Blush", file: "silk-blush.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 650, cat: "cateye", tag: "Cat Eye", desc: "A soft blush cat-eye design with a silky glow and elegant appeal." },
  { name: "Blue Opal", file: "blue-opal.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 699, cat: "cateye", tag: "Cat Eye", desc: "A dreamy blue cat-eye design inspired by the shine of precious opal stones." },
  { name: "Pretty in Paws", file: "pretty-in-paws.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 599, cat: "pastel", desc: "A playful yet elegant design made to add a cute and stylish touch to your look." },
  { name: "Bloom Babe", file: "Bloom Babe.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 599, cat: "pastel", desc: "A soft and feminine floral-inspired set with an elegant and fresh finish." },
  { name: "Dark Drift", file: "Dark Drift.png", sizes: "Length- Short, Shape- Square, Size- Medium, Matte Finish", price: 450, cat: "bold", desc: "A bold dark design created for a mysterious and confident look." },
  { name: "Bluebell Bow", file: "Bluebell Bow.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 450, cat: "pastel", desc: "A charming blue set with a delicate bow detail for a cute and classy style." },
  { name: "Wine Whisper", file: "Wine Whisper.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 699, cat: "cateye", tag: "Cat Eye", desc: "A rich wine shade with a magnetic cat-eye glow for a luxurious finish." },
  { name: "Scarlet Petal", file: "Scarlet Petal.png", sizes: "Length- Short, Shape- Square, Size- Medium", price: 450, cat: "bold", desc: "A bold scarlet red set that adds confidence and timeless elegance." },
  { name: "Midnight Marble", file: "Midnight Marble.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 429, cat: "bold", desc: "A sophisticated marble-inspired design with a dark luxury finish." },
  { name: "Bluebell Bloom", file: "Bluebell Bloom.png", sizes: "Length- Short, Shape- Square, Size- Small", price: 399, cat: "pastel", desc: "A dreamy blue floral-inspired set with a soft and graceful look." },
  { name: "Ash & Ivory", file: "Ash & Ivory.png", sizes: "Length- Short, Shape- Almond, Size- Medium, Matte Finish", price: 399, cat: "neutral", desc: "A minimal neutral-toned set combining elegance and sophistication." },
  { name: "Black Stardust", file: "Black Stardust.png", sizes: "Length- Short, Shape- Square, Size- Medium", price: 380, cat: "bold", desc: "A dark glamorous set with a sparkling finish for a bold statement." },
  { name: "Mocha Muse", file: "Mocha Muse.png", sizes: "Length- Short, Shape- Almond, Size- Medium, Matte Finish", price: 399, cat: "neutral", desc: "A warm mocha-inspired design for a chic everyday luxury look." },
  { name: "Toffee Temptation", file: "Toffee Temptation.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 370, cat: "neutral", desc: "A warm caramel-inspired set with a sweet and elegant finish." },
  { name: "Bubblegum Bliss", file: "Bubblegum Bliss.png", sizes: "Length- Short, Shape- Almond, Size- Medium, Matte Finish", price: 399, cat: "pastel", desc: "A playful pink set with a cute and dreamy vibe." },
  { name: "Lilac Dream", file: "Lilac Dream.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 350, cat: "pastel", desc: "A soft lilac shade creating a delicate and dreamy nail look." },
  { name: "Golden Cocoa", file: "Golden Cocoa.png", sizes: "Length- Short, Shape- Almond, Size- Large", price: 450, cat: "neutral", desc: "A rich cocoa shade with a golden glow for a luxurious finish." },
  { name: "Love Spell", file: "Love Spell.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 370, cat: "pastel", desc: "A romantic and elegant set designed for a charming statement look." },
  { name: "Pink Muse", file: "Pink Muse1.png", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 399, cat: "pastel", desc: "A soft pink set with a feminine finish for your main character moment." },
  { name: "Crimson Elegance", file: "Crimson_Elegance.jfif", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 899, cat: "bold", desc: "A daring wine-red set with leopard print, gold French tips and cherry charms for a bold, statement-making finish." },
  { name: "Shadow French", file: "Shadow_French.jfif", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 450, cat: "neutral", desc: "A modern take on the classic French tip, with a nude base and sleek black tips finished in glitter shimmer." },
  { name: "Cherry Charm", file: "Cherry_Charm.jfif", sizes: "Length- Medium, Shape- Stiletto, Size- Medium", price: 899, cat: "bold", desc: "A playful mix of tortoiseshell print, chocolate French tips, 3D florals and gold charms, finished with a sweet cherry accent." },
  { name: "Pearl Veil", file: "Pearl_Veil.jfif", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 699, cat: "pastel", desc: "A soft champagne shimmer set with delicate gold linework and a dainty pearl-bead accent for a romantic, bridal-worthy finish." },
  { name: "Moon Pearl", file: "Moon_Pearl.jfif", sizes: "Length- Short, Shape- Almond, Size- Medium", price: 370, cat: "pastel", desc: "A luminous pearlescent white set with a soft opalescent shimmer, elegant in its simplicity." }
];

const PER_PAGE = 10;
const state = { category: "all", page: 1 };

function waLink(productName, fileName, price){
  const imageUrl = `${SITE_URL}/${encodeURI(fileName)}`;
  const msg = encodeURIComponent(
    `Hi Nailipps! I'd love to order the "${productName}" set (₹${price.toFixed(2)}).\n${imageUrl}\n\n(Note: shipping charges apply based on your location.)`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function getFiltered(){
  return state.category === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === state.category);
}

function escAttr(str){
  return String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function truncate(str, n){
  return str.length > n ? str.slice(0, n).trim() + "…" : str;
}

function cardHTML(p, i){
  return `
    <article class="product-card reveal" data-cat="${p.cat}" data-lightbox-trigger
      data-name="${escAttr(p.name)}" data-file="${escAttr(p.file)}" data-price="${p.price.toFixed(2)}"
      data-sizes="${escAttr(p.sizes)}" data-desc="${escAttr(p.desc)}"
      style="transition-delay:${(i % 6) * 60}ms">
      <div class="thumb">
        ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}
        <img src="${encodeURI(p.file)}" alt="${p.name} press-on nail set" loading="lazy">
      </div>
      <div class="body">
        <h3>${p.name}</h3>
        <p class="product-desc">${truncate(p.desc, 65)}</p>
        <p class="price">₹${p.price.toFixed(2)}</p>
        <a href="${waLink(p.name, p.file, p.price)}" class="btn" target="_blank" rel="noopener">Order Now</a>
      </div>
    </article>
  `;
}

function renderPagination(totalPages){
  const bar = document.getElementById("paginationBar");
  if(!bar) return;
  if(totalPages <= 1){ bar.innerHTML = ""; return; }

  let html = `<button class="page-btn" data-page="prev" ${state.page === 1 ? "disabled" : ""}>‹ Prev</button>`;
  for(let n = 1; n <= totalPages; n++){
    html += `<button class="page-btn${n === state.page ? " active" : ""}" data-page="${n}">${n}</button>`;
  }
  html += `<button class="page-btn" data-page="next" ${state.page === totalPages ? "disabled" : ""}>Next ›</button>`;
  bar.innerHTML = html;
}

function renderGrid(){
  const grid = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  if(!grid) return;

  const filtered = getFiltered();
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  if(state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  grid.innerHTML = pageItems.map(cardHTML).join("");
  if(empty) empty.classList.toggle("show", filtered.length === 0);
  renderPagination(totalPages);
  setupReveal();
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
    state.category = btn.dataset.cat;
    state.page = 1;
    renderGrid();
  });
}

function setupPagination(){
  const bar = document.getElementById("paginationBar");
  if(!bar) return;
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-btn");
    if(!btn || btn.disabled) return;
    const filtered = getFiltered();
    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    if(btn.dataset.page === "prev") state.page = Math.max(1, state.page - 1);
    else if(btn.dataset.page === "next") state.page = Math.min(totalPages, state.page + 1);
    else state.page = parseInt(btn.dataset.page, 10);
    renderGrid();
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth", block: "start" });
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

function parseSizes(str){
  const parts = str.split(",").map(s => s.trim());
  const result = { length: "", shape: "", size: "", extra: "" };
  parts.forEach(part => {
    if(/^Length-/i.test(part)) result.length = part.replace(/^Length-\s*/i, "");
    else if(/^Shape-/i.test(part)) result.shape = part.replace(/^Shape-\s*/i, "");
    else if(/^Size-/i.test(part)) result.size = part.replace(/^Size-\s*/i, "");
    else if(part) result.extra = part;
  });
  return result;
}

function setupLightbox(){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  if(!lightbox || !lightboxImg) return;

  document.addEventListener("click", (e) => {
    if(e.target.closest(".btn")) return; // let Order Now work normally, don't open the page
    const trigger = e.target.closest("[data-lightbox-trigger]");
    if(!trigger) return;

    lightboxImg.src = encodeURI(trigger.dataset.file);
    lightboxImg.alt = trigger.dataset.name;
    document.getElementById("lightboxName").textContent = trigger.dataset.name;
    document.getElementById("lightboxDesc").textContent = trigger.dataset.desc;
    document.getElementById("lightboxPrice").textContent = `₹${trigger.dataset.price}`;
    document.getElementById("lightboxOrder").href = waLink(trigger.dataset.name, trigger.dataset.file, parseFloat(trigger.dataset.price));

    const parsed = parseSizes(trigger.dataset.sizes);
    document.getElementById("sizeLength").textContent = parsed.length || "—";
    document.getElementById("sizeShape").textContent = parsed.shape || "—";
    document.getElementById("sizeSize").textContent = parsed.size || "—";
    const extraRow = document.getElementById("sizeExtraRow");
    if(parsed.extra){
      document.getElementById("sizeExtraLabel").textContent = "Finish";
      document.getElementById("sizeExtraValue").textContent = parsed.extra;
      extraRow.style.display = "flex";
    } else {
      extraRow.style.display = "none";
    }

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    lightbox.scrollTop = 0;
  });

  const close = () => {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderGrid();
  wireWhatsAppLinks();
  setupNav();
  setupBackToTop();
  setupLightbox();
  setupPagination();
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
