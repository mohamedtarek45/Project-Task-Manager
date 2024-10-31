import Tasks from "./Tasks"
import { useContext } from "react";
import { DataContext } from "../store/DataContext";
export default function SelectedProject({}){
    const Tdata=useContext(DataContext);
    
    let selectedProject = Tdata.projects.find(
        (project) => project.id === Tdata.selectedProjectId
      );

    const date=new Date(selectedProject.dueDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:"short",
        day:'numeric'
    })
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{selectedProject.title}</h1>
                    <button onClick={Tdata.deleteProject} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400 ">{date}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{selectedProject.description}</p>
            </header>
            <Tasks projectid={selectedProject.id} />
        </div>
    )
}