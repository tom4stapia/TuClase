import Contacto from '../components/Contacto';
import Equipo from '../components/Equipo';
import Precios from '../components/Precios';
import Footer from '../components/Footer';
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
    <div className='m-10' id='somos'><h2 class="text-5xl font-extrabold tracking-tight text-gray-600 justify-center">¿Quienes somos?</h2></div>
    <Equipo id="nosotros"/>
    <div className='m-10' id='ofrecemos'><h2 class="text-5xl font-extrabold tracking-tight text-gray-600 justify-center">¿Qué ofrecemos?</h2></div>
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
    <div className='m-10'><h2 class="text-5xl font-extrabold tracking-tight text-gray-600 justify-center"><a href='https://wa.me/56973927173' target="_blank">Agenda tu clase</a></h2></div>
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
    <Footer/>
    </>
  );
}