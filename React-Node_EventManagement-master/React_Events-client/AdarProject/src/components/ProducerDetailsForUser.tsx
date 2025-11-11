import { Outlet, useParams } from "react-router"
import { useHttp } from '../custom-hooks/useHttp'
import { Producer } from '../types/Producer'
import { useEffect } from "react";

export const ProducerDetailsForUser = () => {
    const email = useParams<{ email: string }>().email;
    const { data, request: getRequest } = useHttp<Producer>(`producer/${email}`, 'get');

    useEffect(() => {
        try {
            if (email) {
                getRequest();
            }
        }
        catch (error) {
            console.log("error", error);
        }

    }, [email, getRequest]);

    return (

        <div>

            {data && (
                <>
                    <div>
                        <h1>פרטי מפיקה</h1>
                        <h2>שם: {data.name}</h2><br></br>
                        <p>{data.email} :מייל</p><br></br>
                        <p>טלפון: {data.phone}</p><br></br>
                    </div>
                    <Outlet />
                </>
            )}
        </div>

    )
}


