import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <Link to="/" className="btn btn-info">Ana Sayfaya Git ...</Link>
        </>
    )
}