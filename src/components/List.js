import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Input from './Input';


const List = (props) => {


    return (
        <>
            <div className="m_div">
                <div className="c_div">
                   
                    <h1>ToDo List</h1>
   
                    <NavLink className="link" to="/ToDo">Add-ToDo</NavLink>
                   
                </div>
            </div>
        </>
    );
}

export default List;