const menuBtn = document.getElementById("menuBtn");
const siteNav = document.getElementById("siteNav");

document.documentElement.classList.add("js-enabled");

if (menuBtn && siteNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab;

    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });

    tabPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    const activePanel = document.getElementById(tabId);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section-reveal").forEach((section) => {
  revealObserver.observe(section);
});

const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const target = Number(counter.getAttribute("data-target"));
      const duration = 1000;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        counter.textContent = Math.floor(progress * target).toString();
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target.toString();
        }
      }

      requestAnimationFrame(update);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.7 }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

const packagePrices = {
  "essential-umrah-saver": "INR 89,999",
  "domestic-ziyrath-prep": "INR 29,999",
  "comfort-plus-umrah": "INR 1,39,999",
  "guided-hajj-comfort": "INR 4,29,999",
  "royal-umrah-signature": "INR 2,29,999",
  "elite-hajj-concierge": "INR 5,49,999",
};

document.querySelectorAll("[data-package-price]").forEach((priceNode) => {
  const key = priceNode.getAttribute("data-package-price");
  if (!key) {
    return;
  }
  const mappedPrice = packagePrices[key];
  if (mappedPrice) {
    priceNode.textContent = `Starting from ${mappedPrice}`;
  }
});

const chipButtons = document.querySelectorAll(".chip-btn");
const packageCards = document.querySelectorAll(".package-card");

chipButtons.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.getAttribute("data-filter") || "all";

    chipButtons.forEach((btn) => btn.classList.remove("active"));
    chip.classList.add("active");

    packageCards.forEach((card) => {
      const themes = (card.getAttribute("data-theme") || "").split(/\s+/);
      const show = filter === "all" || themes.includes(filter);
      card.classList.toggle("hidden", !show);
    });
  });
});

const customPackageForm = document.getElementById("customPackageForm");
const googleFormBtn = document.getElementById("openGoogleFormBtn");

if (customPackageForm && googleFormBtn) {
  const googleFormUrl = customPackageForm.getAttribute("data-google-form-url");
  if (googleFormUrl) {
    googleFormBtn.setAttribute("href", googleFormUrl);
  }

  customPackageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(customPackageForm);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const month = String(formData.get("month") || "").trim();
    const travelers = String(formData.get("travelers") || "").trim();
    const budget = String(formData.get("budget") || "").trim();

    const message = [
      "Assalamu Alaikum, I need a custom package.",
      `Name: ${name}`,
      `Mobile: ${phone}`,
      `City: ${city || "Not provided"}`,
      `Preferred Month: ${month || "Not provided"}`,
      `Travelers: ${travelers || "Not provided"}`,
      `Budget: ${budget || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/917676178866?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
