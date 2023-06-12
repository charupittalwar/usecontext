import { useContext } from "react"
import { authcontext ,myContext  } from "../App"

const Mainwrappertwo = () =>{

const userContext = useContext(myContext);
const Logincontext:any = useContext (authcontext)
const content =Logincontext.isLogin ? (
<p>main wrapper two name {userContext.name}</p>):

(
<span>is false</span>)






return (

<div>


<div>

usercontext name is {content}

</div>

<button onClick={()=>{Logincontext.setfun(!Logincontext.isLogin)}}>change state</button>



  
</div>

);

};

export default Mainwrappertwo