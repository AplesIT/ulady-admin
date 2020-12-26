import { Domain } from "@material-ui/icons";

export  const DomainHost = {
    "AIGOHUB":  "http://aigohub-be-test.aigohub.com/api/",
}
export const EndPointUser ={
    "Create" : {"url":"users/create", "method": "POST"},
    "Update": {"url":"users/update","method": "POST"},
    "GetSingle":{"url":"users/single","method": "GET"},
    "GetAll":{"url":"users/all","method":"GET"},
    "Delete":{"url":"users/delete","method":"POST"},
    "Login":{"url":"users/login","method":"POST"},
    "Role": {"url":"users/updateRole","method":"POST"}

}
export const EndPointCategory={
    "Create":{"url":"categories/create", "method": "POST"},
    "Update":{"url":"categories/update","method":"POST"},
    "Delete":{"url":"categories/delete","method":"POST"},
    "GetAll":{"url":"categories/getall","method":"POST"}
}
export const EndPointSDK={
    "Create":{"url":"typeSDK/create", "method": "POST"},
    "Delete":{"url":"typeSDK/delete","method":"POST"},
    "GetAll":{"url":"typeSDK/getall","method":"POST"}
}