import React, { useState } from 'react'
import './App.css'
import ActivityCard from './components/ActivityCard'
import ProfileCard from './components/ProfileCard'
import data from './assets/data'

function App() {

  const [timeframe, setTimeframe] = useState("daily")

  const changeTimeframe = timeframe => {
    setTimeframe(timeframe)
  }


  let cardLists = data.map((card =>
    <ActivityCard
      key={card.title}
      title={card.title}
      current={card.timeframes[timeframe].current}
      previous={card.timeframes[timeframe].previous}
      timeframe={timeframe}
    />
  ))


  return (
    <div className="App">
      <div className="App-content">
        <ProfileCard name={"Jeremy Robson"} timeframe={timeframe} change={changeTimeframe} />
        {cardLists}
      </div>
    </div>

  )
}

export default App
