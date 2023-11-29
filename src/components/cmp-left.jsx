import "./left.css";

function Left({topic, content}){
    // let str = " <li> ";
    // content.forEach(element => {
    //     str = str.concat(element," </li> ")
    // });

     return(
        <div className="comp">
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