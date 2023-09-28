import { Link, useParams } from "react-router-dom";
import NewColor from "./NewColor";

const Colors = () => {
  const params = useParams();

  return (
    <div>
      <h2>Welcome to the color factory</h2>

      <nav>
        <Link to={`/colors/new`}>Add a color</Link>
      </nav>

      <h3>Please select a color</h3>
      <nav>
        <Link to={`/colors/${params.new}`}>{params.new}</Link>
      </nav>
      <nav>
        <Link to={`/colors/red`}>red</Link>
      </nav>
      <nav>
        <Link to={`/colors/green`}>green</Link>
      </nav>
      <nav>
        <Link to={`/colors/blue`}>blue</Link>
      </nav>
    </div>
  );
};
export default Colors;
