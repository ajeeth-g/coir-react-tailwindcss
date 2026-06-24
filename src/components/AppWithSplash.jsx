import { useState, useCallback } from "react";
import SplashScreen from "./SplashScreen";
import App from "../App";

const AppWithSplash = () => {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          splashDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <App />
      </div>
    </>
  );
};

export default AppWithSplash;
