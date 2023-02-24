import "./CreateStore.css";
import { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { useFormik } from "formik";
import { createStore } from "../Store/StoreReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CreateStore() {
  const [location, setLocation] = useState([]);
  const [images, setImages] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      storeName: "",
      storeDescription: "",
    },
    onSubmit: (value, action) => {
      const data = new FormData();
      data.append("storeName", value.storeName);
      data.append("storeDescription", value.storeDescription);
      data.append(
        "storeLocation",
        JSON.stringify({ type: "Point", coordinates: location })
      );

      for (let i = 0; i < images.length; i++) {
        data.append("storeImages", images[i]);
      }

      dispatch(createStore(data, navigate));
    },
  });

  function handleLocation() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.longitude, position.coords.latitude]);
      });
  }

  function handleImage(e) {
    setImages(e.target.files);
  }

  return (
    <section className="create-store">
      <div className="container">
        <h1>Open your own store and start serving valueable customers!</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="">Store Name</label>
            <input type="text" name="storeName" onChange={handleChange} />
          </div>
          <div className="input">
            <label htmlFor="">Store Description</label>
            <textarea
              name="storeDescription"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="extra-info">
            <div className="input store-upload">
              <label htmlFor="">Store Images</label>
              <div className="file">
                <input type="file" multiple onChange={handleImage} />
                <BsFillCameraFill className="camera-logo" />
              </div>
            </div>
            <div className="input location">
              <label htmlFor="">Enable Location</label>
              <FaLocationArrow
                className="location-logo"
                onClick={handleLocation}
              />
            </div>
          </div>

          <button type="submit">Create Store</button>
        </form>
      </div>
    </section>
  );
}
