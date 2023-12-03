let l = " ";
function handelchange(e){
    console.log(e.target.value);
    l = e.target.value;
}
function change(e){
    e.stopPropagation();
    // add(l);
}

function Form(add) {
    return (
        <div className="form">
            <form>
                <input type="text" name="imp"  onChange={handelchange} placeholder="enter experience here" />
                <button onClick={change}>add experience</button>
            </form>
        </div>
    )
}

export default Form;