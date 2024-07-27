import HeaderItem from "../HeaderItem/HeaderItem";
import logo from "../../assets/images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header">
          <a className="header-logo">
            <img src={logo} width={176} height={41} alt="logo"></img>
          </a>
          <ul className="header-list">
            <HeaderItem title={"Home"} />
            <HeaderItem title={"About Me"} />
            <HeaderItem title={"Pages"} />
            <HeaderItem title={"Contact Us"} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
