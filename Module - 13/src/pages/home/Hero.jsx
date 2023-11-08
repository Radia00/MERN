import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="d-flex align-items-center justify-content-between gap-4">
      <div className="hero-content">
        <span className="d-block mb-4">Hello Creative People</span>
        <h1 className="hero-heading mb-4">
          We are <span className="text-primary">Creative Agency</span>
        </h1>
        <p className="mb-4">
          {" "}
          We are team of talented designers and Developers making websites with
          Bootstrap
        </p>
        <NavLink to="" className="btn btn-primary">
          Get Started
        </NavLink>
        <NavLink to="" className="btn btn-outline-primary ms-3">
          Learn More
        </NavLink>
      </div>
      <div className="hero-img">
        <img className="img-fluid" src="./images/hero.jpg" alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
