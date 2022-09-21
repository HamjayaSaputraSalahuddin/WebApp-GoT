import './search-item.js'

class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this.__clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#search-element').value;
    }
    render() {
        this.innerHTML = `
        
        <div class="search-container" id="search-container">
            <input type="number" placeholder="Masukkan ID Karakter..." id="search-element" value="0">
            <button id="search-button">Search</button>
        </div>
        `;

        this.querySelector('#search-button').addEventListener('click', this.__clickEvent);
    }
}

customElements.define('search-bar', SearchBar);