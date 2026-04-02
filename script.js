//your JS code here. If required.
(() => {
  const form = document.querySelector("form");
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");

  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
      const [key, val] = c.split("=");
      if (key === name) return val;
    }
    return null;
  }

  function applyStyles(size, color) {
    if (size) {
      document.documentElement.style.setProperty("--fontsize", size + "px");
    }
    if (color) {
      document.documentElement.style.setProperty("--fontcolor", color);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const size = fontSizeInput.value;
    const color = fontColorInput.value;

    setCookie("fontsize", size);
    setCookie("fontcolor", color);

    applyStyles(size, color);
  });

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