import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import colorData from "./colorData";

const NewColor = () => {
  const navigate = useNavigate();
  const colors = useRef();

  const [colorName, setColorName] = useState("");

  const handleChange = (e) => {
    colors.current = e.target.value;
    setColorName(colors.current);
  };

  useEffect(() => {}, [colorData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColorName([colorData]);
    colorData.unshift(colors.current);
    navigate(`/colors}`);
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
