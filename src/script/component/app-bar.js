class AppBarr extends HTMLElement {

    constructor() {

        super();
        this.__shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.__shadowRoot.innerHTML = ` 

        <style>

        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #ffff;
        }
        
        .header-container > h1 {
            text-shadow: 0 10px 10px black;
        }
        
        .header-container > p {
            font-size: 80%;
            margin-left: 40%;
            text-shadow: 0 10px 10px black;
        }
        </style>
        
        <div class="header-container">
            <h1>Search GoT Characters</h1>
            <p>Search By ID</p>
        </div>

        `;
    }
}

customElements.define('app-bar', AppBarr);