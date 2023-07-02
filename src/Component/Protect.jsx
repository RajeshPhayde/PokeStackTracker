import { Navigate } from "react-router-dom";

const Protect = ({ Child }) => {

    let verify = () => {
        if (localStorage.getItem("login") == null) {
            return false;
        }
        else {
            return true;
        }
    }

    return (
        <>
            {verify() ? <Child /> : <Navigate to="/" />}
        </>
    );
}

export default Protect;