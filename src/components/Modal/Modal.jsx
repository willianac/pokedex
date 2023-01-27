import { useRef } from "react"
import "./Modal.css"

export default function Modal({ visible, handle, captured }) {
    const modalRef = useRef()
    const textRef = useRef()

    if(visible) {
        modalRef.current.removeAttribute('open')
        modalRef.current.showModal()
    }

    if(captured) {
        textRef.current.innerHTML = `Captured!!`
        setTimeout(() => {
            closeModal()
        },2000)
    }

    const closeModal = () => {
        modalRef.current.close()
        handle()
    }
    
    return (
        <dialog className="modal" ref={modalRef}>
            <h1 ref={textRef}>Catching...</h1>
            <button onClick={() => closeModal()}>Close modal</button>
        </dialog>
    )
}