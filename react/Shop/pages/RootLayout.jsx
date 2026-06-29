import { Link, NavLink, Outlet } from "react-router";
import "./RootLayout.css"

function RootLayout() {
    return (
        <div className="app-shell">
            <header className="topbar">
                <Link className="brand" to="/">
                    ThreadLine
                </Link>
                <nav className="nav-links" aria-label="Primary navigation">
                    <NavLink 
                        className={(o)  => `${o.isPending ? "pending": ""} ${o.isActive ? "active": ""} nav-link`} 
                        to="/">
                        Каталог
                    </NavLink>
                    <NavLink 
                        className={(o)  => `${o.isPending ? "pending": ""} ${o.isActive ? "active": ""} nav-link`} 
                        to="/about">
                        О компании
                    </NavLink>
                    <NavLink 
                        className={(o)  => `${o.isPending ? "pending": ""} ${o.isActive ? "active": ""} nav-link`} 
                        to="/about">
                        Корзина
                    </NavLink>
                    <NavLink 
                        className={(o)  => `${o.isPending ? "pending": ""} ${o.isActive ? "active": ""} nav-link`} 
                        to="/about">
                        Доставка и оплата
                    </NavLink>
                    <NavLink 
                        className={(o)  => `${o.isPending ? "pending": ""} ${o.isActive ? "active": ""} nav-link`} 
                        to="/about">
                        Контакты
                    </NavLink>
                    
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout