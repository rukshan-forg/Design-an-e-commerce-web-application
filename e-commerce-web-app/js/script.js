// side bar
function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("open");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("open");
}

function initializeSidebar() {
  const openButton = document.getElementById("openSidebar");
  const closeButton = document.getElementById("closeSidebar");

  openButton.addEventListener("click", openSidebar);
  closeButton.addEventListener("click", closeSidebar);
}

initializeSidebar();





// Advanced-seaech dropdown
var myButton = document.getElementById("Advanced-seaech");
var dropDownButton = document.getElementById("Advanced-seaech-dropdown");
var openDropdown = false;
myButton.addEventListener("click", main);

function main() {
      if (openDropdown == false) {
            dropDownButton.style.display = "block";
            dropDownButton.style.marginTop = "20px";
            openDropdown = true;
      } else {
            dropDownButton.style.display = "none";
            openDropdown = false;
            dropDownButton.style.marginTop = "0px";
      }
}




// shoping cart
var shopingCartIcon = document.getElementById("shoping-cart-icon");
var shopingCart = document.getElementById("shoping-cart");
var openCartDropdown = false;
shopingCartIcon.addEventListener("click", main2);

function main2() {
      if (openCartDropdown == false) {
        shopingCart.style.display = "block";
            openCartDropdown = true;
      } else {
        shopingCart.style.display = "none";
            openCartDropdown = false;
      }
}








