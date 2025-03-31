import { useState } from "react"
import ModalForm from "./components/ModalForm"
import Navbar from "./components/Navbar"
import TableList from "./components/TableList"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleSubmit = () => {
    if(modalMode === "add") {
      console.log("modal mode add")
    } else {
      console.log("modal mode edit")
    }
    setIsOpen(false);
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")}/>
      <TableList handleOpen={handleOpen}/>
      <ModalForm 
        isOpen={isOpen} 
        onSubmit={handleSubmit} 
        onClose={handleClose}
        mode={modalMode}
      />
    </>
  )
}

export default App