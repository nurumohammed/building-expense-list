import { ReactNode } from "react"
import './navbar.css'

interface props{
    count:ReactNode
}

const NavBar = ({count}:props) => {
  return (
    <div className="nav">NavBar:{count}</div>
  )
}

export default NavBar