import "./bottom.css";

function Bottom({btn,play,pause,children}){
    let val= true;
    function onclick(){
       let l = val ? play() : pause() ;

       val = !val;
    }

    return (
        <div className="b1">
            <div className="b2">
                <button className="bt" onClick={onclick}>
                        {children}
                </button>
            </div>
        </div>
    )
}
export default Bottom;