import React from "react";

function TableList({handleOpen}) {

    const todos =[ 
        {id:1,title:"go to gym"},
        {id:2,title:"go to store"},
        {id:3,title:"go to school"},
    ]
  return (
    <>
      <div className="overflow-x-auto mx-32 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
            </tr>
          </thead>
          <tbody className="hover">
            
            {todos.map((todo,index)=>(
                <tr key={index}>
                <th>{todo.id}</th>
                <td>{todo.title}</td>
                <td>
                    <button onClick={()=>handleOpen("edit")} className="btn btn-accent">Update</button>
                </td>
                <td>
                    <button className="btn btn-secondary">Delete</button>
                </td>
                </tr>
            ))}
            
          
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableList;
