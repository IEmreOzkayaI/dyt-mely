import React from "react";
import "../Components/Spinner.scss";
export default function Spinner() {
  return (
    <div className="loader">
      <div className="bg-temp">
        <div className="inner-loader container">
          <div className="inner-border"></div>
          <div className="text-container">
          <div className=" fs-5 ">Form İletiliyor</div>
          <div className="fs-5 ">Lütfen Bekleyiniz</div>
          </div>

        </div>
      </div>
    </div>
  );
}
