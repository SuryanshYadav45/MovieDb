import React,{useState,useEffect} from 'react';
import PopulateMovie from '../../components/populatemovie/PopulateMovie';


const Upcoming = () => {
    const [upcoming, setupcoming] = useState([]);
    useEffect(()=>
    {
        const fetchmovie= async()=>
        {
            try {
               const res= await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=8bee160639f926b57449b9c3344e5d34`) ;
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
