document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(
    ".menu-button"
  ) as HTMLButtonElement;
  const popupMenu = document.querySelector(".popup-menu") as HTMLDivElement;

  menuButton.addEventListener("click", function () {
    popupMenu.style.display =
      popupMenu.style.display === "block" ? "none" : "block";
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !menuButton.contains(event.target as Node) &&
      !popupMenu.contains(event.target as Node)
    ) {
      popupMenu.style.display = "none";
    }
  });
});
