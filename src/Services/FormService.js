import axios from "axios";

export default class FormService {
  postPreRegister(form) {
    return axios.post("https://mely-back-production.up.railway.app:6356/api/form/register",form);
  }
  postPreRegister2(file) {
    return axios.post("http://localhost:8080/api/form/register2",file);
  }

}