import React, { useEffect, useState } from "react";
import "./App.css";
import { ModalComents } from "./Components/modal/Modal";
import NavBar from "./Components/navBar/NavBar";
import Post from "./Components/post/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 2,
      name: "cat",
      image:
        "https://www.eltiempo.com/files/image_640_428/uploads/2021/11/28/61a3a0ac562fa.jpeg",
      save: false,
      time: 1654624459049,
      coments: [],
    },
    {
      id: 1,
      name: "aw",
      image:
        "https://ca-times.brightspotcdn.com/dims4/default/16a2bb4/2147483647/strip/true/crop/2048x1108+0+0/resize/1486x804!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001",
      save: false,
      time: 1654624459049,
      coments: [],
    },
  ]);
  const [id, setId] = useState(3);
  const [change, setChange] = useState(false);
  const [singlePost, setSinglePost] = useState({
    name: "",
    image: "",
    save: false,
    id: id,
  });
  const [show, setShow] = useState(false);
  const [showObj, setShowObj] = useState({ name: "", image: "", id: 1 });
  const [coments, setComents] = useState([]);
  const [searchId, setSearchId] = useState(0);

  useEffect(() => {}, [coments]);

  const handleChange = (e) => {
    setSinglePost({
      ...singlePost,
      [e.target.name]: e.target.value,
      time: Date.now(),
    });
  };

  const handleSubmit = () => {
    setId(id + 1);
    setPosts([singlePost, ...posts]);
    setSinglePost({
      name: "",
      image: "",
      save: false,
      id: id + 1,
    });
  };

  const handleShow = (name, image, id) => {
    if (!change) {
      setShowObj({ name: name, image: image, id: id });
      setChange(true);
    } else {
      setChange(false);
    }
  };

  const handleModal = () => setChange(!change);
  return (
    <div style={{ marginTop: "95px" }}>
      <NavBar />
      {change && (
        <ModalComents
          handleShow={handleShow}
          name={showObj.name}
          singlePost={showObj.singlePost}
          coments={showObj.coments}
          id={showObj.id}
        />
      )}
      <input
        type="button"
        className="showAddBar"
        value="+"
        onClick={() => setShow(!show)}
      />
      {show ? (
        <div className="showBar">
          <input
            type="text"
            placeholder="Name here"
            onChange={handleChange}
            value={singlePost.name}
            name="name"
          />
          <input
            type="text"
            placeholder="Url here"
            onChange={handleChange}
            value={singlePost.image}
            name="image"
          />
          <input type="button" onClick={handleSubmit} value="Enviar" />
        </div>
      ) : null}

      {posts.map((el, key) => (
        <Post
          key={key}
          image={el.image}
          name={el.name}
          handleShow={handleShow}
          save={el.save}
          time={el.time}
          coments={coments}
          setComents={setComents}
          id={el.id}
          setSearchId={setSearchId}
          handleModal={handleModal}
        />
      ))}
    </div>
  );
}

export default App;
