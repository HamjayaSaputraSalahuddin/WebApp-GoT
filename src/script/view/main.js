import '../component/search-bar.js';
import '../component/search-item.js';
import DataSource from '../data/data-source.js';


const main = () => {
    const searchElement = document.querySelector('search-bar');
    const itemContainer = document.querySelector('search-item');


    const onButtonSearchClicked = () => {

        DataSource.searchID(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        itemContainer.char = results;
    };

    const fallbackResult = message => {
        itemContainer.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;
