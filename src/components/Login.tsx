
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const loggin = false

    useEffect(() => {
        if (!loggin) {
            navigate("/");
        }
    }, [loggin, navigate]);

    return <>
    <h2>Login</h2>
    </>
}

export default Login