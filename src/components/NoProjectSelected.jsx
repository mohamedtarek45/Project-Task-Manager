import image from '../assets/no-projects.png'
import Button from './Button';
import { DataContext } from "../store/DataContext";
import { useContext } from "react";
export default function NoProjectSelected({onStartAddProject}) {
  const Tdata=useContext(DataContext);

  return (
    <div className="mt-24 text-center w-2/3">
      <img src={image} alt="" className='w-16 h-16 object-contain mx-auto'/>
      <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
      <p className='text-stone-400 mb-4'>Select Project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={Tdata.startAddProject}>Create New Project1</Button>
      </p>
    </div>
  );
}
