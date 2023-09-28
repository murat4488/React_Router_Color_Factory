import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const NewColor = () => {
  const params = useParams();
  let data;
  const [colorName, setColorName] = useState("");
  const handleChange = (e) => {
    setColorName(e.target.value);
    data = e.target.value;
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    return <Navigate to={`colors/`} />;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorName">Color name</label>
      <input
        id="colorName"
        type="text"
        placeholder="Enter a name for the color"
        value={colorName}
        onChange={handleChange}
      ></input>
      <button>Add this color</button>
    </form>
  );
};
export default NewColor;
