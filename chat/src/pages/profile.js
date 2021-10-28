import { useDispatch, useSelector, } from "react-redux";
import { Header } from "../components";
import { toggleShowProfile, profileSelector } from "../store/profile";


export function ProfilePage(props) {

    const { firstName, lastName, isVisibleProfile } = useSelector(profileSelector);

    const dispatch = useDispatch();

    return (
        <div>
            <Header />
            <h1>My Account</h1>
            <button onClick={() => dispatch(toggleShowProfile())}>toggle profile</button>

            {isVisibleProfile && (
                <>
                    <h1>firstName: {firstName}</h1>
                    <h1>lastName: {lastName}</h1>
                </>
            )}
        </div>
    );
}
