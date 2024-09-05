import samplePhoto from "./assets/photo.jpg";

function Card(){
    return(   
        <div className="card">
            <img className="card-image" src={samplePhoto} alt="This is a photo"></img>
            <h2 className="card-title">Apple</h2>
            <p className="card-text">I am a fruit</p>
        </div>
    );
}

export default Card;