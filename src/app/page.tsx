import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Shield, Users, BookOpen, Wifi, Target, FileText, ChevronRight, Phone, MapPin } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Organizacion Estrategica de Esfuerzos',
    description: 'Reune a personas que comparten la misma vision de cambio, creando equipos de trabajo y celulas de accion con objetivos claros. Esta coordinacion asegura que cada iniciativa, por pequena que sea, sume al logro del objetivo comun.',
    icon: Users,
    image: '/images/2020/07/bg-04-free-img.jpg',
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
    description: 'La plataforma cifra toda la comunicacion de extremo a extremo y protege la identidad de cada usuario, permitiendo la libre expresion sin temor a represalias. Todos ingresan mediante invitacion privada y alias, garantizando la confidencialidad.',
    icon: Shield,
    image: '/images/2020/07/bg-05-free-img.jpg',
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
    description: 'Plataforma de Accion con un Programa de Formacion que incluye la capacitacion continua de cada usuario para la batalla cultural a nivel de microcomunidad.',
    icon: BookOpen,
    image: '/images/2020/07/about-01-free-img.jpg',
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
    description: 'La plataforma mantiene su operatividad sin conexion a internet, pudiendo expandirse la red aun en modo resiliente, siendo enviada de dispositivo a dispositivo.',
    icon: Wifi,
    image: '/images/2020/07/bg-02-free-img.jpg',
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
    description: 'Los programas y agrupaciones existentes podran mantener su organizacion y jerarquias dentro de la plataforma con herramientas especializadas.',
    icon: Target,
    image: '/images/2020/07/about-02-free-img.jpg',
    items: [
      'Herramientas y widgets especializados',
      'Visibilidad de proyectos',
      'Capacitaciones especializadas',
      'Conexion con otras redes',
      'Proteccion y respaldo institucional',
    ],
  },
  {
    id: 6,
    title: 'Propuesta de Planeacion de Futuro',
    description: 'Planes y hojas de ruta concretas para la reconstruccion social, politica y economica de Cuba, con proyecciones a corto, mediano y largo plazo.',
    icon: FileText,
    image: '/images/2020/07/bg-001-free-img.jpg',
    items: [
      'Propuestas para transicion politica',
      'Canal seguro para compartir ideas',
      'Programas para colaboracion activa',
      'Rutas de desarrollo economico y social',
      'Consulta y participacion ciudadana',
    ],
  },
]

