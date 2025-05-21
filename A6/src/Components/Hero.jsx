import './Hero.css';
import slowbro from '../assets/slowbro.jpg';

function Hero() {
  return (
    <div className="hero-section">
      <img className="hero-image" src={slowbro} />
    </div>
  );
}


export default Hero;