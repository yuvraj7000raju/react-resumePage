import { useState } from "react";
import "./bottom.css";
let val= true;
function Bottom({btn,play,pause,children}){
    const [num , changeNum] = useState(0);
    function onclick(){
        let l = val ? play() : pause() ;

        val = !val;
         changeNum( (num)=> num+1);

         console.log("rendered");
    }

    return (
        <div className="b1">
            <div className="b2">
                <button className="bt" onClick={onclick}>
                        {children}
                </button>
                <div className="txt">{num}</div>
            </div>
        </div>
    )
}
export default Bottom;