import Main from "./Main"
import ChengyuAside from "./ChengyuAside"
import ChengyuOfTheDay from "./ChengyuOfTheDay"
import { useState, useEffect } from 'react'


const Body = ( {} ) => {

  const [chengyu, setChengyu] = useState([]);  

  useEffect(() => {
    const getChengyu = async () => {
      const chengyuFromServer = await fetchChengyu();
      setChengyu(chengyuFromServer);
    }

    getChengyu();
  }, []);

  // Fetch Chengyu
  const fetchChengyu = async () => {

    try {
      const res = await fetch('http://localhost:8000/');
      const data = await res.json();
      console.log(data);
      return data
    } catch (err) {
      console.log(err);
    }
  };
 
  
  
  return (
    <section className="flex flex-col lg:grid grid-cols-5 grid-rows-3 gap-4 m-5 h-5/6">
        <Main/>
        <section className="order-1 text-center col-span-1 row-span-3 gap-5 my-8 lg:mr-4 flex flex-col justify-between lg:order-2 lg:text-left">
            <ChengyuOfTheDay chengyu={chengyu.daily || "dog"}/>
            <ChengyuAside chengyu={chengyu.random}/>
        </section>
    </section>
  )
}
export default Body