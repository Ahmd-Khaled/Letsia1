// Adding Image title from data set attr
let box = document.querySelectorAll(".our-works .tabs .tab-content .box");
let boxAttr;
let imgTitle;

// console.log(boxAttr);
box.forEach(function (ele) {
    console.log(ele)
    boxAttr = ele.getAttribute("data-imgtitle");
    imgTitle = document.createTextNode(boxAttr);
    ele.appendChild(imgTitle);
});





// Scroll to Top
let toTopBtn = document.querySelector(".to-top");

window.onscroll = function () {
    if (this.scrollY >= screen.height) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
};
toTopBtn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};

