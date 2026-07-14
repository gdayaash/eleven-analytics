import logo from "@/assets/logos/logo.jpg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/dashboard">
      <img
        src={logo}
        width={"50px"}
        alt="Eleven Anlytics logo"
        className="rounded-4xl"
      />
    </Link>
  );
}

export default Logo;
