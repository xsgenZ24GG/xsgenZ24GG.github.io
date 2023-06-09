function toggleDarkMode() {
  var body = document.querySelector("body");
  var modeButton = document.querySelector(".mode-button");
  var sunMoon = document.querySelector(".sun-moon");
  var modeText = document.querySelector(".mode-text");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("light-mode"); // Menghapus class "light-mode" jika ada
    modeButton.setAttribute("aria-label", "Switch to Light Mode");
    sunMoon.style.backgroundImage = "url('https://w7.pngwing.com/pngs/44/255/png-transparent-full-moon-earth-supermoon-lunar-eclipse-full-moon-moon-atmosphere-computer-wallpaper-sphere-thumbnail.png')";
    modeText.textContent = "Mode Siang";
  } else {
    body.classList.add("light-mode"); // Menambah class "light-mode" saat mode siang
    modeButton.setAttribute("aria-label", "Switch to Dark Mode");
    sunMoon.style.backgroundImage = "url('https://w7.pngwing.com/pngs/207/558/png-transparent-orange-sun-sunlight-sunlight-solar-eclipse-sun-sphere-astronomical-object-light-thumbnail.png')";
    modeText.textContent = "Mode Malam";
  }
}

toggleDarkMode(); // Memanggil fungsi toggleDarkMode() saat halaman dimuat
