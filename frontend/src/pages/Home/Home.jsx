import React, { useState } from 'react'
import './Home.css'
import Hearder from '../../components/Hearder/Hearder'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisply from '../../components/FoodDisplay/FoodDisply'
import AppDownload from '../../components/AppDownload/AppDownload'

const home = () => {
const [category, setCategory] = useState("All");

  return (
    <div>
      <Hearder/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisply category={category}/>
      <AppDownload/>      
    </div>
  )
}

export default home
