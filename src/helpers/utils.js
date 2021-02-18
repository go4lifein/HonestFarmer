import axios from "axios";

export const API_URL = 'https://api.honestfarmer.in/api';
// export const API_URL = 'https://go4life-deliver.herokuapp.com/api';
// export const API_URL = '/api';
// export const API_URL = 'http://localhost:3000/api';


export function getCookies() {
  var x = document.cookie;
  let cookies = x.split(";");
  let data = {};
  cookies.forEach((cookie) => {
    let values = cookie.split("=");
    data[values[0]] = values[1];
  });
  return data;
}

export function setCookie(name, value, days = 2) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function setRequestAuthHeader(accessToken) {
  setCookie("x-admin-token", accessToken, 5)
  axios.defaults.headers.common["x-admin-token"] = accessToken;
}

export const userAccessToken = getCookies()["x-admin-token"];

export function initRequestAuthHeader() {
  let userAccessToken = getCookies()["x-admin-token"];
  console.log(userAccessToken)
  if(userAccessToken) setRequestAuthHeader(userAccessToken);
}
initRequestAuthHeader();

export function request(config) {
  return axios.request(config);
}

export function postRequest(url, data) {
  return axios.request({
    url: url,
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  });
}

export function getRequest(url) {
  return axios.request({
    url: url,
    method: 'get'
  });
}