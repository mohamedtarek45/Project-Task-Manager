import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";
import { DataContext } from "../store/DataContext";
import { useContext } from "react";
export default function NewProject(){
    const Tdata=useContext(DataContext);

    const modal=useRef();
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    function handleSave(){
        const enterdTilte=title.current.value;
        const enterdDescription=description.current.value;
        const enterdDueDate=dueDate.current.value;

        if (enterdTilte.trim() === "" || enterdDescription.trim() === "" || enterdDueDate.trim() === "")
        {
            modal.current.open()
            return;
        }

        Tdata.addProject({
            title:enterdTilte,
            description:enterdDescription,
            dueDate:enterdDueDate,
        })

    }
    return(
    <>
        <Modal btnName="okay" ref={modal}> 
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invaild Input</h2>
            <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter value</p>
            <p className='text-stone-600 mb-4'>Please make sure you porvide a valid value for every input field</p>
        </Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={Tdata.cancelProject} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label={"Title"}/>
            <Input ref={description} label={"Description"} isTextArea/>
            <Input type="date" ref={dueDate} label={"Due Date"}/>

        </div>
        </div>
    </>

)}