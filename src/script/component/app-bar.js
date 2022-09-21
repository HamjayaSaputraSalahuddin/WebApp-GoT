class AppBarr extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = ` 
        
        <div class="header-container">
            <h1>Search GoT Characters</h1>
            <p>Search By ID</p>
        </div>

        `;
    }
}

customElements.define('app-bar', AppBarr);