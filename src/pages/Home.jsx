import { Products } from "../Products"

export default function Home({ user }) {

    return (
        <>
            <h1>Ana Sayfa</h1>
            <Products user={user} />
        </>
    )
}