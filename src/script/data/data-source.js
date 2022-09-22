import '../component/search-item.js';

class DataSource {

    static searchID(id) {
        return fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`Invalid ${id}`);
                }
            })
    }

}



    export default DataSource;