// Logic for toggle the theme
function toggleTheme() {
  // Find the <html> element
  let htmlElement = document.querySelector("html");

  // Read the current data-theme value
  let currentTheme = htmlElement.dataset.theme;

  // If current theme === "dark" then data-them="light"
  if (currentTheme === "dark") {
    htmlElement.dataset.theme = "light";
  } else {
    // else data-theme="dark"
    htmlElement.dataset.theme = "dark";
  }
}

// Find the button that should trigger the function
let themeButton = document.getElementById("toggle-theme");
themeButton.addEventListener("click", toggleTheme);
