import { Link, NavLink, Outlet } from "react-router";

function RootLayout() {
    return (
        <div className="app-shell">
            <header className="topbar">
                <Link className="brand" to="/">
                    ThreadLine
                </Link>
                <nav className="nav-links" aria-label="Primary navigation">
                    <NavLink to="/">Catalog</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout