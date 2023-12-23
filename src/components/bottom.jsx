
import { useContext, useState } from "react";
import "./bottom.css";
import ThemeContext from "../context/theme";
let val= true;
function Bottom({ btn, play,prewiew, pause, children }) {
    const [num, changeNum] = useState(0);
    const theme = useContext(ThemeContext);

    function onclick() {
      let l = val ? play() : pause();
  
      val = !val;
      changeNum((num) => num + 1);
  
      console.log("rendered");
      console.log(theme);
    }
    function modeUpdate(){
        prewiew()
    }



    
  
    return (
 
      <div className="b1">
        <div className="b2">
          <button className={`bt ${theme}`} onClick={onclick}>
            {children}
          </button>
          
          <button className={`bt ${theme}`} onClick={modeUpdate}>
            Mode
          </button>
          <div className="txt">{num}</div>
        </div>
      </div>

    );
  }
  
  export default Bottom;