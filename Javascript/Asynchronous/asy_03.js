async function loadNPause() {
  try {
    let img = await createImage("img/img-1.jpg");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
}

loadNPause();
async function loadAll(imgArr) {
  try {
    const imgs = imgArr.map(async function (img) {
      return await createImage(img);
    });

    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
}

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
