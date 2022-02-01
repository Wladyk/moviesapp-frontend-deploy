import { ClassNames } from "@emotion/react";
import axios from "axios";
const URL = "https://movieapps-be.herokuapp.com";
export const postRequest = (route, payload = null, tokenPayload = null) => {
    if (tokenPayload != null) {
        var tokenPayload = 'Token ' + tokenPayload;
    }
    return axios({
        url: URL + '/' + route,
        method: 'post',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tokenPayload
        },
        data: JSON.stringify(payload)
    })
        .then((res) => { return res.data })
        .catch(err => console.error(err.response.data))
};

export const deleteRequest = (route, payload = null, tokenPayload = null) => {
    if (tokenPayload != null) {
        var tokenPayload = 'Token ' + tokenPayload;
    }
    return axios({
        url: URL + '/' + route,
        method: 'delete',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tokenPayload
        },
        data: JSON.stringify(payload)
    })
        .then((res) => { return res.data })
        .catch(err => console.error(err.response.data))
};

export const getRequest = (route, tokenPayload = null, payload =null) => {
    if (tokenPayload != null) {
        var tokenPayload = 'Token ' + tokenPayload;
    }
    console.log(payload);
    return axios({
        url: URL + '/' + route,
        method: 'get',
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': tokenPayload
        },
        data: JSON.stringify(payload)
    })
        .then(res => res.data)
        .catch(err => console.error(err))
};


