<script>
  // WhatsApp number
  const phoneNumber = "916363407163";

  // Handle "Buy Now" buttons
  document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const product = btn.closest(".product");
      const name = product.querySelector("h3").textContent.trim();
      const price = product.querySelector("span").textContent.trim();

      const msg = `Hi, I'd like to order ${name} – ${price}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

      // Try to open WhatsApp in a new tab
      const newTab = window.open(url, "_blank");

      // Fallback if popup is blocked
      if (!newTab) {
        window.location.href = url;
      }
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });

      // Close mobile menu if open
      document.getElementById("nav-menu").classList.remove("show");
    });
  });

  // Mobile nav toggle
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Hide nav menu on outside click (mobile)
  window.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });
</script>
