import React from 'react';


const ToDolist = (props) => {
   return(
       <>
       <div className="todo_style">
      <li><i onClick={() => {
          {props.onselect(props.id)}
      }} class="fa fa-times" aria-hidden="true" />{props.text}</li>
       </div>
       </>
   )
}

export default ToDolist;