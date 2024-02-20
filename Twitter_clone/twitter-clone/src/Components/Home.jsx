import React from 'react'
import Feed from "./Feed/Feed";
import SideBar from "./SideBar/SideBar";
import Widgets from "./WidGets/Widgets";
import "./home.css";

export const Home = () => {
  return (
    <div className='mert'>


          <SideBar />
          <Feed />
          <Widgets />
   

    </div>
  )
}
