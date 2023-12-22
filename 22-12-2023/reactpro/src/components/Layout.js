import { Outlet,Link } from "react-router-dom";

const Layout =()=>{
    return(
        <>
        <nav>
            <ul>
                <li><Link to='./Login.js'>Login</Link></li>
                <li><Link to='./Register.js'>Register</Link></li>
                <li><Link to='./Home.js'>Home</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>


    )
    
}
export default Layout;