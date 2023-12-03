import Img from "./components/img";
import Name from "./components/name";
import Left from "./components/cmp-left";
import Expc from "./components/expc";
import Skill from "./components/skills";
import Bottom from "./components/bottom";
import Form from "./components/form";
import "./App.css";
import { useState } from "react";
let x = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptas eveniet dolore enim architecto dolores minima quos? Veniam ducimus explicabo praesentium "

let obj={
  ed1 : "Education",
  ed2 : "Content",
  ed3 : "Achivement",
  ed : x,
  experence: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempora est ducimus neque! Corrupti distinctio,", "perferendis mollitia eveniet fuga laborum totam eum accusantium vero corporis tenetur praesentium possimus molestias esse labore cupiditate asperiores", " voluptates omnis repellat rem quo reprehenderit porro facilis! Animi, officiis reiciendis?"],
  hard :"eum accusantium vero corporis tenetur praesentium possimus molestias esse labore cupiditate asperiores voluptates omnis repellat rem quo reprehenderit porro facilis!",
  soft :"eum accusantium vero corporis tenetur praesentium possimus molestias esse labore cupiditate asperiores voluptates omnis repellat rem quo reprehenderit porro facilis!"
}

obj.experence.push("hello word");


function App() {

const [obji, update] = useState(obj.experence);

console.log(obji);

function add (){
  update([...obji,"tiger"]);
  console.log(obji);
}


  return (
    <div className="potfolio">
      <div className="d1">
            <div className="d2">

            </div>
          </div>
      <div className="sec1">
        <div className="s-1">
        <Img></Img>
        </div>
        <div className="s-2">
          
        <Name></Name>
        </div>
      </div>
      <div className="sec2">
        <div className="s2-1">
           <Left topic={obj.ed1} content={obj.ed}></Left>
           <Left topic={obj.ed2} content={obj.ed}></Left>
           <Left topic={obj.ed3} content={obj.ed}></Left>
        
        </div>
        <div className="s2-2">
          <h2 className="exp">
            Experience
          </h2>

          {obji.map((exp) => <Expc cont ={exp}></Expc>)}

          <h2 className="exp">
            Top Skills
          </h2>
          <div className="skills">
<Skill type="Hard Skills" skills={obj.hard}></Skill>
<Skill type="Soft Skills" skills={obj.soft}></Skill>

          </div>
        </div>
      </div>

      <Bottom btn="like" play={add} pause={()=> console.log("pause")}>like</Bottom>

      {/* <Form update={add}></Form> */}
    </div>
  )
}
export default App;