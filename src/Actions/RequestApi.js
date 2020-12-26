import get from 'lodash/get';
import set from 'lodash/set';
import keys from 'lodash/keys';
import isEmpty from 'lodash/isEmpty';
import removeToken from './Authentication/removeToken';
import axios from "axios";
const DEFAULT_HEADERS = {
    "Accept": 'application/json',
    "Content-Type": "application/json",
}
 
export const requestApi = (
    {
        url,
        method = "GET",
        params = {},
        headers = {}
    }
    
) => {

    return new Promise((resolve, reject) => {
     
        let config = {
            "method": method,
            "headers": {
                ...DEFAULT_HEADERS,
             ...headers
            }
        };
 
        console.log("Headers   "+ config.headers);
        if (!get(window.cloud_env, 'MODE_DEV', false)) {
            set(config, "withCredentials", true)
        }

        if (!isEmpty(params)) {
            set(config, "body", JSON.stringify(params));
        }
        var status = 200;
        fetch(url, config)
            .then(response => {
             
                console.log("Method: ",method," Error ")
                status= response.status;
                 return response.json()})
            .then((response) => {
                response={...response,status: status }
                let nextUrl = window.location.hash;
                console.log(nextUrl);
                if (response.status!==200) {
 
                    if (response.status == 403) {
                        //let nextUrl = window.location.hash;
                        ///nextUrl = nextUrl.replace("#","");
 
                    }
    
                    if (response.status == 503) {
                        //let nextUrl = window.location.hash;
                        //nextUrl = nextUrl.replace("#","");
 
                    }
    
                    if (response.status== 451) {
                        //
                        //nextUrl = nextUrl.replace("#", "");
 
                    }
    
                    if (response.status == 401) {
                
                        removeToken()
 
                    }
                     
                    return reject(response);
                    //return response.json()
                }
                
                resolve(response)
            }).catch((error) => {
              
                console.log("Method: ",method," Error ",error)
                return reject(error);
            });
    });
}