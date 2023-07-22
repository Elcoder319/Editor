
/*================SELECTORS================= */
let  saturate = document.getElementById("saturate"),
 contrast = document.getElementById("contrast"),
 brightness = document.getElementById("brightness"),
 sepia = document.getElementById("sepia"),
 grayscale = document.getElementById("grayscale"),
 blur = document.getElementById("blur"),
 hue_rotate = document.getElementById("hue_rotate"),
 upload = document.getElementById("upload"),
 download = document.getElementById("download"),
 img = document.getElementById("image"),
 reset = document.querySelector("span"),
 imageBox = document.querySelector(".img-box"),
 width = document.getElementById("width"),
 height = document.getElementById("height"),
 child = document.querySelectorAll(".child li input"),
 show = document.getElementById("show"),
 filters = document.querySelectorAll("ul li input"),
 borderRadius = document.getElementById("border-radius"),
 opacity = document.getElementById("opacity"),
 rotate = document.getElementById("rotate"),
 skew = document.getElementById("skew");
/* =========FUNCTIONS ==============*/
/* ==================RESET ALL VALUE IN INPUT=====================*/
function resetValue() {
    img.style.borderRadius = "0%";
    img.style.opacity = "1";
    img.style.filter = 'none';
    saturate.value = "100";
    contrast.value = "100";
    brightness.value = "100";
    sepia.value = "0";
    grayscale.value = "0";
    hue_rotate.value = "0";
    blur.value = "0";
    opacity.value = "1";
    borderRadius.value = "0";
    img.classList.remove("image-filters-none");
    show.style.display = "none";
    skew.value = '0';
    rotate.value = '0';
    img.style.transform = 'rotate(0)';
    img.style.transform = 'skew(0)';

}

window.onload = function () {
    reset.style.display = 'none';
    download.style.display = 'none';
    imageBox.style.display = 'none';
    show.style.display = 'none';
}
/*================================== ADD IMAGE TO IMAGE BOX =============================*/
upload.onchange = function () {
    resetValue();
    show.style.display = 'none';
    reset.style.display = 'block';
    download.style.display = 'block';
    imageBox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result;
    }

}
/* ================================ADD FILTERS TO IMG======================*/
filters.forEach(filter => {
    filter.addEventListener("input", function () {
        img.style.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hue_rotate.value}deg)
     
        `
        if (img.src != "") {
            show.style.display = 'block';
            img.classList.remove("image-filters-none");


        }
    })

})

download.addEventListener('click', function () {
    download.href = img.src;
    img.classList.remove("image-filters-none");
})
/* ========================== SHOW BEFORE AND AFTER =====================*/
function showBefore() {
    img.classList.toggle("image-filters-none");
}
/*=========== CHANGE BORDER RADIUS =================*/
borderRadius.addEventListener('input', function () {
    img.style.borderRadius = ` ${borderRadius.value}%`;
})
/*=========== CHANGE OPACITY =================*/
opacity.addEventListener("input", function () {
    img.style.opacity = `${opacity.value}`
})
/*=========== Rotate img =================*/
rotate.addEventListener("input", () => {
    img.style.transform = `rotate(${rotate.value}deg)`;

})
/*=========== skew img =================*/
skew.addEventListener("input", () => {
    img.style.transform = `skew(${skew.value}deg)`
})