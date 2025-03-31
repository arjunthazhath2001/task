import { useState } from "react"
import ModalForm from "./components/ModalForm"
import Navbar from "./components/Navbar"
import TableList from "./components/TableList"

function App() {
  const [isOpen,setIsOpen]= useState(false);
  const [modelMode,setModelMode]= useState('add');

  const handleOpen= (mode)=>{
    setIsOpen(true)
  }

  const handleSubmit = ()=>{
    if(modalMode==="add"){
      console.log("model mode add")
    } else{
      console.log("model mode edit")
    }
  }

  return (
    <>
    <Navbar onOpen={()=>{handleOpen("add")}}/>
    <TableList/>
    <ModalForm isOpen={isOpen} OnSubmit={handleSubmit} onClose={()=>setIsOpen(false)}/>
    </>
  )
}

export default App
