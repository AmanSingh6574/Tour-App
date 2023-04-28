import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={props.src} alt="not found" />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btn}>
          {props.btntext}
        </a>
      </div>
    </div>
  );
}

export default Hero;
