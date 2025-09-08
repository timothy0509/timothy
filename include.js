async function includeHTML(id, file, callback) {
  const el = document.getElementById(id);
  if (el) {
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
    if (callback) callback();
  }
}

// Load header + footer
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "layout/header.html", () => {
    // After header loads, init theme toggle
    const script = document.createElement("script");
    script.src = "layout/theme.js";
    script.onload = () => {
      initThemeToggle();

      // Highlight active nav link
      const currentPage = window.location.pathname.split("/").pop();
      document.querySelectorAll("nav a").forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
          link.classList.add(
            "text-blue-600",
            "dark:text-blue-400",
            "font-semibold",
            "border-b-2",
            "border-blue-600",
          );
        }
      });
    };
    document.body.appendChild(script);
  });

  includeHTML("footer", "layout/footer.html");
});
