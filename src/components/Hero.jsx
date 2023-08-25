import img1 from "../images/amazon.png"
import img2 from "../images/flipkart.png"
import img3 from "../images/shoe_image.png"


const Hero = () => {
  return (
    <main className="hero-container">
      <div className="hero-content">
        <h1 className="h1">YOUR FEET DESERVE THE BEST</h1>
        <p className="p">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
       
        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src={img1} alt="amazon-logo" />
            <img src={img2} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={img3} alt="hero-img" srcset="" />
      </div>
    </main>
  );
};
export default Hero;
