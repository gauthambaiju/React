function Button(){

    const handleClick = (e) => e.target.innerText = "OUCH! 😖";

    return(
        <button onDoubleClick={(e) => handleClick(e)}>Click me 😐</button>
    );
}

export default Button;