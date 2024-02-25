import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contacto({titulo, descripcion, icono, nombre, hora, mensaje}) {
    return (
        <>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href='https://wa.me/56973927173' target="_blank">
                <div className="flex justify-center items-center mt-5">
                    <FontAwesomeIcon icon={icono} size="3x"/>
                </div>
            </a>
            <div className="p-5">
                <div className="flex justify-center items-center">
                    <a href='https://wa.me/56973927173' target="_blank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">{descripcion}</p>
                </div>
                
            </div>
            
            <div class="flex items-start gap-2.5 p-6">
            <img class="w-8 h-8 rounded-full" src="default.jpg" alt="Apoderado"/>
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-gray-900 dark:text-white">{nombre}</span>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{hora}</span>
                </div>
                <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{mensaje}</p>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Entregado</span>
            </div>
            </div>
        </div>
    </>
    );
}
