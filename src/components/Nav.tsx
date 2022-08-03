export default function Nav() {
    return (
        <div className="vw-100">
            <div className="container-sm text-light d-flex align-items-center justify-content-between">
                <nav className="navbar">
                    <a className="navbar-brand">Mia's Dreams</a>
                    <div className="navbar-bar text-dark">
                        <a className="mx-2">Shop</a>
                        <a className="mx-2">Explore</a>
                        <a className="mx-2">Locations</a>
                    </div>
                </nav>
                <div>
                    <button className="btn btn-light">Cart</button>
                </div>
            </div>
        </div>
    )
}