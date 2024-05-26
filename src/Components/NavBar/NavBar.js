import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/">
          <img
            src="https://m.media-amazon.com/images/G/42/social_share/amazon_logo._CB633269265_.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to={'/add-product'} className="post-btn">Posts</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
