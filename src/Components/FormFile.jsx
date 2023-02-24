import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/FormFile.scss";
import FormService from "../Services/FormService";
import Spinner from "./Spinner";
export default function Final() {
   const [file, setFile] = useState("");

  
  function fileValidation(e) {
    setFile(e.target.files[0]);

    var el = document.getElementById("file");
    if (el.value != null) {
      document.getElementById("file-label").innerHTML = "Dosya Seçildi";
    }
  }

  const history = useNavigate();
  const [spinActive, setSpinActive] = useState(false)

  const handleSubmit = () => {
   setSpinActive(true);
    let formdata = new FormData();
    formdata.append("file", file);
    let formService = new FormService();
    formService
      .postPreRegister2(formdata)
      .then(result =>(result.data==="form sent" ? history("/form-final") : setSpinActive(true) ));
  }
  return (
    <div className="final">
      {spinActive ? <Spinner /> : <div className="bg-temp">
      <div className="container">
      <div className=" col-sm-12 col-12 mb-3 mb-sm-1 file-input d-flex justify-content-between align-items-center"> 
              <input
                type="file"
                className="sm-1 md-3"
                id="file"
                name="Tahlil"
                onChange={(e) => {
                  fileValidation(e);
                }}
              />
              <label htmlFor="file" id="file-label">
                Kan Tahlili Var İse Yükleyiniz
                <i className="fa-solid fa-upload ms-5"></i>
              </label>
            </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            onClick={handleSubmit}
          >
            Gönder
          </button>
      </div>
      </div>}
     
    </div>
  );
}
