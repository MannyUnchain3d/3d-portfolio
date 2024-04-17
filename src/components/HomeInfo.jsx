import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5">
    Hi! I'm <span className="font-semibold">Manny</span> 😎🤙
    <br/>
    A Software and Game developer from Tahiti 🏝️🏄
    </h1>
  ),
  2: (
    <InfoBox
      text="Former Sharpshooter in the French Marine Troops 🎯🔫 Former Customer/Sales Rep 🤓📈 Former many things actually... 😅"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="I switched careers at 36 to live my childhood dream of making video games 🎮🕹️"
      link="/projects"
      btnText="Visit my portfolio"
  />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? 🎮📱🌐"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;