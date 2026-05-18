import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css"

function Sidebar ({isDraft}){
const links = [
    {icon : "fa-chart-bar", title: "Status", path:"/"},
    {icon:"fa-users", title: "Users Managment",  path:"/users"},
    {icon:"fa-building", title: "Projects Managment",  path:"/projects"},
    {icon:"fa-building", title: "Developer Managment", path:"/developer"},
    {icon:"fa-globe", title: "Website Cms", path:"/website"},
    {icon:"fa-message", title: "Live Chat", path:"/chat"},

];
    return (
        <aside className={`${styles.sidebar} min-vh-100 py-4 `}>
            <div className="fw-semibold px-4 mb-3 fs-4 opacity-75">Dashboard</div>
            {/* Links parent  */}
            <nav>
            {links.map((item, index)=> (
                <NavLink
                to={item.path}
                     className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4 `} key={index}>
                    <i className={`fa-solid ${item.icon} fs-5 `}></i>
                    <span className="fs-5 ">{item.title }
                        {item.path ==="/users" && isDraft && (
                            <span className="badge bg-warning ms-2 text-dark">Draft</span>

                        )}
                    </span>
                </NavLink>
            ))}
            </nav>
        </aside>
    )
}

export default Sidebar;
