import profilePic from './assets/profile.avif'

function Card(){

    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>Elisa</h2>
            <p>Experienced Front-End Developer</p>
        </div>
    );
}

export default Card