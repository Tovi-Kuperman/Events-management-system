import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router"

export const ProducerMenu = () => {
    const [emailInput, setEmailInput] = useState('');
    const [showInputEmail, setShowInputEmail] = useState(false);

    const navigate = useNavigate();

    const submitEmail=(e:any)=>{
        e.preventDefault();
        if (emailInput) {
            navigate(`/producers/${emailInput}`);
        }
    }
    return(
        <div>
            <h1>ברוכה הבאה</h1>
            {!showInputEmail &&
                    <>
                        <button ><NavLink to="add">הוספת מפיקה חדשה</NavLink></button><br></br> <br></br>
                        
                        <button onClick={() => setShowInputEmail(true)}>כניסה</button>
                    </>
                }
                {showInputEmail &&
                    <form onSubmit={submitEmail}>
                        <input
                            type="email"
                            name="email"
                            value={emailInput}
                            placeholder="email"
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                        <button type="submit">sign in by email</button>
                    </form>
                }
            
            {/* <button > <NavLink to="producerDetails">מפיקה קיימת </NavLink></button> */}
            <Outlet/>
        </div>
        
    ) 
}