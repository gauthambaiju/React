import PropTypes from "prop-types";

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcomeMessage">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="loginPrompt">Please log in to continue</h2>
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.PropTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting;