import Link from 'next/link'
import { CheckCircle, Shield, Users, BookOpen, Wifi, Target } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Organizacion Estrategica de Esfuerzos',
    description: 'Reune a personas que comparten la misma vision de cambio, creando equipos de trabajo y celulas de accion con objetivos claros.',
    icon: Users,
    items: [
      'Coordinacion de celulas de accion',
      'Asignacion de roles y objetivos claros',
      'Sinergia entre voluntarios y equipos',
      'Evita la dispersion de iniciativas',
    ],
  },
  {
    id: 2,
    title: 'Anonimato y Seguridad Absoluta',
    description: 'La plataforma cifra toda la comunicacion de extremo a extremo y protege la identidad de cada usuario, permitiendo la libre expresion sin temor a represalias.',
    icon: Shield,
    items: [
      'Cifrado de extremo a extremo',
      'Registro solo por invitacion privada',
      'Alias y correos anonimos',
      'Prohibicion total de revelar identidades',
      'Foro seguro para testimonios y denuncias',
    ],
  },
  {
    id: 3,
    title: 'Modulos de Capacitacion y Accion',
    description: 'Plataforma de Accion con un Programa de Formacion que incluye la capacitacion continua de cada usuario para la batalla cultural.',
    icon: BookOpen,
    items: [
      'Formacion en derechos civiles',
      'Materiales para la batalla cultural',
      'Talleres virtuales en liderazgo',
      'Modulos de Accion estructurados',
      'Construccion de narrativas alternativas',
    ],
  },
  {
    id: 4,
    title: 'Modo Offline y Adaptabilidad',
    description: 'La plataforma mantiene su operatividad sin conexion a internet, pudiendo expandirse la red aun en modo resiliente.',
    icon: Wifi,
    items: [
      'Plataforma de codigo abierto',
      'Operatividad sin conexion',
      'Transferencia de dispositivo a dispositivo',
      'Sincronizacion automatica',
      'Expansion de la voz a largo plazo',
    ],
  },
  {
    id: 5,
    title: 'Herramienta para Lideres',
    description: 'Los programas y agrupaciones existentes podran mantener su organizacion y jerarquias dentro de la plataforma.',
    icon: Target,
    items: [
      'Herramientas y widgets especializados',
      'Visibilidad de proyectos',
      'Capacitaciones especializadas',
      'Conexion con otras redes',
      'Proteccion y respaldo institucional',
    ],
  },
]

const stats = [
  { label: 'Organizaciones por la Causa', value: '+999K' },
  { label: 'Cubanos en el Exilio', value: '+2M' },
  { label: 'Usuarios Activos de Etecsa', value: '+7M' },
  { label: 'Cubanos en la Isla', value: '+10M' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cuba-blue via-blue-800 to-cuba-red text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Cuba nos llama: un pueblo, un latido, una esperanza
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              El Grito Silencioso de un Pueblo... y la Respuesta de su Corazon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/colaboradores" className="btn-primary bg-white text-cuba-blue hover:bg-gray-100">
                Suma tu voz
              </Link>
              <Link href="/about" className="btn-secondary border-white text-white hover:bg-white/10">
                Conoce mas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h6 className="text-cuba-blue font-semibold uppercase tracking-wide mb-4">Suma tu voz</h6>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              &quot;No es el milagro el que hace al creyente, sino el creyente el que hace milagros.&quot; Somos la voz que nace del alma de un pueblo que se canso de callar verdades. Con la fe puesta en Dios y en el poder de la unidad y de las ideas, estamos convencidos de que en tu palabra esta la chispa capaz de encender toda luz.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h6 className="text-cuba-blue font-semibold uppercase tracking-wide mb-4">Funciones</h6>
            <h2 className="section-title mb-4">Nuestra Plataforma</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Una herramienta completa para la organizacion, capacitacion y accion coordinada.
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-cuba-blue/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-cuba-blue" />
                    </div>
                    <h6 className="text-sm font-semibold text-cuba-blue uppercase">Funciones / 0{feature.id}</h6>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-cuba-blue/5 to-cuba-red/5 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-cuba-blue/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-blue-400 font-semibold uppercase tracking-wide mb-4">Acerca de</h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                !Unete Hoy y Participa en ese Cambio!
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">Proyecto Patria</strong> es una Organizacion no Gubernamental sin animo de lucro que centra sus esfuerzos en la creacion de una plataforma digital <strong className="text-white">encriptada y anonima</strong> que conecta a cubanos dentro y fuera de la isla, facilitando la organizacion y la creacion de soluciones concretas para un futuro mejor.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nuestro objetivo es simple, pero ambicioso: <strong className="text-white">unificar esfuerzos</strong> en un solo punto de encuentro, capacitacion y accion, donde cada voz encuentre eco y proteccion, y cada paso hacia el cambio cuente con el respaldo de una comunidad solida.
              </p>
              <Link href="/about" className="btn-primary">
                Conoce mas sobre nosotros
              </Link>
            </div>
            <div className="bg-gradient-to-br from-cuba-blue to-cuba-red p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-2xl p-8">
                <h6 className="text-blue-400 font-semibold uppercase tracking-wide mb-2">Por que Colaborar?</h6>
                <p className="text-gray-300 leading-relaxed">
                  Con esta plataforma, Proyecto Patria se convierte en la herramienta corazon de un movimiento que late al unisono: cada idea, cada donacion y cada voz se convierten en un pilar para la transformacion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-cuba-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h6 className="text-blue-200 font-semibold uppercase tracking-wide mb-4">Que los Numeros Hablen</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Con Todos Juntos si se Puede</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              &quot;Es la hora del recuento, y de la marcha unida, y hemos de andar en cuadro apretado, como la plata en las raices de los Andes.&quot;
            </p>
            <p className="text-blue-200 mt-2">- Jose Marti</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cuba-blue to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <h6 className="text-blue-200 font-semibold uppercase tracking-wide mb-4">Contactanos</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Todo lo que aporte vale. Tienes algo que quieres decirnos?
            </h2>
            <Link href="/contacto" className="btn-primary bg-white text-cuba-blue hover:bg-gray-100">
              Haz clic aqui
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
