import { useRef } from "react"
import "./Modal.css"

export default function Modal({ visible, handle, captured, setCapturedPokemon }) {
    const modalRef = useRef()
    const textRef = useRef()

    if(visible) {
        modalRef.current.removeAttribute('open')
        modalRef.current.showModal()
        setTimeout(() => {
            modalRef.current.close()
            setCapturedPokemon(false)
        }, 5000)
    }
    
    return (
        <dialog className="modal" ref={modalRef}>
            <h1 ref={textRef}>{captured ? "Captured!!" : "Catching..."}</h1>
            <img src="/assets/pokeball.png" alt="one pokeball"/>
        </dialog>
    )
}