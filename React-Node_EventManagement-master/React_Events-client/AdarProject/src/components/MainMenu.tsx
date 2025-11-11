import { NavLink, Outlet } from "react-router"

export const MainMenu = () => {

    return(
        <div>
            <h1 dir="rtl">ברוכים הבאים למערכת ההפקות שלנו!</h1>
            <button style={{margin:'15px'}}><NavLink to="producers" replace>כניסת מפיקה</NavLink></button>
            <button > <NavLink to="users">כל האירועים</NavLink></button>
            <Outlet/>
        </div>
        
    ) 
}