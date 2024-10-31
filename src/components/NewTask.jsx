import { useState } from "react"
export default function NewTask({onAdd})
{
    const[Ivalue,setValue]=useState('');
    function handleChange(e){
        setValue(e)
    }
   function handleClick(){
    if(Ivalue!==""){
        onAdd(Ivalue);
        setValue('')
    }
    }
    return(
        <div  className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={(e)=>handleChange(e.target.value)} value={Ivalue}/>
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-900">Add Task</button>
        </div>
    )
}