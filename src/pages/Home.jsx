import { useState, useEffect, useRef, Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import Asia from "../assets/Asia-by-Alexi-Action.mp3";
import { soundoff, soundon } from "../assets/icons";
import { socialLinks } from "../constants";

const Home = () => {
  const audioRef = useRef(new Audio(Asia));
  const copyrightBoxRef = useRef(null);
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
  const [showCopyright, setCopyright] = useState(false);

  useEffect(() => {
    if(isPlayingMusic)
      audioRef.current.play();
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Checking if the click is on the copyright icon or its children.
      const isClickOnCopyrightIcon = e.target.closest('[data-copyright-icon="true"]');
      // If the click is outside the copyright box and not on the copyright icon, close the box.
      if (copyrightBoxRef.current && !copyrightBoxRef.current.contains(e.target) && !isClickOnCopyrightIcon) {
        setCopyright(false);
      }
    };
    // Add the click event listener to the document.
    document.addEventListener('click', handleGlobalClick);
    // Cleanup function to remove the event listener.
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []); // No dependencies, so this effect runs only once on mount.

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768)
      screenScale = [0.9, 0.9, 0.9];
    else
      screenScale = [1, 1, 1];

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    
    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const handleSocialClick = (e, link) => {
    if (link.name === "Copyright") {
      e.preventDefault(); // Prevent default link behavior
      // Toggle visibility of the copyright box
      setCopyright(!showCopyright);
    } else if (link.link) {
      e.preventDefault(); // Prevent the default action
      // Open the link in a new tab
      window.open(link.link, "_blank");
    }
  };

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={ {near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-[8rem] left-2 md:bottom-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="Music Control"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>

      {/* Social media buttons */}
      <div className="absolute bottom-[8rem] right-2 flex gap-2 md:bottom-2">
        {socialLinks.map((link, index) => (
          <a key={index} 
            href={link.link || '#'} 
            onClick={(e) => handleSocialClick(e, link)} 
            rel="noopener noreferrer" 
            data-copyright-icon={link.name === "Copyright" ? 'true' : undefined}>
            <img src={link.iconUrl} alt={link.name} className="w-8 h-8 cursor-pointer" />
          </a>
        ))}
      </div>
      
      {/* Copyright contextual box */}
      {showCopyright && (
      <div ref={copyrightBoxRef} className="absolute bottom-60 p-4 right-2 bg-white shadow-md rounded-lg text-sm text-gray-800 font-poppins md:bottom-20">
        <h3 className="text-lg blue-gradient_text font-semibold drop-shadow mb-2">Creative Commons</h3>
        <p><span className="font-bold">Music:</span> <a href="https://www.youtube.com/watch?v=xiKF1U9gkn0" className="blue-gradient_text font-semibold drop-shadow" target="_blank" rel="noopener noreferrer">Asia</a> by Alexi Action</p>
        <p className="mt-2"><span className="font-bold">3D models:</span></p>
          <ul className="list-disc ml-4">
            <li><a href="https://sketchfab.com/nimzuk" className="blue-gradient_text font-semibold drop-shadow" target="_blank" rel="noopener noreferrer">Island</a> by nimzu</li>
            <li><a href="https://sketchfab.com/AntijnvanderGun" className="blue-gradient_text font-semibold drop-shadow" target="_blank" rel="noopener noreferrer">Plane</a> by AntijnvanderGun</li>
            <li><a href="https://sketchfab.com/norberto3d" className="blue-gradient_text font-semibold drop-shadow" target="_blank" rel="noopener noreferrer">Bird</a> by NORBERTO-3D</li>
            <li><a href="https://sketchfab.com/victory_mirosya" className="blue-gradient_text font-semibold drop-shadow" target="_blank" rel="noopener noreferrer">Fox</a> by victory_mirosya</li>
            <li><a href="https://sketchfab.com/paul_paul_paul" className="blue-gradient_text font-semibold drop-shadow" target="_blank" rel="noopener noreferrer">SkyBox</a> by Paul</li>
          </ul>
        <p className="mt-4"><span className="font-bold">Special thanks</span> to <a href="https://www.jsmastery.pro" className="blue-gradient_text font-semibold drop-shadow" target="_blank" rel="noopener noreferrer">JavaScript Mastery</a> for the tutorials 🙏</p>
      </div>
      )}
    </section>
  )
};

export default Home;