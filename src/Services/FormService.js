import axios from "axios";

export default class FormService {
  postPreRegister(form) {
    return axios.post("https://dyt-mely-back-production.up.railway.app/api/form/register",form);
  }
  postPreRegister2(file) {
    return axios.post("https://dyt-mely-back-production.up.railway.app/api/form/register2",file);
  }
}