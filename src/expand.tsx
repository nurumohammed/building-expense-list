import { useState } from "react"

interface props{
children:string
maxchar?:number
}

const Expand = ({children ,maxchar = 100}:props) => {
    const[isexpand, setIsexpand] = useState(false)
    if(children.length <= maxchar) return <p>{children}</p>
    const text = isexpand ? children :children.substring(0,maxchar)
    return <p>{text}... <button onClick={()=>setIsexpand(!isexpand)}>{isexpand ? 'Less' : 'More'}</button>  </p>

}

export default Expand