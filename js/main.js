// EarthRise — shared behaviors: navbar state, mobile menu, scroll reveal

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  // Solidify navbar once the page is scrolled
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile hamburger menu
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });

  // Close the mobile menu after choosing a link
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  // Scroll-reveal animations
  const revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach((el) => observer.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("visible"));
  }

  // Pause other videos when one starts playing
  const videos = document.querySelectorAll("video");
  videos.forEach((v) =>
    v.addEventListener("play", () => {
      videos.forEach((other) => {
        if (other !== v) other.pause();
      });
    })
  );

  // YouTube embed slots: fill data-yt with a video ID to activate the player
  document.querySelectorAll(".yt-embed").forEach((slot) => {
    const id = (slot.dataset.yt || "").trim();
    const title = slot.dataset.title || "EarthRise video";
    if (id) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id);
      iframe.title = title;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      slot.appendChild(iframe);
    } else {
      slot.classList.add("yt-pending");
      slot.innerHTML =
        '<div class="yt-placeholder"><span class="yt-play">▶</span>' +
        "<strong>" + title + "</strong>" +
        "<span>Video coming soon to YouTube</span></div>";
    }
  });
});
