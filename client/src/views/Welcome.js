import {Link} from "react-router-dom";

//This is the login page need to add in register and login
const Welcome = (props) => {

    return(
        <div>
            <div className="header">
                <h1>Welcome</h1>
                <Link to={"/dashboard"}>Enter</Link>
            </div>
        </div>
    )
}

export default Welcome;