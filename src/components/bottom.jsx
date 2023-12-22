// In Bottom.jsx
import { useContext, useState } from "react";
import "./bottom.css";
import ThemeContext from "../context/theme";
let val= true;
function Bottom({ btn, play, pause,mode , modes, children }) {
    const [num, changeNum] = useState(0);
  
    function onclick() {
      let l = val ? play() : pause();
  
      val = !val;
      changeNum((num) => num + 1);
  
      console.log("rendered");
    }
  
    return (
      <div className="b1">
        <div className="b2">
          <button className={`bt ${mode}`} onClick={onclick}>
            {children}
          </button>
          <button className={`bt ${mode}`} onClick={modes}>
            Mode
          </button>
          <div className="txt">{num}</div>
        </div>
      </div>
    );
  }
  
  export default Bottom;