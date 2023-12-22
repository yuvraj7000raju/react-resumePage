import { useContext } from "react";
import "./left.css";
import ThemeContext from "../context/theme";

function Left({topic, content}){
    // let str = " <li> ";
    // content.forEach(element => {
    //     str = str.concat(element," </li> ")
    // });

    const Theme = useContext(ThemeContext);

     return(
        <div className={`comp ${Theme}`}>
            <div className="head">
                {topic}
            </div>
            <div className="content">
                {content}
            </div>
        </div>
     )
}

export default Left;