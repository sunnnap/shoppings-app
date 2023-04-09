import { Link } from "react-router-dom"

export function Loginerror(){
    return(
        <div>
            <h2 className="text-danger">password invalid</h2>
            <Link to="/login">try again</Link>
        </div>
    )
}