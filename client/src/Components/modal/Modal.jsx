import React from "react";
import "../StyleModal.css";

export const ModalComents = ({ handleShow, name, image, coments }) => {
  return (
    <div className="boxModal">
      <div className="show" onClick={handleShow} />
      <div className="modal">
        <div className="divImgModal">
          <img className="imgModal" src={image} />
        </div>
        <div className="divComentsModal">
          <div className="ownerComentDiv">
            <div
              style={{
                margin: "10px",
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                background: "linear-gradient(#e66465, #9198e5)",
              }}
            />
            <h3 style={{ margin: "12.5px 5px" }}>{name}</h3>
          </div>
          <div className="divComents"></div>
        </div>
      </div>
    </div>
  );
};
