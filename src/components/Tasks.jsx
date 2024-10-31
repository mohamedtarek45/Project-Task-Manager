import NewTask from "./NewTask";
import { useContext } from "react";
import { DataContext } from "../store/DataContext";
export default function Tasks({projectid}) {
  const Tdata=useContext(DataContext);
  
  let mytask=Tdata.tasks.filter((task)=>(task.projectId===projectid))
    return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={Tdata.addTask}/>
      {Tdata.tasks.length===0 && <p className="text-stone-800 my-4">
        This project doesn't have any task yet
      </p>}
      {Tdata.tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {mytask.map((task)=>(
                <li key={task.id} className="flex justify-between my-4">
                    <span>{task.text}</span>
                    <button onClick={()=>Tdata.deleteTask(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                </li>
            ))}
      </ul>)}
      

    </section>
  );
}
