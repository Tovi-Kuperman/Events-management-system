import { useState } from 'react';
import { Navigate, useParams } from 'react-router';
import { useHttp } from '../custom-hooks/useHttp'
import { Program } from '../types/Program'

export const ProgramAdd = () => {
    const { request, error, loading, data } = useHttp<Program>(`program`, "post");

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const producerId=useParams<{ email: string }>().email;

    const sendAddProgram = async (e: any) => {
        e.preventDefault();
        try {
            const newProgram = {
                name,
                description,
                price,
                producerId
            }
            console.log('New Program:', newProgram);
            const { error } = await request(newProgram) || {};
            console.log('New Program!');
            if (!error) {
                setName('');
                setDescription('');
                setPrice(0);
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <h1>הוספת אירוע</h1><br></br>
            <form dir="rtl" onSubmit={sendAddProgram}>
                <label>שם: </label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /> <br />
                <label>תיאור: </label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required /> <br /> <br />
                <label>מחיר: </label>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} required /> <br />  <br />
                <button type="submit">הוספת האירוע</button>
            </form><br />  <br />
            {loading && 'loading...'}
            {error && `${error}`}
            {data && !error && `!!!הוספנו את האירוע בהצלחה`}
        </div>


    )
}