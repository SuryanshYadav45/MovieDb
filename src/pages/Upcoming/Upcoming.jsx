import React,{useState,useEffect} from 'react';
import PopulateMovie from '../../components/populatemovie/PopulateMovie';


const Upcoming = () => {
    const [upcoming, setupcoming] = useState([]);
    useEffect(()=>
    {
        const fetchmovie= async()=>
        {
            try {
               const res= await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`) ;
               const data=await res.json();
               setupcoming(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchmovie();
    },[])
    useEffect(()=>{
        console.log(upcoming)
    },[upcoming])
  return (
    <div className='upcoming'>
       <PopulateMovie title="Upcoming Movie" data={upcoming} />
    </div>
  )
}

export default Upcoming