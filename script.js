// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = ["players", "routes", "tickets", "bonuses", "custom"];
    const container = document.getElementById("calculator-container");

    sections.forEach(section => {
        fetch(`components/${section}.html`)
            .then(response => response.text())
            .then(html => {
                const div = document.createElement("div");
                div.innerHTML = html;
                container.appendChild(div);
            })
            .catch(err => console.error(`Error loading ${section}:`, err));
    });
});
