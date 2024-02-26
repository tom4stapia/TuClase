const people = [
    {
      name: 'Tomás Tapia',
      role: 'Ingeniero Civil PUC / 4to año',
      imageUrl:
        'tomas.jpg',
    },
    {
        name: 'Pedro Corvalán',
        role: 'Psicología PUC / 4to año',
        imageUrl:
          'pedro.jpg',
      },
      {
        name: 'Pablo Bustos',
        role: 'Ingeniero Civil PUC / 4to año',
        imageUrl:
          'pablo.jpg',
      },
      {
        name: 'Tomás Florenzano',
        role: 'Derecho UCH / 4to año',
        imageUrl:
          'tomas2.jpg',
      },
  ]
  
  export default function Equipo() {
    return (
      <div className="bg-gray-200 py-24 sm:py-32" id="nosotros">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" >Nosotros</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Somos un grupo de <b>exalumnos del Colegio San Ignacio El Bosque</b>, estudiando en las <b>mejores universidades del país</b> y estamos ofreciendo un servicio de <b>clases particulares</b>.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">Encuentra al profesor que siempre estuviste buscando! No dudes en <a href='https://wa.me/56973927173' target="_blank" className="underline"><b>contactarnos</b></a> para resolver tus dudas.</p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  