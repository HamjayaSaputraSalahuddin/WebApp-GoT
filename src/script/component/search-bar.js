import './search-item.js'

class SearchBar extends HTMLElement {

    constructor() {

        super();
        this.__shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this.__clickEvent = event;
        this.render();
    }

    get value() {
        return this.__shadowRoot.querySelector('#search-element').value;
    }
    render() {
        this.__shadowRoot.innerHTML = `

        <style>
        .search-container {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        
        .search-container > input {
            border: none;
            width: 100%;
            height: 30px;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid #B1D0E0;
        }
        
        .search-container > button {
            background-color: #6998AB;
            height: 30px;
            color: #ffff;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 5px #1A374D;
        }
        
        .search-container > button:active {
            position: relative;
            top: 5px;
            box-shadow: none;
        }
        </style>
        
        <div class="search-container" id="search-container">
            <input type="number" placeholder="Masukkan ID Karakter..." id="search-element" value="0">
            <button id="search-button">Search</button>
        </div>
        `;

        this.__shadowRoot.querySelector('#search-button').addEventListener('click', this.__clickEvent);
    }
}

customElements.define('search-bar', SearchBar);