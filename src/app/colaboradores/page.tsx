import Link from 'next/link'
import { Heart, Users, Megaphone, Code, PenTool, Globe } from 'lucide-react'

const waysToHelp = [
  {
    icon: Heart,
    title: 'Donaciones',
    description: 'Tu apoyo economico nos permite continuar desarrollando la plataforma y expandiendo nuestro alcance.',
    action: 'Donar ahora',
    href: '#donate',
  },
  {
    icon: Megaphone,
    title: 'Difusion',
    description: 'Comparte nuestro mensaje en tus redes sociales y con tu comunidad para que mas personas se unan.',
    action: 'Compartir',
    href: '#share',
  },
  {
    icon: Users,
    title: 'Voluntariado',
    description: 'Unete a nuestro equipo de voluntarios y participa activamente en nuestras iniciativas.',
    action: 'Ser voluntario',
    href: '#volunteer',
  },
  {
    icon: Code,
    title: 'Desarrollo',
    description: 'Si tienes habilidades tecnicas, ayudanos a mejorar y mantener nuestra plataforma segura.',
    action: 'Contribuir',
    href: '#develop',
  },
  {
    icon: PenTool,
    title: 'Contenido',
    description: 'Crea contenido educativo, articulos, videos o materiales para la batalla cultural.',
    action: 'Crear contenido',
    href: '#content',
  },
  {
    icon: Globe,
    title: 'Embajadores',
    description: 'Representa a Proyecto Patria en tu comunidad y ayuda a establecer conexiones.',
    action: 'Ser embajador',
    href: '#ambassador',
  },
]

export default function ColaboradoresPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cuba-blue via-blue-800 to-cuba-red text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Colaboradores
            </h1>
            <p className="text-xl text-blue-100">
              Cada contribucion, por pequena que sea, suma a nuestra causa. Tu apoyo hace la diferencia.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h6 className="text-cuba-blue font-semibold uppercase tracking-wide mb-4">Respeto y Compasion</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Formas de Colaborar
            </h2>
            <p className="text-xl text-gray-600">
              No importa donde estes o cuales sean tus habilidades. Hay muchas formas de contribuir a la causa de la libertad de Cuba.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waysToHelp.map((way) => (
              <div key={way.title} className="card flex flex-col">
                <div className="w-12 h-12 bg-cuba-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <way.icon className="w-6 h-6 text-cuba-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{way.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{way.description}</p>
                <Link href={way.href} className="text-cuba-blue font-semibold hover:underline">
                  {way.action} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cuba-blue to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl italic mb-6">
                &quot;Cada pisada susurra un anhelo sin nombre, tejiendo senderos invisibles que nacen de tu determinacion: Caminante, son tus huellas el camino y nada mas.&quot;
              </p>
              <p className="text-xl md:text-2xl italic mb-6">
                &quot;El horizonte no esta escrito; emerge en la danza de tu coraje, forjandose con cada latido de fe: Caminante, no hay camino, se hace camino al andar.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h6 className="text-cuba-blue font-semibold uppercase tracking-wide mb-4">Contribucion Anonima</h6>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Apoya Nuestra Causa
              </h2>
              <p className="text-xl text-gray-600">
                Tu donacion es completamente anonima y segura. Cada aporte nos acerca mas a nuestro objetivo.
              </p>
            </div>

            <div className="card">
              <div className="text-center py-8">
                <p className="text-gray-600 mb-6">
                  Para realizar una donacion, por favor contactanos a traves de nuestros canales seguros.
                </p>
                <Link href="/contacto" className="btn-primary">
                  Contactar para Donar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cuba-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Con tu Participacion Sumamos Vida a esta Esperanza
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Con esta plataforma, Proyecto Patria se convierte en la herramienta corazon de un movimiento que late al unisono: cada idea, cada donacion y cada voz se convierten en un pilar para la transformacion.
          </p>
          <Link href="/contacto" className="btn-primary bg-white text-cuba-blue hover:bg-gray-100">
            Unete Hoy
          </Link>
        </div>
      </section>
    </>
  )
}
