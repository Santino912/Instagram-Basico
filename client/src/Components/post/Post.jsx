import moment from "moment";
import React, { useState } from "react";
import Photo from "../photo/Photo";
import SelectsNav from "./SelectsNav";
import style from "./styledPost.module.css";
import "moment/locale/es";

export default function Post({
  image,
  name,
  handleShow,
  save,
  time,
  coments,
  setComents,
  id,
  setSearchId,
  handleModal,
}) {
  moment.locale("es");
  const [coment, setComent] = useState("");
  const [likeStatus, setLikeStatus] = useState(false);
  const [saveStatus, setSaveStatus] = useState(save);
  const [numberLikes, setNumberLikes] = useState(0);

  const handleLike = () => {
    setLikeStatus(!likeStatus);
    !likeStatus
      ? setNumberLikes(numberLikes + 1)
      : setNumberLikes(numberLikes - 1);
  };

  const handleChange = (e) => {
    setComent(e.target.value);
  };

  const handleSubmit = (id) => {
    if (coment.length < 1) return alert("Faltan datos");
    setComents([coment, ...coments]);
    setComent("");
    setSearchId(id);
  };

  const handleSave = () => {
    setSaveStatus(!saveStatus);
  };

  return (
    <div className={style.post}>
      <div className={style.postChildren}>
        <Photo image={image} name={name} />
        <SelectsNav
          handleLike={handleLike}
          likeStatus={likeStatus}
          handleShow={handleShow}
          saveStatus={saveStatus}
          handleSave={handleSave}
          handleModal={handleModal}
        />
        <div className={style.divLikesCount}>
          <h5 style={{ margin: "0 13px" }}>{`${numberLikes} Me gusta `}</h5>
        </div>
        <div style={{ width: "100%" }}>
          <button
            className={style.mostrar}
            type="button"
            onClick={() => handleShow(name, image, id)}
          >{`Ver los ${coments.length} comentarios mas`}</button>
        </div>
        <div className={style.timePost}>
          <h5 style={{ margin: "10px 13px" }}>{moment(time).fromNow()}</h5>
        </div>
        <div className={style.public}>
          <div
            className={style.inputComentsText}
            style={{ width: "15%" }}
          ></div>
          <input
            className={style.inputComentsText}
            style={{ width: "65%" }}
            type="text"
            placeholder="Agregar un coment..."
            onChange={handleChange}
            value={coment}
          />
          {coment.length < 1 ? (
            <input
              className={style.inputComentsSubmit}
              style={{ width: "20%", opacity: 0.5, cursor: "auto" }}
              type="button"
              value="Publicar"
              disabled
            />
          ) : (
            <input
              className={style.inputComentsSubmit}
              style={{ width: "20%" }}
              type="button"
              value="Publicar"
              onClick={() => handleSubmit(id, coments)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
