import { useContext } from "react";
import { DataContext } from "../store/DataContext";
import NoProjectSelected from "./NoProjectSelected";
import NewProject from "./NewProject";
import SelectedProject from "./SelectedProject"; // Assuming you want to add this

export default function Content() {
  const Tdata = useContext(DataContext);

  
  if (Tdata.selectedProjectId === null) {
    return <NewProject />;
  } else if (Tdata.selectedProjectId === undefined) {
    return <NoProjectSelected />;
  } else {
    return <SelectedProject />; 
  }
}