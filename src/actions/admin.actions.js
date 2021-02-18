import {UPDATE_ADMIN, UPDATE_ADMIN_DATA} from "../constants/constants.js"

export const updateAdmin = (admin) => ({
    type: UPDATE_ADMIN,
    payload: admin
  });
  
  export const updateAdminData = (data) => ({
    type: UPDATE_ADMIN_DATA,
    payload: data
  });