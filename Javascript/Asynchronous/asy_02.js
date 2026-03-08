const imgContainer = document.querySelector(".images");

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
}

let currentImg;

createImage("img/img-1.jpg")
  .then(function (img) {
    currentImg = img;
    return wait(2);
  })
  .then(function () {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then(function (img) {
    currentImg = img;
    return wait(2);
  })
  .then(function () {
    currentImg.style.display = "none";
  })
  .catch(function (err) {
    console.error(err);
  });
