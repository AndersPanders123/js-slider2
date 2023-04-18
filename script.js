const images = document.querySelectorAll('.slider img');
const imag = document.getElementsByClassName("slider")
let currentImageIndex = 1;
const imgList = [' <img src="pic/divios.png">','<img src="pic/karate.png">','<img src="pic/nigga.png">']
function startImageSlider() {
  setInterval(() => {
    console.log(imag[0].innerHTML)
    imag[0].innerHTML = imgList[currentImageIndex]
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }, 4000);
}

startImageSlider();

function startbackSlide() {
  console.log(currentImageIndex)
  currentImageIndex = currentImageIndex - 1
  imag[0].innerHTML = imgList[currentImageIndex]
}

function startnextSlide(){
  console.log(currentImageIndex , imgList.length)
  currentImageIndex = currentImageIndex + 1
  imag[0].innerHTML = imgList[currentImageIndex]
}


const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", function(e) {
      nextBtn.addEventListener('click', startnextSlide);
    });

const backBtn = document.getElementById("backBtn");
    backBtn.addEventListener("click", function(e) {
      backBtn.addEventListener('click', startbackSlide);
    });