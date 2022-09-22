class SearchItem extends HTMLElement{

    set char(char) {
        this.__char = char;
        this.render()
    }


    render() {
        this.innerHTML = `
        
        <div class="item-container" id="item-container">
            <div class="character-image">
                <img src="${this.__char.imageUrl}" alt="character image">
            </div>

            <div class="character-info" id="character-info">
                <div class= "fullName">
                <h3>${this.__char.fullName}</h3>
                </div>
                
                <ul>
                    <li><strong>First Name: </strong>${this.__char.firstName}</li>
                    <li><strong>Last Name: </strong>${this.__char.lastName}</li>
                    <li><strong>Full Name: </strong>${this.__char.fullName}</li>
                    <li><strong>Title: </strong>${this.__char.title}</li>
                    <li><strong>Family: </strong>${this.__char.family}</li>
                </ul>
            </div>
        </div>
        `;
    }

    renderError(message) {
        this.innerHTML += `
        
        <h2 class="message">${message}</h2>

        `;
    }
}

customElements.define('search-item', SearchItem);