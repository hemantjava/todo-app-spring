import React, { useEffect, useState } from "react";
import { deleteById, retriveAllUserName } from "./api/TodoAPIService";
import WarningBar from "./utils/WarningBar";

export default function TodoListComponent() {
  //tell react that your component needs to do something after render.
  useEffect(() => refreshTodos());

  const refreshTodos = () => {
    retriveAllUserName("hemantjava")
      .then((response) => {
        setDotos(response.data);
        //console.log(response);
      })
      .catch((error) => console.error(error));
  };

  const [todos, setDotos] = useState([]);
  const [responseMessage, setMessage] = useState(null);
  const deleteTodo = (id) => {
    deleteById(id)
      .then(() => {
        setMessage(`Delete of todo with id = ${id} sucessful `);
        refreshTodos();
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <h1>Things you want to do.. </h1>
      {responseMessage && (
        <WarningBar message={responseMessage} duration={500} />
      )}

      <div className="table-responsive-lg">
        <table
          className="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle"
        >
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Desciption</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {todos.map((todo) => (
              <tr className="table-primary" key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.username}</td>
                <td>{todo.description}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}
