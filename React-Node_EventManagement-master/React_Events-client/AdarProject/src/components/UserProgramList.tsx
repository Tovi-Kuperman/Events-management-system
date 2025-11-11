import { Navigate, Outlet, useNavigate } from "react-router";
import { useHttp } from "../custom-hooks/useHttp";
import { Program } from "../types/Program";
import { useEffect, useState } from "react";

export const UserProgramList = () => {
    const { data, request: getRequest } = useHttp<Program[]>(`program`, 'get');
    const navigate = useNavigate();
    console.log(data);
    const [filter, setFilter] = useState<string>('');
    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const fetchedData = await getRequest();
                if (fetchedData) {
                    setProgram(fetchedData);
                }
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchPrograms();
    }, [getRequest]);

    // const {Program:p}={name:"מחנה שבת",description:"לג בעומר",price:180,producerId:"Matsegett@gmail.com"}
    const [program, setProgram] = useState<any>([""]);

    const filteredPrograms = filter
        ? data?.filter(event =>
            // event.name && event.name.toLowerCase().includes(filter.toLowerCase())
             event.name && event.name.toLowerCase().includes(filter.toLowerCase())

        )
        : data; // אם אין סינון, הצג את כל התוכניות
    // console.log(`${filter},data------ ${filteredPrograms}` )
    //  data?.forEach(event=> console.log(event.name))

    return (
        <div>
            <h2>רשימת האירועים במערכת</h2>
            <input
                type="text"
                placeholder="סנן לפי שם"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <div>
                {filteredPrograms && filteredPrograms.map((prog: Program) => (
                    <div
                        style={{ border: '1px solid #ccc', borderRadius: '15px', padding: '10px', margin: '10px' }}key={self.crypto.randomUUID()} id={self.crypto.randomUUID()}>   
                        <h3>שם: {prog.name}</h3>
                        <p>תיאור: {prog.description}</p>
                        <p>מחיר: {prog.price}</p>
                        <button onClick={() => window.location.href = `mailto:${prog.producerId}`}>צור קשר</button>
                        <button style={{ margin: '30px' }} onClick={() => navigate(`/producers/${prog.producerId}/user`)}>פרטי מפיקה</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
