"use client"

import { useState } from "react";

const Home = () => {
  const [clicked,setClicked] = useState(0)
  const [one,setone] = useState(0)

  return (
    <div className="h-[1110vh]">
      <h1>{clicked}</h1>
      <button onClick={()=>setClicked(clicked+1)}>Increment me</button>
      <input type="number" onChange={(e)=>setone(parseInt(e.target.value))} />
      <button  onClick={()=>setClicked(one)}>set</button>
    </div>
  );
};

export default Home;
