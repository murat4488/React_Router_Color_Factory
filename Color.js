import { Link, useParams } from "react-router-dom";

const Color = () => {
  const { color } = useParams();

  //const color2 = colors.find((color3) => color3 === color);
  const color2 =
    color === "red"
      ? "red"
      : color === "green"
      ? "green"
      : color === "blue"
      ? "blue"
      : false;

  return (
    <body className="color" style={{ backgroundColor: color2 }}>
      <div>
        <h1>This is {color2}.</h1>
        <h1>Isn't it beatiful?</h1>
      </div>
      <Link to={`/colors`}>Go back</Link>
    </body>
  );
};
export default Color;
