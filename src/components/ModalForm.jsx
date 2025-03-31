import React from "react";

function ModalForm({isOpen, onClose, mode, OnSubmit}) {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
         <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
            <h3 className="font-bold text-lg py-4">{mode==="edit" ? 'Edit Todo': 'Add Todo'}</h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button className="btn btn-success">{mode==="edit" ? 'Save Changes': 'Add Todo'}</button>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default ModalForm;
