import "../styles/imagenes.css"
import '../styles/LandingPage.css';
import { faWhatsapp  } from "@fortawesome/free-brands-svg-icons";

const people = [
    {
      name: 'Tomás Tapia',
      career: 'Ingeniería Civil PUC / 4to año',
      item1: '- Ayudante Introducción a la Programación',
      item2: '- Ayudante Programación Avanzada',
      item3: '- Ayudante Tecnologías y Aplicaciones Web',
      imageUrl:
        'tomas.jpg',
    },
    {
      name: 'Pablo Bustos',
      career: 'Ingeniería Civil PUC / 4to año',
      item1: '- Ayudante Introducción a la Programación',
      item2: '- Ayudante Ingeniería de Software',
      item3: '',
      imageUrl:
        'pablo.jpg',
    },
    {
      name: 'Tomás Florenzano',
      career: 'Derecho UCH / 4to año',
      item1: '- Ayudante Introducción al Derecho',
      item2: '- Presidente Club de Debate y Litigación SIEB 2019-2020 ',
      item3: '- Fundador y Cooordinador de "Santiago Digno"',
      imageUrl:
        'tomas2.jpg',
    },
    {
      name: 'Pedro Corvalán',
      career: 'Psicología PUC / 4to año',
      item1: '',
      item2: '',
      item3: '',
      imageUrl:
        'pedro.jpg',
    },
  ]
  
  export default function Equipo() {
    return (
      <div className="bg-gray-200 pt-3 pb-3" id="nosotros">
        <div className='m-10' id='somos'><h2 className="text-5xl titulos font-extrabold tracking-tight text-gray-900 justify-center">¿Quiénes somos?</h2></div>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <p className="mt-6 text-lg leading-8 text-justify text-gray-600">
              Somos un grupo de <b>exalumnos del Colegio San Ignacio El Bosque</b>, estudiando en las mejores universidades del país y estamos ofreciendo un servicio de <b>clases particulares para estudiantes de 7° básico a 4° medio.</b>
            </p>
            <p className="mt-6 text-lg leading-8 text-justify text-gray-600">
            Tenemos <b>más de tres años de experiencia</b> en el área, impartiendo clases particulares a estudiantes y desempeñándonos como ayudantes en diversos ramos en la universidad.
            </p>
            <p className="mt-6 text-lg leading-8 text-justify text-gray-600">
               Dentro de las materias que abarcamos se encuentran: <b>Matemáticas, Física, Química, Biología, Lenguaje, Historia, entre otras. </b>
            </p>
            <p className="mt-6 text-lg leading-8 text-justify text-gray-600">Encuentra al profesor que siempre estuviste buscando para acompañar a tu hijo! No dudes en <a href='https://wa.me/56973927173' target="_blank" className="underline text-indigo-600"><b>contactarnos</b></a> para resolver tus dudas.</p>
          </div>
          <ul role="list" className="mt-14 imagenes grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-32 w-32 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-lg leading-8 tracking-tight text-gray-600"><b>{person.name}</b></h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.career}</p>
                    <p className="text-xs leading-5 text-indigo-600">{person.item1}</p>
                    <p className="text-xs leading-5 text-indigo-600">{person.item2}</p>
                    <p className="text-xs leading-5 text-indigo-600">{person.item3}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-10"></div>
      </div>
    )
  }
  