import { useLocation } from "preact-iso";
import { useAuth } from "../../auth/useAuth.js";


const Logout = () => {
    const { logout } = useAuth();
    logout();    
    const {route} = useLocation();
    route("/");
    return null;
}

export default Logout