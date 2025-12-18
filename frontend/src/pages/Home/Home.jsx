import React, { useState } from 'react'
import './Home.css'
import Header from '../../componests/Header/Header'
import ExploreMenu from '../../componests/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../componests/FoodDisplay/FoodDisplay'


const Home = () => {

    const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
