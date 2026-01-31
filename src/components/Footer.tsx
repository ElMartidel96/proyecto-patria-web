import Link from 'next/link'
import { Phone, MapPin, Mail } from 'lucide-react'

const footerLinks = {
  principal: [
    { name: 'Inicio', href: '/' },
    { name: 'Acerca de', href: '/about' },
    { name: 'Colaboradores', href: '/colaboradores' },
    { name: 'Blog', href: '/blog' },
  ],
  recursos: [
    { name: 'Documentos', href: '/documentos' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Politica de Privacidad', href: '/privacidad' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-cuba rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">PP</span>
              </div>
              <span className="text-xl font-bold">Proyecto Patria</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Proyecto Patria es una Organizacion no Gubernamental sin animo de lucro que centra sus esfuerzos en la creacion de una plataforma digital encriptada y anonima que conecta a cubanos dentro y fuera de la isla.
            </p>
            <div className="space-y-2 text-gray-400">
              <a href="tel:929-242-6868" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>929-242-6868</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>125 Fifth Avenue, New York, NY 10160</span>
              </div>
              <a href="mailto:info@proyectopenpatria.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@proyectopenpatria.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              {footerLinks.principal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Proyecto Patria. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm italic">
              &quot;Es la hora del recuento, y de la marcha unida.&quot; - Jose Marti
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
