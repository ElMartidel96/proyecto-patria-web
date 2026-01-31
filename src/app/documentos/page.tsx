import { FileText, Download, Shield, BookOpen } from 'lucide-react'

const documentCategories = [
  {
    title: 'Documentos Legales',
    icon: Shield,
    documents: [
      {
        name: 'Certificate of Incorporation',
        description: 'Certificado de incorporacion de Proyecto Patria',
        file: '/documents/CERTIFICATE-OF-INCORPORATION.pdf',
      },
      {
        name: 'Certificate of Incorporation IRS',
        description: 'Certificado de incorporacion ante el IRS',
        file: '/documents/CERTIFICATE-OF-INCORPORATION-IRS.pdf',
      },
      {
        name: 'EIN (Employer Identification Number)',
        description: 'Numero de identificacion del empleador',
        file: '/documents/EMPLOYER-IDENTIFICATION-NUMBER-1.pdf',
      },
      {
        name: 'Streamlined Application for Recognition of Exemption',
        description: 'Solicitud de exencion fiscal',
        file: '/documents/Streamlined-Application-for-Recognition-of-Exemption.pdf',
      },
    ],
  },
  {
    title: 'Estatutos y Reglamentos',
    icon: BookOpen,
    documents: [
      {
        name: 'Acta Constitutiva de Proyecto Patria',
        description: 'Documento fundacional de la organizacion',
        file: '/documents/1.-ACTA-CONSTITUTIVA-DE-PROYECTO-PATRIA.pdf',
      },
      {
        name: 'Estatutos (By-Laws)',
        description: 'Estatutos de la organizacion',
        file: '/documents/2.-ESTATUTOS-By-Law.pdf',
      },
      {
        name: 'Bylaws of Proyecto Patria (English)',
        description: 'Estatutos en ingles',
        file: '/documents/BYLAWS-OF-PROYECTO-PATRIA.pdf',
      },
      {
        name: 'Constitutive Act (English)',
        description: 'Acta constitutiva en ingles',
        file: '/documents/CONSTITUTIVE-ACT-OF-PROYECTO-PATRIA.pdf',
      },
    ],
  },
  {
    title: 'Politicas y Procedimientos',
    icon: FileText,
    documents: [
      {
        name: 'Politica de Privacidad y Buenas Practicas',
        description: 'Normas de privacidad y conducta',
        file: '/documents/POLITICA-DE-PRIVACIDAD-Y-BUENAS-PRACTICAS.pdf',
      },
      {
        name: 'Politica de Conflictos de Interes',
        description: 'Manejo de conflictos de interes',
        file: '/documents/POLITICA-DE-CONFLICTOS-DE-INTERES.pdf',
      },
      {
        name: 'Reglamento Interno del Comite de Auditoria',
        description: 'Procedimientos de auditoria interna',
        file: '/documents/REGLAMENTO-INTERNO-DEL-COMITE-DE-AUDITORIA-INTERNA-1.pdf',
      },
      {
        name: 'Manual de Procedimientos de Gestion Financiera',
        description: 'Procedimientos financieros',
        file: '/documents/MANUAL-DE-PROCEDIMIENTOS-DE-GESTION-Y-SUPERVISION-FINANCIERA.pdf',
      },
    ],
  },
  {
    title: 'Convenios y Acuerdos',
    icon: FileText,
    documents: [
      {
        name: 'Convenios de Financiamiento y Donaciones',
        description: 'Acuerdos de financiamiento',
        file: '/documents/CONVENIOS-DE-FINANCIAMIENTO-Y-DONACIONES-1.pdf',
      },
      {
        name: 'Financing and Donation Agreements (English)',
        description: 'Acuerdos de financiamiento en ingles',
        file: '/documents/FINANCING-AND-DONATION-AGREEMENTS-1.pdf',
      },
    ],
  },
]

export default function DocumentosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cuba-blue via-blue-800 to-cuba-red text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Documentos
            </h1>
            <p className="text-xl text-blue-100">
              Transparencia total. Aqui encontraras todos los documentos legales y organizacionales de Proyecto Patria.
            </p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {documentCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-cuba-blue/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-cuba-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {category.documents.map((doc) => (
                    <a
                      key={doc.name}
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card flex items-start gap-4 hover:border-cuba-blue border-2 border-transparent transition-colors"
                    >
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900 mb-1">{doc.name}</h3>
                        <p className="text-sm text-gray-500">{doc.description}</p>
                      </div>
                      <Download className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Compromiso con la Transparencia
            </h2>
            <p className="text-gray-600">
              Proyecto Patria opera bajo los mas altos estandares de transparencia y rendicion de cuentas. Todos nuestros documentos organizacionales estan disponibles para consulta publica. Si necesitas informacion adicional, no dudes en contactarnos.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
