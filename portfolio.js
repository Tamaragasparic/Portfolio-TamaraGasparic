class Navigation {
  constructor() {
    this.icon = document.getElementById("nav-desno-mobile");
    this.overlay = document.querySelector(".nav-overlay");

    if (this.icon) {
      this.icon.addEventListener("click", () => this._toggleNavigation());
    } else {
      console.error("Icon element not found!");
    }

    if (this.overlay) {
      // Close overlay on click (outside content)
      this.overlay.addEventListener("click", (event) => {
        if (event.target === this.overlay) {
          this._hideNavigation();
        }
      });
    } else {
      console.error("Overlay element not found!");
    }
  }

  _toggleNavigation() {
    if (this.overlay) {
      this.overlay.classList.toggle("hidden");
    } else {
      console.error("Overlay element not found!");
    }
  }

  _hideNavigation() {
    if (this.overlay) {
      this.overlay.classList.add("hidden");
    }
  }
}

// Instantiate the class
document.addEventListener("DOMContentLoaded", () => {
  new Navigation();
});
