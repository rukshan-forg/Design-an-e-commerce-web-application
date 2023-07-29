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






