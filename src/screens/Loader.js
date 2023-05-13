import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import PageLoader from "../components/home/PageLoader";

function Loader(){
    const language = useSelector((state) => state.lang)
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/' + language)
        }, 3000);
        
    }, [language, navigate])

    return(
        <PageLoader/>
    )
}

export default Loader