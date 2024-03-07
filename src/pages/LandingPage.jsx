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
    <div className='h-16' id='inicio'></div>
    {/* <div class="w-500 h-300 bg-cover bg-center text-white" style="background-image: url('ruta/de/tu/imagen.webp');"></div> */}
    <div class="flex flex-col justify-center items-center parallax-image">
      {/* <img src="logo.png" alt="Logo" class="w-32 h-32 mb-4"/> */}
      {/* <h1 class="text-6xl mt-20 font-bold bg-white p-2 bg-opacity-50 text-indigo-600 m-10 text-center">Encuentra a tu profesor ideal</h1> */}
      <p class="text-5xl text-indigo-600 font-bold bg-white mt-20 p-3 m-10 bg-opacity-65 text-center">¿Estás buscando una clase particular para tu hijo?</p>
      <a href='https://wa.me/56973927173' target="_blank"><button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-8 mb-20">Agenda tu clase con nosotros</button></a>
    </div>
    <Equipo id="nosotros"/>
    <div className='pb-3'>
    <div className='m-10 pt-3' id='ofrecemos'><h2  class="text-5xl titulos font-extrabold tracking-tight text-gray-900 justify-center">¿Qué ofrecemos?</h2></div>
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
          precio="78.000"
          titulo="Clases presenciales (4 sesiones)"
          disponibilidad={true}
          unicoPago={false}
          materialCalidad={true}
          comunicacion={true}
          apoyoSemanal={true}
      />
      </div>
    </div>
    </div>
    <div className='bg-gray-200 pt-3 pb-3 ' id='pide'>
    <div className='m-10'><h2 className="text-5xl titulos font-extrabold tracking-tight text-gray-900 justify-center"><a href='https://wa.me/56973927173' target="_blank">Agenda tu clase</a></h2></div>
    <div className='flex flex-row flex-wrap justify-center items-strech mb-10 '>
      <div className='m-3'>
      <Contacto 
          titulo="Contáctanos"
          descripcion="No dudes en ponerte en contacto con nosotros, estamos aquí para ayudarte. Mándanos un mensaje por WhatsApp y te responderemos a la brevedad."
          icono={faWhatsapp}
          nombre="Pedro Morales"
          hora="11:26"
          mensaje="Hola! Mi nombre es Pedro Morales, apoderado de Juan Morales. Mi hijo está en octavo básico y quiere una clase de matemáticas. Me gustaría una única clase presencial. Podrían mañana? Gracias."
        />
      </div>
      <div className='m-3'>
        <Contacto 
            titulo="Coordinemos"
            descripcion="Una vez que nos contactes, nos encargaremos de coordinar tu clase lo más rápido posible. Además, estamos aquí para aclarar cualquier pregunta que tengas."
            icono={faComments}
            nombre="Tomás Tapia"
            hora="11:27"
            mensaje={<>Hola Pedro! Claro que sí, dime la hora que más te acomode y coordinamos. Estamos motivados de colaborar contigo y apoyar a tu hijo en matemáticas.<br/> ¡Saludos!</>}
          />
      </div>
      <div className='m-3'>
        <Contacto 
          titulo="Feedback"
          descripcion="Después de la clase, te enviaremos un reporte detallado de lo que se realizó. Queremos que estés al tanto de todo lo que sucede en la clase de tu hijo/a. ¡Estamos para ayudarte!"
          icono={faCircleCheck}
          nombre="Tomás Tapia"
          hora="18:32"
          mensaje={<>Hola Pedro! Quiero informarte que la clase de hoy fue muy exitosa. Juan demostró un buen entendimiento de los conceptos enseñados. <br/>¡Esperamos seguir con Juan! </>}
        />
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}