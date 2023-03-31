import React,{createContext, useState} from 'react'


 export const store=createContext();


function Contextapi() {
    const [data, setdata] = useState([
        {
            brandname:"i phone"
        },
        {
            brandname:"bmw"

        },
        {
            brandname:"redmi"
        }

    ]);

    
  return (
    <store.Provider value={[data,setdata]}>
        <center>
          
          <h1> hello</h1>
          
        </center>
    </store.Provider>
  )
}

export default Contextapi