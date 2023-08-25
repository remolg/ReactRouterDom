import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

export default function Fav() {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem("favs")) ?? [])
    }, [])
    return (
        <>
            <h1>Favoriler</h1>
            <div className="list-group">
                {
                    favs.map((item) =>
                        <Link
                            key={item.id}
                            className="list-group-item list-group-item-action"
                            to={`/products/product/${item.id}`}>
                            {item.title.toUpperCase()}
                        </Link>
                    )
                }
            </div>
        </>
    )
}