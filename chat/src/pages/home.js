import { Link } from "react-router-dom";


export function HomePage() {

    return (
        <div>
            <h1>Home</h1>
            <hr />
            <ul>
                <li><Link to="/account">My Account</Link></li>
                <li><Link to="/chat">go to Chat</Link></li>
            </ul>
        </div>
    );
}
