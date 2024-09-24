export function openModal (id) {
    const modal = document.getElementById(id);

    modal.style.display = "block"
}

export function hideModal(id){
    const modal = document.getElementById(id);

    modal.style.display = "none"
}

export default function Modal({children, id}){
    return (
        <div id={id} className="hidden fixed top-0 letf-0 w-full h-full bg-gray-500 bg-opacity-70 z-10 overflow-hidden">
            <div className="max-w-full max-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded p-5 z-20 bg-slate-400">

            <button 
                onClick={() => hideModal(id)} 
                className="w-7 h-7 bg-slate-600 flex items-center justify-center absolute top-4 right-4 rounded text-2xl text-white z-40"> 
                &times;
            </button>

            {children}

            </div>
        </div>
    )
}