const images = document.querySelectorAll(".slider img");
const imag = document.getElementsByClassName("slider");
let currentImageIndex = 0; //bilde nummer
const imgList = ["pic/divios.png", "pic/karate.png", "pic/nigga.png"]; //bildene

window.onload = handleImageChange(1); //når vinduet laster bruk denne funksjonen
function startImageSlider() {
  setInterval(() => {
    handleImageChange(currentImageIndex + 1);
  }, 4000);
}

startImageSlider(); //bare kjør dette

function handleImageChange() {
  document.querySelectorAll("img").forEach((element) => {
    //før vi bytter bilde fjerner vi alle bildene fra før
    element.remove();
  });

  currentImageIndex = (currentImageIndex + 1) % imgList.length; //endre bildet index

  const item = document.createElement("img"); //lage nytt bilde element
  item.src = imgList[currentImageIndex]; //endre kilden til bilde

  document.getElementById("slider").appendChild(item); //legge til bilde
}

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", function (e) {
  nextBtn.addEventListener("click", handleImageChange(currentImageIndex + 1));
});

const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function (e) {
  backBtn.addEventListener("click", handleImageChange(currentImageIndex - 1));
});
