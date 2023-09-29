import { Link, useNavigate } from "react-router-dom";
import colorData from "./colorData";
import { useEffect } from "react";

const Colors = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <h2>Welcome to the color factory</h2>

      <Link>{navigate("/colors/new")}Add color</Link>

      <h3>Please select a color</h3>

      <nav>
        {colorData.map((color) => (
          <p>
            <Link to={`/colors/${color}`}>{color}</Link>
          </p>
        ))}
      </nav>
    </div>
  );
};
export default Colors;
