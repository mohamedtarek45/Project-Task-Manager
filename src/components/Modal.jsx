import { useRef, useImperativeHandle ,forwardRef  } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const Modal= forwardRef(function ({children,btnName},ref){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return{ open(){
            dialog.current.showModal();
        }}
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-slate-900/90 p-4 shadow-sm rounded-md ">
            {children}
            <form method="dialog" className="mt-8 text-right">
                <Button>{btnName}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
    
})

export default Modal 