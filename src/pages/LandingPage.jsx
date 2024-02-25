import Contacto from '../components/Contacto';
import Equipo from '../components/Equipo';
import Precios from '../components/Precios';
import { faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import { faComments, faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import '../styles/LandingPage.css';

export default function LandingPage() {
  return (
    <>
    <div className='parallax-image flex justify-center items-center h-96 rounded-sm mt-10' id='inicio'>
      <div className='text-center titulo p-4 rounded-xl m-2'>
        <h1 className='text-5xl font-bold text-gray-50 tamano' id='quien'>Encuentra a tu profesor ideal</h1>
      </div>
    </div>
    <div className="m-10" >
        <h2 class="text-4xl font-extrabold dark:text-white justify-center" >¿Quiénes somos?</h2>
        <p class="my-4 text-lg text-gray-800 justify-center">Somos un grupo de <b>exalumnos del Colegio San Ignacio El Bosque</b>, comprometidos y motivados por el deseo de devolver lo que recibimos durante nuestros años escolares. Para ello, ofrecemos un servicio de <b>clases particulares</b> para aquellos compañeros que aún están en la institución.</p>
        <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"El siempre sintió que le iba a ser imposible entender matemáticas y lo veo contento sintiéndose capaz, gracias!"</p>
        </blockquote>
        <p class="mb-4 text-lg font-normal text-gray-800 dark:text-gray-400 justify-center">Nuestros profesores tienen un destacado historial en el Colegio y actualmente están estudiando en las mejores universidades del país. Mantenemos un fuerte vínculo con la comunidad ignaciana, ya sea brindando apoyo a nuestros hermanos menores o colaborando como asesores en proyectos formativos dentro del Colegio.</p>
        <p class="mb-4 text-lg font-normal text-gray-800 dark:text-gray-400 justify-center"><b>¿Las clases están limitadas solo a alumnos del Colegio San Ignacio? ¡Por supuesto que no!</b> Estamos abiertos a recibir solicitudes de cualquier estudiante interesado o interesada.</p>
        <p class="mb-4 text-lg font-normal text-gray-800 dark:text-gray-400 justify-center">¡<b>Te esperamos</b> con entusiasmo para compartir conocimientos y experiencias!</p>
    </div>
    <Equipo id="nosotros"/>
    <div className='m-10'><h2 class="text-4xl font-extrabold dark:text-white justify-center" id='ofrecemos'>Lo que ofrecemos</h2></div>
    <div className='flex flex-row flex-wrap justify-center items-center mb-10'>
    <div className='m-3'>
      <Precios
          precio="20.000"
          titulo="Clase única online"
          disponibilidad={true}
          unicoPago={true}
          materialCalidad={true}
          comunicacion={true}
          apoyoSemanal={false}
      />
      </div>
      <div className='m-3 '>
      <Precios
          precio="22.000"
          titulo="Clase única presencial"
          disponibilidad={true}
          unicoPago={true}
          materialCalidad={true}
          comunicacion={true}
          apoyoSemanal={false}
      />
      </div>
      <div className='m-3 '>
      <Precios
          precio="75.000"
          titulo="Clases presenciales (4 sesiones)"
          disponibilidad={true}
          unicoPago={false}
          materialCalidad={true}
          comunicacion={true}
          apoyoSemanal={true}
      />
      </div>
    </div>
    <div className='bg-gray-200 pt-3 pb-3 ' id='pide'>
    <div className='m-10'><h2 class="text-4xl font-extrabold dark:text-white justify-center"><a href='https://wa.me/56973927173' target="_blank">Pide tu clase</a></h2></div>
    <div className='flex flex-row flex-wrap justify-center items-center mb-10'>
      <div className='m-3'>
      <Contacto 
          titulo="Contáctanos"
          descripcion="Si tienes alguna duda o necesitas más información, no dudes en contactarnos. Estamos para ayudarte. Para pedir una clase podrías mandar un mensaje como este:"
          icono={faWhatsapp}
          nombre="Pedro Morales"
          hora="11:26"
          mensaje="Hola! Mi nombre es Pedro Morales, apoderado de Juan Morales. Mi hijo está en octavo básico y quiere una clase de matemáticas. Me gustaría una única clase presencial. Podrían mañana? Gracias."
        />
      </div>
      <div className='m-3'>
        <Contacto 
          titulo="Coordinemos"
          descripcion="Nos pondremos en contacto contigo para coordinar la clase a la brevedad. Resolveremos cualquier duda que puedas tener. ¡Estamos ansiosos por conocerte!"
          icono={faComments}
          nombre="Tomás Tapia"
          hora="11:27"
          mensaje="Hola Pedro! Claro que sí, dime la hora que más te acomode y coordinamos. Estamos motivados de colaborar contigo y apoyar a tu hijo en matemáticas. ¡Saludos!"
        />
      </div>
      <div className='m-3'>
        <Contacto 
          titulo="Feedback"
          descripcion="Después de la clase, te enviaremos un reporte detallado de lo que se realizó. Queremos que estés al tanto de todo lo que sucede en la clase de tu hijo/a. ¡Estamos para ayudarte!"
          icono={faCircleCheck}
          nombre="Tomás Tapia"
          hora="18:32"
          mensaje="Hola Pedro! Quiero informarte que la clase de hoy fue muy exitosa. Juan demostró un buen entendimiento de los conceptos enseñados. ¡Esperamos seguir con Juan!"
        />
      </div>
    </div>
    </div>
    </>
  );
}