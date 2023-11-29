import "./skills.css";

function skill({ type, skills }) {

    return (
        <div className="box">
            <div className="h">
              <b>{type}</b>  
            </div>
            <div className="c">
                {skills}
            </div>
        </div>
    )
}

export default skill;