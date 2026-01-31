import Link from 'next/link'
import { Target, Shield, Users, Heart, Globe, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Proteccion total de la identidad y comunicaciones de nuestros miembros.',
  },
  {
    icon: Users,
    title: 'Union',
    description: 'Conectamos a cubanos dentro y fuera de la isla en un mismo proposito.',
  },
  {
    icon: Heart,
    title: 'Compasion',
    description: 'Cada accion nace del amor por Cuba y por nuestro pueblo.',
  },
  {
    icon: Globe,
    title: 'Transparencia',
    description: 'Operamos con total claridad en nuestros objetivos y metodos.',
  },
  {
    icon: Lightbulb,
    title: 'Innovacion',
    description: 'Usamos tecnologia de punta para proteger y empoderar.',
  },
  {
    icon: Target,
    title: 'Accion',
    description: 'Convertimos ideas en acciones concretas para el cambio.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cuba-blue via-blue-800 to-cuba-red text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Acerca de Proyecto Patria
            </h1>
            <p className="text-xl text-blue-100">
              Un mismo latido, un solo compromiso: hacer de Cuba una nacion libre, prospera y unida.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-cuba-blue font-semibold uppercase tracking-wide mb-4">Nuestra Mision</h6>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unificando Esfuerzos por la Libertad de Cuba
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">Proyecto Patria</strong> es una Organizacion no Gubernamental sin animo de lucro que centra sus esfuerzos en la creacion de una plataforma digital <strong className="text-gray-900">encriptada y anonima</strong> que conecta a cubanos dentro y fuera de la isla.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Facilitamos la organizacion y la creacion de soluciones concretas para un futuro mejor. Nuestro objetivo es simple, pero ambicioso: <strong className="text-gray-900">unificar esfuerzos</strong> en un solo punto de encuentro, capacitacion y accion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Donde cada voz encuentre eco y proteccion, y cada paso hacia el cambio cuente con el respaldo de una comunidad solida.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cuba-blue/10 to-cuba-red/10 rounded-2xl p-8">
              <blockquote className="text-xl text-gray-700 italic mb-4">
                &quot;Caminante, son tus huellas el camino y nada mas. Caminante, no hay camino, se hace camino al andar.&quot;
              </blockquote>
              <p className="text-gray-500">- Antonio Machado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h6 className="text-cuba-blue font-semibold uppercase tracking-wide mb-4">Nuestros Valores</h6>
            <h2 className="section-title">Lo que nos Define</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card">
                <div className="w-12 h-12 bg-cuba-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-cuba-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h6 className="text-cuba-blue font-semibold uppercase tracking-wide mb-4">Nuestra Vision</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Un Futuro de Libertad y Prosperidad
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Visualizamos una Cuba donde cada ciudadano pueda expresarse libremente, donde las ideas fluyan sin censura, y donde la union del pueblo sea la fuerza que impulse el cambio hacia una nacion democratica, justa y prospera.
            </p>
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <p className="text-xl italic mb-4">
                &quot;Es la hora del recuento, y de la marcha unida, y hemos de andar en cuadro apretado, como la plata en las raices de los Andes.&quot;
              </p>
              <p className="text-blue-300">- Jose Marti</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cuba-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            !Bienvenido a Proyecto Patria!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Unificar esfuerzos, proteger a quienes actuan y encaminar el cambio son nuestras tres fuerzas cardinales. Con tu participacion, sumaremos vida a esta esperanza colectiva.
          </p>
          <Link href="/colaboradores" className="btn-primary bg-white text-cuba-blue hover:bg-gray-100">
            Unete Hoy
          </Link>
        </div>
      </section>
    </>
  )
}
