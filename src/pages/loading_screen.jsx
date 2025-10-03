import "../css/loading.css"
import { useLoadingScreen } from "../hooks/useLoadingScreen.js";
import popcorningGif from "../assets/popcorning.gif";
function Loading_Screen() {
      useLoadingScreen(2000);

    
  return (
    <div id="fake-loading-screen">
      <img src={popcorningGif} alt="Loading" className="loading-gif" />
      <p className="loading-text">Popcorning</p>
    </div>
  );
}
export default Loading_Screen;
