<script>
  // WhatsApp number
  const phoneNumber = "916363407163";

  // Handle Buy Now buttons
  document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const product = btn.closest(".product");
      const name = product.querySelector("h3").textContent.trim();
      const price = product.querySelector("span").textContent.trim();

      const msg = `Hi, I'd like to order ${name} – ${price}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    });
  });

  // Smooth scroll and mobile menu close
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });

      // Close menu on mobile after click
      document.getElementById("nav-menu").classList.remove("show");
    });
  });

  // Toggle mobile menu
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Hide menu if clicking outside
  window.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("show");
    }
  });
</script>