const stats = [
  { label: 'Organizaciones por la Causa', value: '+999', suffix: 'K' },
  { label: 'Cubanos en el Exilio', value: '+2', suffix: 'M' },
  { label: 'Usuarios Activos de Etecsa', value: '+7', suffix: 'M' },
  { label: 'Cubanos en la Isla', value: '+10', suffix: 'M' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full Screen Parallax */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/2020/07/bg-003-free-img.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cuba-blue/90 via-cuba-blue/70 to-cuba-red/80" />

        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cuba-red/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white fade-in-up">
              <p className="text-blue-200 font-semibold uppercase tracking-widest mb-4 fade-in-delay-1">
                Un Latido de Libertad!
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Cuba nos llama: un pueblo, un latido, una esperanza
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                El Grito Silencioso de un Pueblo... y la Respuesta de su Corazon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/colaboradores" className="btn-primary pulse-glow">
                  Suma tu voz
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Conoce mas
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-blue-100">
                <a href="tel:929-242-6868" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide opacity-70">Contacto</p>
                    <p className="font-semibold">929-242-6868</p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide opacity-70">Localizacion</p>
                    <p className="font-semibold">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass Card */}
            <div className="hidden lg:block">
              <div className="glass p-8 backdrop-blur-xl">
                <Image
                  src="/images/2020/07/signature-free-img.png"
                  alt="Firma"
                  width={200}
                  height={190}
                  className="mb-6 opacity-80"
                />
                <p className="text-white/90 text-lg italic leading-relaxed">
                  &quot;No es el milagro el que hace al creyente, sino el creyente el que hace milagros.&quot;
                </p>
                <p className="text-blue-200 mt-4 text-sm uppercase tracking-wide">Contribucion Anonima</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-2 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Mission Statement - Parallax */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: 'url(/images/2020/07/bg-06-free-img.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cuba-blue font-semibold uppercase tracking-widest mb-6">Suma tu voz</p>
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed font-light">
            <span className="font-semibold text-cuba-blue">&quot;No es el milagro el que hace al creyente, sino el creyente el que hace milagros.&quot;</span>
          </p>
          <p className="text-xl text-gray-600 mt-8 leading-relaxed">
            Somos la voz que nace del alma de un pueblo que se canso de callar verdades. Con la fe puesta en Dios y en el poder de la unidad y de las ideas, estamos convencidos de que en tu palabra esta la chispa capaz de encender toda luz.
          </p>
          <div className="mt-12">
            <Link href="/colaboradores" className="btn-outline">
              Todas las colaboraciones
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-cuba-blue font-semibold uppercase tracking-widest mb-4">Funciones</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestra Plataforma</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Una herramienta completa para la organizacion, capacitacion y accion coordinada.
            </p>
          </div>

          <div className="space-y-32">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cuba-blue to-cuba-red rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cuba-blue/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Funciones / 0{feature.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cuba-blue to-cuba-red rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Parallax */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: 'url(/images/2020/07/bg-07-free-img.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-cuba-blue/90 to-gray-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <p className="text-blue-300 font-semibold uppercase tracking-widest mb-4">Acerca de</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                !Unete Hoy y Participa en ese Cambio!
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">Proyecto Patria</strong> es una Organizacion no Gubernamental sin animo de lucro que centra sus esfuerzos en la creacion de una plataforma digital <strong className="text-white">encriptada y anonima</strong> que conecta a cubanos dentro y fuera de la isla.
              </p>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Nuestro objetivo es simple, pero ambicioso: <strong className="text-white">unificar esfuerzos</strong> en un solo punto de encuentro, capacitacion y accion, donde cada voz encuentre eco y proteccion.
              </p>
              <Link href="/about" className="btn-primary">
                Conoce mas sobre nosotros
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="glass-dark p-8">
                <p className="text-blue-300 font-semibold uppercase tracking-wide text-sm mb-3">Por que Colaborar?</p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Con esta plataforma, Proyecto Patria se convierte en la herramienta corazon de un movimiento que late al unisono: cada idea, cada donacion y cada voz se convierten en un pilar para la transformacion.
                </p>
              </div>
              <div className="glass-dark p-8">
                <p className="text-blue-300 font-semibold uppercase tracking-wide text-sm mb-3">!Bienvenido a Proyecto Patria!</p>
                <p className="text-white/90 text-lg leading-relaxed">
                  Unificar esfuerzos, proteger a quienes actuan y encaminar el cambio son nuestras tres fuerzas cardinales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Parallax */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: 'url(/images/2020/07/bg-08-free-img.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-cuba-blue/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-200 font-semibold uppercase tracking-widest mb-4">Que los Numeros Hablen</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Con Todos Juntos si se Puede</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto italic">
              &quot;Es la hora del recuento, y de la marcha unida, y hemos de andar en cuadro apretado, como la plata en las raices de los Andes.&quot;
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <p className="text-blue-200 font-semibold">- Jose Marti</p>
              <Image
                src="/images/2025/01/Marti-Firma-01.png"
                alt="Firma Jose Marti"
                width={150}
                height={100}
                className="opacity-70"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card glass">
                <div className="stat-number">
                  {stat.value}<span className="text-4xl">{stat.suffix}</span>
                </div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              backgroundImage: 'url(/images/2020/07/bg-001-free-img.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cuba-blue/95 to-cuba-red/90" />
            <div className="relative z-10 p-12 md:p-20 text-center text-white">
              <p className="text-blue-200 font-semibold uppercase tracking-widest mb-4">Contactanos</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Todo lo que aporte vale. Tienes algo que quieres decirnos?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Tu voz importa. Cada mensaje, cada idea, cada contribucion nos acerca mas a nuestro objetivo comun.
              </p>
              <Link href="/contacto" className="btn-primary bg-white text-cuba-blue hover:bg-gray-100 pulse-glow">
                Haz clic aqui
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
