var modal = document.getElementById("myModal");
var modalImg = document.querySelector(".modal-image");
var images = document.querySelectorAll(".image");
var closeButton = document.querySelector(".close");

images.forEach(function(image) {
  image.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
