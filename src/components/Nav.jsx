import img from "../images/brand_logo.png"
const Nav = () => {
  return (
   
      <nav className="container">
        <div className="logo">
          <img src={img}alt="logo"></img>
        </div>
        <ul>
          <li href="">Memu</li>
          <li href="">Location</li>
          <li href="">About</li>
          <li href="">Contact</li>
        </ul>
        <button>login</button>
      </nav>
  
  );
};
export default Nav;