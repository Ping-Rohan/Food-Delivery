import "./Store.css";
import { useFormik } from "formik";
import { useState } from "react";
import { uploadFood } from "../Store/FoodReducer";
import { useDispatch } from "react-redux";

export default function Store() {
  const [foodImages, setFoodImages] = useState();
  const dispatch = useDispatch();
  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      foodName: "",
      foodStock: "",
      foodPrice: "",
    },
    onSubmit: (value, action) => {
      const data = new FormData();
      data.append("foodName", value.foodName);
      data.append("stock", value.foodStock);
      data.append("price", value.foodPrice);

      for (let i = 0; i < foodImages.length; i++) {
        data.append("foodImage", foodImages[i]);
      }

      dispatch(uploadFood(data));
    },
  });

  function handleImageChange(e) {
    setFoodImages(e.target.files);
  }

  return (
    <section className="store">
      <div className="container">
        <form action="" className="store-form" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="">Food Name</label>
            <input type="text" name="foodName" onChange={handleChange} />
          </div>
          <div className="input">
            <label htmlFor="">Stock</label>
            <input
              type="number"
              name="foodStock"
              id=""
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Price</label>
            <input
              type="number"
              name="foodPrice"
              id=""
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">Food Images</label>
            <input
              type="file"
              name=""
              id=""
              multiple
              onChange={handleImageChange}
            />
          </div>
          <button type="submit">Upload Food</button>
        </form>
      </div>
    </section>
  );
}
