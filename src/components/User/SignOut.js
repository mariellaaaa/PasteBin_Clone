import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const SignOut = ({isAuth, setIsAuth}) => {
    const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
    };

    return (
        <div>
            {isAuth && (
                <div>
                    <div class="card border-danger mb-3">
                        <div class="card-header">Sign Out</div>
                        <div class="card-body text-danger">
                            <h5 class="card-title">Are you sure you want to sign out?</h5>
                        </div>
                    </div>
                    <button type="button" class="btn btn-danger" onClick={signUserOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
};