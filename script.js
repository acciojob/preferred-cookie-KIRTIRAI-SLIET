//your JS code here. If required.
(() => {
  const form = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  // Helper: set cookie
  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
  }

  // Helper: get cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, val] = c.split("=");
      if (key === name) return val;
    }
    return null;
  }

  // Apply styles from values
  function applyStyles(size, color) {
    if (size) {
      document.documentElement.style.setProperty("--fontsize", size + "px");
    }
    if (color) {
      document.documentElement.style.setProperty("--fontcolor", color);
    }
  }

  // On form submit → save cookies
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const size = fontSizeInput.value;
    const color = fontColorInput.value;

    setCookie("fontsize", size);
    setCookie("fontcolor", color);

    applyStyles(size, color);
  });

  // On page load → read cookies
  window.addEventListener("DOMContentLoaded", () => {
    const savedSize = getCookie("fontsize");
    const savedColor = getCookie("fontcolor");

    if (savedSize) {
      fontSizeInput.value = savedSize;
    }

    if (savedColor) {
      fontColorInput.value = savedColor;
    }

    applyStyles(savedSize, savedColor);
  });
})();