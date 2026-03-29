const pattern = new URLSearchParams(window.location.search).get("pattern");
if (pattern) {
    document.getElementById("bubble-text").textContent = pattern;
}
