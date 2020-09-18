class MyCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "My Card";
  }
}

window.customElements.define("my-card", MyCard);
