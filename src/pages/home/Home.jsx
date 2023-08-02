import React from 'react'
import HeroBanner from '../../components/hero/HeroBanner'
import PopularMovie from '../../components/Popularmovie/Popularmovie'

const Home = () => {
  return (
    <div className='home'>
        <HeroBanner/>
        <PopularMovie/>
    </div>
  )
}

export default Home