import { Outlet, useNavigate, useParams } from "react-router"
import { useEffect, useState } from 'react';
import { useHttp } from '../custom-hooks/useHttp'
import { Producer } from '../types/Producer'

export const ProducerDetails = () => {
    const email = useParams<{ email: string }>().email;
    const navigate = useNavigate();
    const [updateProducer, setUpdateProducer] = useState(false);
    const { data, request: getRequest } = useHttp<Producer>(`producer/${email}`, 'get');
    const { loading, error, request: putRequest } = useHttp<Producer>(`producer/${email}`, 'put');
    let answer: boolean = false;

    // const submitEmail=(e:any)=>{
    //     e.preventDefault();
    //     if (email) {
    //         navigate(`/producers/${email}`);
    //     }
    // }

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

    const submitProducer = async (e: any) => {
        e.preventDefault();
        const updateProducer: Producer = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }
        try {
            putRequest(updateProducer);
            getRequest();
            setUpdateProducer(false);
            answer = true;
            window.location.reload();
        } catch (error) {
            console.log("error", error);
        }

    }


    return (

        <div>

            {data && (
                <>

                    <div>
                        <h1>פרטי מפיקה</h1>
                        <h2>שם: {data.name}</h2><br></br>
                        <p>{data.email} :מייל</p><br></br>
                        <p>טלפון: {data.phone}</p><br></br>
                        {!updateProducer && <button style={{ margin: "10px" }} onClick={() => setUpdateProducer(true)}>עדכון פרטי מפיקה</button>}
                        {!updateProducer && <button onClick={() => navigate(`/producers/${email}/add`)}>להוספת אירוע</button>}

                        {updateProducer &&
                            <form onSubmit={submitProducer}>

                                <label htmlFor="name">שם מפיקה </label>
                                <input type="text" defaultValue={data.name} name="name" />
                                <br />
                                <label htmlFor="phone">טלפון </label>
                                <input type="phone" defaultValue={data.phone} name="phone" />
                                <br />
                                <label htmlFor="email">מייל </label>
                                <input type="email" defaultValue={data.email} name="email" />
                                <br />
                                <button disabled={loading} type="submit">עדכון מפיקה</button>
                                {error && <p className="error">{error}</p>}
                                {/* {answer && <p>{"השינויים נשמרו בהצלחה"}</p>} */}

                            </form>}
                    </div>

                    <Outlet />
                </>
            )}
        </div>

    )
}


