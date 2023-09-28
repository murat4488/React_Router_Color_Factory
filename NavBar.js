import { Link, useParams } from "react-router-dom";

const NavBar = () => {
  const params = useParams();

  return (
    <div>
      <h2>Welcome to the color factory</h2>
      <h3>Please select a color</h3>
      <Link to="/colors"></Link>
      <nav>
        <Link to={`/colors/${params.color}`}>red</Link>
      </nav>
      <nav>
        <Link to={`/colors/${params.color}`}>green</Link>
      </nav>
      <nav>
        <Link to={`/colors/${params.color}`}>blue</Link>
      </nav>
      <Link to={`/colors/${params.new}`}>Add a color</Link>
    </div>
  );
};
export default NavBar;
