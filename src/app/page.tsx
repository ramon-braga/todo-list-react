"use client"

import { useReducer, useState } from "react";
import { listReducer } from "@/reducers/listReducer";
import { VscAdd } from "react-icons/vsc";
import { FaTrash, FaEdit } from "react-icons/fa";

function Page() {
    const [list, dispatch] = useReducer(listReducer, []);
    const [addField, setAddField] = useState('');

    // Function to add a task
    function addTask() {
        if (addField.trim() === '') return;

        dispatch({
            type: 'addItem',
            payload: {
                text: addField.trim(),
            },
        });
        setAddField('');
    }

    // Function to check task
    function handleCheckTask(id: number) {
      dispatch({
        type: 'toggleItem',
        payload: {
          id
        }
      });
    }

    // Function to edit a Task
    function handleEditButton(id: number) {
        const item = list.find(item => item.id === id);
        if (!item) return false;

        const newText = window.prompt('Edit Task', item.text);
        if (!newText || newText.trim() === '') return false;

        dispatch({
            type: 'editItem',
            payload: {
                id,
                text: newText
            }
        });

      }

      // Function to remove a task from the list
      function handleDeleteButton(id: number) {
        const item = list.find(item => item.id === id);
        if (!item) return false;

        dispatch({
            type: 'removeItem',
            payload: {
                id
            }
        });
        
      }

    return (
        <div className="container mx-auto max-w-xl text-white font-mono border border-stone-800 p-5 mt-5 rounded-md">
            <h1 className="text-center text-5xl mt-8 mb-3">TODO LIST</h1>
            <div className="flex py-3 rounded-md">
                <input
                    type="text"
                    className="flex-1 px-2 py-1 text-xl bg-transparent border-b border-stone-800 outline-none"
                    value={addField}
                    onChange={e => setAddField(e.target.value)}
                />
                <button
                    onClick={addTask}
                    className="bg-emerald-500 text-2xl px-6 py-4 rounded-r-md transition-all hover:bg-teal-500 active:opacity-85"
                >
                    <VscAdd />
                </button>
            </div>
            <ul>
                {list.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center mt-3 text-xl bg-zinc-900 rounded-md transition-all hover:bg-stone-800"
                    >
                        <div
                          onClick={() => handleCheckTask(item.id)}
                          className={`flex-1 pl-5 py-4 break-all hover:cursor-pointer ${
                            item.done ? 'line-through text-gray-500' : ''
                          }`}
                        >
                          {item.text}
                        </div>

                        <button
                            onClick={() => handleEditButton(item.id)}
                            className="p-5 transition-all hover:text-yellow-500 active:text-yellow-300"          
                        >
                            <FaEdit />
                        </button>

                        <button
                            onClick={() => handleDeleteButton(item.id)}
                            className="p-5 rounded-r-md overflow-hidden transition-all hover:text-red-500 active:text-red-300"
                        >
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;
