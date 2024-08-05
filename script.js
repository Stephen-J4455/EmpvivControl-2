const notification = document.getElementById("note");
const noteBox = document.querySelector(".notification");

document.addEventListener("DOMContentLoaded", function () {
    const productId = generateProductId();
    document.getElementById("productId").value = productId;
    document.getElementById("generatedProductId").textContent = productId;
});

document
    .getElementById("productImageMain")
    .addEventListener("change", function (event) {
        const files = event.target.files;
        const previewContainer = document.getElementById("imagePreviewMain");
        previewContainer.innerHTML = "";

        if (files.length > 0) {
            const mainImage = document.createElement("img");
            mainImage.src = URL.createObjectURL(files[0]);
            previewContainer.appendChild(mainImage);
        }
    });

document
    .getElementById("productImage1")
    .addEventListener("change", function (event) {
        previewImage(event, "imagePreview1");
    });

document
    .getElementById("productImage2")
    .addEventListener("change", function (event) {
        previewImage(event, "imagePreview2");
    });

document
    .getElementById("productImage3")
    .addEventListener("change", function (event) {
        previewImage(event, "imagePreview3");
    });

document
    .getElementById("productImage4")
    .addEventListener("change", function (event) {
        previewImage(event, "imagePreview4");
    });

function generateProductId() {
    return "prod_" + Math.random().toString(36).substr(2, 9);
}

function previewImage(event, previewElementId) {
    const files = event.target.files;
    const previewContainer = document.getElementById(previewElementId);
    previewContainer.innerHTML = "";

    if (files.length > 0) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(files[0]);
        previewContainer.appendChild(image);
    }
}

function getImage() {
    document
        .getElementById("fileInput")
        .addEventListener("change", function () {
            var file1 = this.files[0];
            if (file1) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    document
                        .getElementById("imageDisplay")
                        .setAttribute("src", e.target.result);
                };
                reader.readAsDataURL(file1);
            }
        });
}
getImage();
function openMenu() {
    const menu = document.querySelector(".nav-menu");
    const hambar = document.querySelector(
        ".ham-menu-container span:nth-child(1)"
    );
    const hambar1 = document.querySelector(
        ".ham-menu-container span:nth-child(2)"
    );
    const hambar2 = document.querySelector(
        ".ham-menu-container span:nth-child(3)"
    );
    if (menu.style.right === "145px") {
        menu.style.right = "400px";
        menu.style.transition = "0.3s ease";
        hambar.classList.remove("active");
        hambar1.classList.remove("active");
        hambar2.classList.remove("active");
    } else {
        menu.style.right = "145px";
        menu.style.transition = "0.3s ease";
        hambar.classList.add("active");
        hambar1.classList.add("active");
        hambar2.classList.add("active");
    }
}
function closeMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.style.right = "400px";
    menu.style.transition = "0.3s ease";
}

function closeNotification() {
    noteBox.style.display = "none";
}

function popular() {
    document.getElementById("catLable").innerText = "POPULAR";
    document.getElementById("refValue").innerText = "Popular/products";
    openMenu();
}
function poster() {
    document.getElementById("catLable").innerText = "POSTER";
    document.getElementById("refValue").innerText = "Posters/flyers";
    openMenu();
}
function brand() {
    document.getElementById("catLable").innerText = "BRAND";
    document.getElementById("refValue").innerText = "Brand/logo";
    openMenu();
}
function newProducts() {
    document.getElementById("catLable").innerText = "NEW ARRIVALS";
    document.getElementById("refValue").innerText = "New/products";
    openMenu();
}
function topPicks() {
    document.getElementById("catLable").innerText = "TOP PICKS";
    document.getElementById("refValue").innerText = "TopPicks/products";
    openMenu();
}

// category
function grocery() {
    document.getElementById("catLable").innerText = "GROCERY";
    document.getElementById("refValue").innerText = "Category/grocery";
    openMenu();
}

function phones() {
    document.getElementById("catLable").innerText = "PHONES";
    document.getElementById("refValue").innerText = "Category/phones";
    openMenu();
}
function computing() {
    document.getElementById("catLable").innerText = "COMPUTING";
    document.getElementById("refValue").innerText = "Category/computing";
    openMenu();
}
function men() {
    document.getElementById("catLable").innerText = "MEN";
    document.getElementById("refValue").innerText = "Category/men";
    openMenu();
}
function women() {
    document.getElementById("catLable").innerText = "WOMEN";
    document.getElementById("refValue").innerText = "Category/women";
    openMenu();
}
function children() {
    document.getElementById("catLable").innerText = "CHILDREN";
    document.getElementById("refValue").innerText = "Category/children";
    openMenu();
}
function machinary() {
    document.getElementById("catLable").innerText = "MACHINARY";
    document.getElementById("refValue").innerText = "Category/machinary";
    openMenu();
}
function electronics() {
    document.getElementById("catLable").innerText = "ELECTRONICS";
    document.getElementById("refValue").innerText = "Category/electronics";
    openMenu();
}
function fashion() {
    document.getElementById("catLable").innerText = "FASHION";
    document.getElementById("refValue").innerText = "Category/fashion";
    openMenu();
}
function sports() {
    document.getElementById("catLable").innerText = "SPORTS";
    document.getElementById("refValue").innerText = "Category/sports";
    openMenu();
}
function gaming() {
    document.getElementById("catLable").innerText = "GAMING";
    document.getElementById("refValue").innerText = "Category/gaming";
    openMenu();
}
function office() {
    document.getElementById("catLable").innerText = "HOME & OFFICE";
    document.getElementById("refValue").innerText = "Category/home&office";
    openMenu();
}
function health() {
    document.getElementById("catLable").innerText = "HEALTH & BEAUTY";
    document.getElementById("refValue").innerText = "Category/health&beauty";
    openMenu();
}
function garden() {
    document.getElementById("catLable").innerText = "GARDEN & OUTDOORS";
    document.getElementById("refValue").innerText = "Category/garden&outdoors";
    openMenu();
}
function music() {
    document.getElementById("catLable").innerText = "MUSICAL INSTRUMENTS";
    document.getElementById("refValue").innerText = "Category/music";
    openMenu();
}
function books() {
    document.getElementById("catLable").innerText = "BOOKS & MOVIES";
    document.getElementById("refValue").innerText = "Category/books&movies";
    openMenu();
}
function automobile() {
    document.getElementById("catLable").innerText = "AUTOMOBILE";
    document.getElementById("refValue").innerText = "Category/automobile";
    openMenu();
}
