import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Navigate } from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
    const { setIsAuth } = props;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.error(error);
        } 
    };

    return ( 
        <div className="App">
            <p>Sign In with Google to continue</p>
            <button className="auth" onClick={signInWithGoogle}>Sign In with Google</button>
            <Navigate to="/" />
        </div>
    );

}