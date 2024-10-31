import { useState,createContext, useContext } from "react";



export const DataContext=createContext({
    projects:[],
    tasks:[],
    selectedProjectId:'',
    addTask:()=>{},
    deleteTask:()=>{},
    startAddProject:()=>{},
    cancelProject:()=>{},
    selectedProject:()=>{},
    deleteProject:()=>{},
    addProject:()=>{},
    taskID:0,
    projectID:0,
})

export default function DataContextProvider ({children}){
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
      });
      function handleAddTask(text) {
        setProjectState((prevState) => {
          const TaskId = Math.random();
          const newTask = {
            text: text,
            projectId: prevState.selectedProjectId,
            id: TaskId,
          };
          return {
            ...prevState,
            tasks: [newTask, ...prevState.tasks],
          };
        });
      }
      function handleDeleteTask(id) {
        setProjectState((prevState)=>{
          let new_tasks=prevState.tasks.filter((Tas)=>(Tas.id!==id));
          return{
            ...prevState,
            tasks:new_tasks
          }
        })
      }
    
      function handleStartAddProject() {
        setProjectState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: null,
          };
        });
      }
      function handleCancelProject() {
        setProjectState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: undefined,
          };
        });
      }
      function handleSelectProject(id) {
        setProjectState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: id,
          };
        });
      }
      function handleDeleteProject() {
        setProjectState((prevState) => {
          return {
            selectedProjectId: undefined,
            projects: prevState.projects.filter(
              (old) => old.id !== projectState.selectedProjectId
            ),
          };
        });
      }
      function handleAddProject(Project) {
        console.log("Project");
        console.log(Project);
        setProjectState((prevState) => {
          const ProjectId = Math.random();
          const newProject = {
            ...Project,
            id: ProjectId,
          };
          return {
            ...prevState,
            selectedProjectId: ProjectId,
            projects: [...prevState.projects, newProject],
          };
        });
      }

      const dataContext={
        projects:projectState.projects,
        tasks:projectState.tasks,
        selectedProjectId:projectState.selectedProjectId,
        addTask:handleAddTask,
        deleteTask:handleDeleteTask,
        startAddProject:handleStartAddProject,
        cancelProject:handleCancelProject,
        selectedProject:handleSelectProject,
        deleteProject:handleDeleteProject,
        addProject:handleAddProject,
        taskID:333,
        projectID:0,
      }
      return(
        <DataContext.Provider value={dataContext}>
            {children}
        </DataContext.Provider>
      )
}

export const useAppContext = ()=>{
    const Tdata= useContext(DataContext);
    return Tdata;
}
