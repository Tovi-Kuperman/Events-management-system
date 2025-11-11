import { useState } from 'react';
import { Navigate } from 'react-router';
import {useHttp} from '../custom-hooks/useHttp'
import {Producer} from '../types/Producer'

export const ProducerAdd = () => {
    const { request, error, loading,data } = useHttp<Producer>(`producer`, "post");

    const [name, setName] = useState('');
    // const [idNumber, setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const sendAddProducer = async (e: any) => {
        e.preventDefault();
        try {
            const newProducer={
                // _id: idNumber,
                name,
                email,
                phone
            }
            console.log('New Producer:', newProducer);
            const {error}=await request(newProducer)||{};
            console.log('New Producer!');
            if(!error)
            {
                setName('');
                setEmail('');
                setPhone('');
            }

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <h1>הוספת מפיקה</h1><br></br>
            <form dir="rtl" onSubmit={sendAddProducer}>
                <label>שם: </label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /> <br />
                <label>מייל: </label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br /> <br />
                <label>טלפון: </label>
                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /> <br />  <br />
                <button type="submit">הצטרפי אלינו</button>
            </form><br />  <br />
            {loading&&'loading...'}
            {error&&`${error}`}
            {data&&!error&&`!!!הוספנו אותך בהצלחה`}
        </div>


    )
};
