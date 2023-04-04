import { useEffect, useState } from "react";
import { axios } from "axios";

const useFetch =(endpoint, query)=>{
    const[data, setData]= useState([]);
    const[error,setError]=useState(null);
    const[isloading, setIsLoading] =useState(false);
    const axios = require("axios");

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {...query},
  headers: {
    'X-RapidAPI-Key':'46f0e55ff0mshd5016bfd3d4422ep16f190jsn2aade2e00dc8',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};


const fetchData=async ()=>{
    setIsLoading(true)
    try{
        const response=await axios.request(options)
        setData(response.data.data)
        setIsLoading(false)
    }catch(error){
        setError(error)
        alert("error")
    }finally{
        setIsLoading(false)
    }
}

useEffect(()=>{
    fetchData();
},[])


const refetch=()=>{
setIsLoading(true)
fetchData();
}
return {data,isloading,error,refetch};

}

export default useFetch;