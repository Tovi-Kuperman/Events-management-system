import Axios,{ AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

const axiosInstance = Axios.create({
    baseURL: "http://localhost:3000",
    // baseURL: "http://localhost:27017"
});

type httpMethod= 'get'|'post'|'put'|'delete';

export const useHttp = <T>(url: string, method: httpMethod) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null); 

    const request=useCallback(async(...params:any[])=>{
        setLoading(true);
        setError(null);
        if(method==='delete')
            url += `/${params[0]}`;
        try {
            // console.log('before result');
            console.log(url);
            const result=await axiosInstance[method]<T>(url,...params);
            // console.log('result'+ result);
            setData(result.data);
            // console.log(result.data);
        } catch (error) {
            setError('Error while fetching data');
            if(method==='post' && url=="producer")
            if (error instanceof AxiosError) {
                console.log('המייל כבר קיים במערכת');
                return error.response?.data || "Unknown error";
            } else {
                // console.log('error!2');
               return "An unexpected error occurred";
            }
            // console.log('error!3');
            
        }
        finally{
            setLoading(false);
        }
    },[]);

    //url,method


    useEffect(() => {
         if (method === 'get') {
            request();
         }
    }, [method, url]);
    
    return {data,loading,error,request}
}
