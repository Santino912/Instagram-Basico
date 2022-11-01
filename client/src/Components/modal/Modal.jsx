import React from "react";
import style from "./modal.module.css";

export const ModalComents = ({ handleShow, name, image, coments }) => {
  return (
    <div className={style.boxModal}>
      <div className={style.show} onClick={handleShow} />
      <div className={style.modal}>
        <div className={style.divImgModal}>
          <img className={style.imgModal} src={image} alt={`${image} img`} />
        </div>
        <div className={style.divComentsModal}>
          <div className={style.ownerComentDiv}>
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
          <div className={style.divComents}></div>
        </div>
      </div>
    </div>
  );
};
