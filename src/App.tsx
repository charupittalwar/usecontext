import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mainwrapper from './Mainwrapper/Mainwrapper';
import Mainwrappertwo from './Mainwrapper/Mainwrappertwo';


export const myContext = createContext({

  name: "charu ",

  id: 0

})

export const authcontext:any = createContext({

isLogin :false ,

setfun :()=>{}

});
function App() {

  const initialvalue = {

    name :'test123',
    id:1
  }
const [loginstate ,setLoginstate ] = useState (false);
 
  return (

    <authcontext.Provider value = {{isLogin :loginstate , setfun :setLoginstate}} >
    <myContext.Provider value={initialvalue}>
   <div>
    

<br></br>
<br></br>
{/*<Mainwrapper /> */}
<Mainwrappertwo />
   </div>
   </myContext.Provider>
   </authcontext.Provider>
  );
}

export default App;
