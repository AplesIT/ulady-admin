import axios from 'axios';

import {ACCESS_TOKEN, REFRESH_TOKEN } from "../../StorageLocal/LocalStorage"; 
const storeToken = ({access_token, refresh_token="", default_tenant=""}) => {
    // Save local
    localStorage.setItem(ACCESS_TOKEN, access_token);
    localStorage.setItem(REFRESH_TOKEN, refresh_token);
    // Default HTTP Headers
    axios.defaults.headers.common[ACCESS_TOKEN] = access_token;
 
    return {
        type: ''   
    };
}

export default storeToken;