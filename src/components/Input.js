import React, { useState } from 'react';
import ToDolist from './ToDolist';
import Status from './Status';



const Input = () => {
    const [inputlist, setinputlist] = useState("");
    const [item, setitem] = useState([]);

    const itemevent = (event) => {
        setinputlist(event.target.value);
    }
    const inputhandler = () => {
        setitem((olditem) => {
            return [...olditem, inputlist];
        });

        setinputlist("");
    }

    const deleteitem = (id) => {

        setitem((olditem) => {
            return olditem.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };
    return (
        <>
            <div className="m_div">
                <div className="c_div">
                    <input type="text" placeholder="Add items" onChange={itemevent} value={inputlist} />
                    <button onClick={inputhandler}>+</button>

                    <ol>
                        {
                            item.map((itemval, index) => {

                                return (
                                    <ToDolist text={itemval}
                                        key={index}
                                        id={index}
                                        onselect={deleteitem} />
                                );

                            })

                        }

                    </ol>

                    <Status />

                </div>
            </div>
        </>
    );
}

export default Input;
