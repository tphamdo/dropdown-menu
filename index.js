export default class DropdownHandler {
  static init() {
    const buttons = document.querySelectorAll(".dropdown-button");
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      dropdown.style.visibility = "hidden";
    });

    buttons.forEach((button) => {
      button.addEventListener("click", _handleDropdownClick);
    });

    function _handleDropdownClick(event) {
      const button = event.currentTarget;
      const targetId = button.getAttribute("for");

      dropdowns.forEach((dropdown) => {
        if (dropdown.id === targetId) {
          dropdown.style.visibility =
            dropdown.style.visibility === "hidden" ? "visible" : "hidden";
        }
      });
    }
  }
}
