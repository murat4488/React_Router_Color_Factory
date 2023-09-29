import { Link, useParams } from "react-router-dom";
import colorData from "./colorData";
import { useEffect, useState } from "react";

const Color = () => {
  const { color } = useParams();
  const [backColor, setBackColor] = useState("white");

  const colorBack = colorData.find((color3) => color3 === color);

  useEffect(() => {
    document.body.style.backgroundColor = colorBack;
  }, [backColor]);

  return (
    <div
      className="color"
      style={{ backgroundColor: colorBack, color: "white" }}
    >
      <div>
        <h1>This is {colorBack}.</h1>
        <h1>Isn't it beatiful?</h1>
      </div>
      <Link to={`/colors`} style={{ color: "white" }}>
        Go back
      </Link>
    </div>
  );
};
export default Color;
