import forIn from 'lodash/forIn';

const removeConfigStorage = () => {
    forIn(window.localStorage, (value, key) => {
        window.localStorage.removeItem(key);
    });
}

const removeToken = () => {
    // remove saved local
    removeConfigStorage()
    return {
        type: ''   
    };
}

export default removeToken;