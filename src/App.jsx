import { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import image1 from "./images/image1.jpeg";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [bodyBg, setBodyBg] = useState("#caf0f8");

  const darkColor = "#03071e"
  const Mid = "#212529";
  const Bottom = "#10002b";

  function switchToDark() {
    setIsLightMode(false);
    setBodyBg(
      `linear-gradient(to bottom, ${darkColor} 0%, ${Mid} 50%, ${Bottom} 100%)`
    );
  }

  function switchToLight() {
    setIsLightMode(true);
    setBodyBg("#caf0f8");
  }

  return (
    <div
      className="flex flex-col h-screen transition-colors duration-500"
      style={{ background: bodyBg }}
    >
      <div className="mx-10 mt-8 rounded-xl h-[70px] w-[90%] flex items-center justify-between px-6 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <img
            src={image1}
            alt="logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-bold text-lg">FRBOSS</span>
        </div>

        {isLightMode ? (
          <button onClick={switchToDark} aria-label="Activer mode sombre">
            <MdDarkMode size={24} />
          </button>
        ) : (
          <button onClick={switchToLight} aria-label="Activer mode clair">
            <MdOutlineLightMode size={24} />
          </button>
        )}
      </div>

    </div>
  );
}

export default App;
