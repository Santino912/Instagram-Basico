import React from "react";
import style from "./photo.module.css";

export default function Photo({ image, name }) {
  return (
    <>
      <div style={{ width: "100%", height: "61px" }}>
        <div className={style.divNombrePost}>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "100%",
              background: "linear-gradient(#e66465, #9198e5)",
            }}
          />
          <h4 style={{ width: "50%", marginLeft: "10px", overflow: "hidden" }}>
            {name}
          </h4>
        </div>
      </div>
      <img className={style.image} src={image} alt="postImage" />
    </>
  );
}
