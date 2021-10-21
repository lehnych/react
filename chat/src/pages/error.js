import {Link} from "react-router-dom";


export function ErrorPage() {

    return (
        <div>
            <h1>404 page</h1>
            <hr />
            <ul>
                <li><Link to="/account">My Account</Link></li>
                <li><Link to="/chat">go to Chat</Link></li>
            </ul>
        </div>
    );
}
