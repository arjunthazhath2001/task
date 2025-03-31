import React from "react";

function TableList() {

    const todos =[ 
        {id:1,title:"go to gym", status:"not done"},
        {id:2,title:"go to store", status:"done"},
        {id:3,title:"go to school", status:"done"},
    ]
  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody className="hover">
            
            {todos.map((todo,index)=>(
                <tr key={index}>
                <th>{todo.id}</th>
                <td>{todo.title}</td>
                <td>{todo.status}</td>
                <td>
                    <button className="btn btn-accent">Update</button>
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
