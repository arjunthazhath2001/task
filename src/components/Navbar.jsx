import React from "react"
export default function Navbar({onOpen}){
    return(
    <>
    <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
         
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">TODO APP</a>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOpen}>Add TODO</a>
        </div>
      </div>
      </>)
}

