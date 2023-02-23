import axios from "axios";

export default class FormService {
  postPreRegister(form) {
    return axios.get("https://mely-back-production.up.railway.app/api/form/register3");
  }
  postPreRegister2(file) {
    return axios.post("http://localhost:8080/api/form/register2",file);
  }

}