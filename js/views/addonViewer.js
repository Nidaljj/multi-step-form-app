class addonViewer {
  constructor() {
    this.parentElement = document.querySelector(".add-ons-form__cont");
    this.addonOptions = Array.from(this.parentElement.childNodes).filter(
      (el) => el.nodeName === "LABEL"
    );
    this.onlineCheckBox = document.getElementById("online");
    this.storageCheckBox = document.getElementById("storage");
    this.customCheckBox = document.getElementById("custom");

    [this.onlinePriceEl, this.storagePriceEl, this.customPriceEl] = Array.from(
      document.querySelectorAll(".add-ons-form__item-price")
    );

    this.onlineCheckBox.checked = false;
    this.storageCheckBox.checked = false;
    this.customCheckBox.checked = false;
  }

  addHandlerClickCheckBox(handler) {
    this.parentElement.addEventListener("click", (event) => {
      if (event.target.tagName !== "INPUT") return;
      this.renderCheckBox(event);
      handler(event);
    });
  }

  renderCheckBox(event) {
    const target = event.target.closest(".option-component");
    if (target) {
      target.classList.toggle("is-selected");
    }
  }

  renderPriceEl(isMonthly) {
    if (isMonthly) {
      this.onlinePriceEl.textContent = "+$1/mo";
      this.storagePriceEl.textContent = "+$2/mo";
      this.customPriceEl.textContent = "+$2/mo";
    } else {
      this.onlinePriceEl.textContent = "+$10/yr";
      this.storagePriceEl.textContent = "+$20/yr";
      this.customPriceEl.textContent = "+$20/yr";
    }
  }
}

export default new addonViewer();