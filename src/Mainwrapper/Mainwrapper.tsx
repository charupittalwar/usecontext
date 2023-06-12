import { useContext } from "react";
import { myContext } from "../App";


const Mainwrapper = () => {

    const UserContext = useContext(myContext)



return (

<div>main warpper name {UserContext.name}</div>

)



} 

export default Mainwrapper;