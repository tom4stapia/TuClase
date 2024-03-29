import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contacto({titulo, descripcion, icono, nombre, hora, mensaje}) {
    return (
        <>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full">
            <a href='https://wa.me/56940988254' target="_blank">
                <div className="flex justify-center items-center mt-5">
                    <FontAwesomeIcon icon={icono} size="3x" style={{ color: '#1dd329' }} />
                </div>
            </a>
            <div className="p-5">
                <div className="flex justify-center items-center">
                    <a href='https://wa.me/56940988254' target="_blank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{titulo}</h5>
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <p className="font-normal text-gray-700 text-justify">{descripcion}</p>
                </div>
                
            </div>
        </div>
    </>
    );
}
