import axios from "axios";
import React,{useEffect} from "react";

function App() {
  const key="2504901149478968883b162c4fd289c1";
  useEffect(() => {
  axios.get(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=${key}`)

  }, [])
  return (
    <div >
       
    </div>
  );
}

export default App;
