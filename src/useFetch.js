import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController(); 
        setTimeout(() => {
            fetch(url,{signal: abortCont.signal})
            .then(res => {
                if(!res.ok)
                {
                  throw Error('could not fetch data')
                }
                return res.json()
            })
            .then(data=> {
                setData(data);
                seterror(null);
                setisPending(false);
            })
            .catch(err=>{
                if(err.name === "AbortError")
                {
                    console.log("fetch aborted")
                }
                else{
                    setisPending(false);
                    seterror(err.message);
                    setData(null);
                }
            })
        }, 1000);

        return ()=> abortCont.abort();
        
    },[url])

    return {data, isPending, error};
}
 
export default useFetch;