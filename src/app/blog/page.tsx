import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 1,
    slug: 'una-llama-que-late',
    title: 'Una llama que late',
    excerpt: 'Reflexiones sobre la esperanza y la union del pueblo cubano en la busqueda de un futuro mejor.',
    date: '2025-01-15',
    author: 'Proyecto Patria',
    image: '/images/2020/07/bg-001-free-img.jpg',
  },
  {
    id: 2,
    slug: 'informe-crisis-cuba',
    title: 'Informe sobre la Crisis en Cuba: Economia, Derechos Humanos y Perspectivas',
    excerpt: 'Un analisis detallado de la situacion actual en Cuba, incluyendo aspectos economicos, sociales y de derechos humanos.',
    date: '2025-01-10',
    author: 'Proyecto Patria',
    image: '/images/2020/07/bg-02-free-img.jpg',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cuba-blue via-blue-800 to-cuba-red text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog
            </h1>
            <blockquote className="text-xl text-blue-100 italic">
              &quot;Hoy, en una patria donde el anhelo de expresarse a plenitud tropieza con muros de silencio, cada palabra escrita se convierte en semilla de esperanza.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="card group">
                <div className="aspect-video bg-gray-200 rounded-xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cuba-blue/20 to-cuba-red/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-400">PP</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cuba-blue transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cuba-blue font-semibold hover:underline"
                >
                  Leer mas <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>

          {/* Empty state if no posts */}
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Proximamente publicaremos mas contenido. !Mantente atento!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tienes algo que compartir?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Si tienes historias, analisis o reflexiones que quieras compartir con nuestra comunidad, contactanos.
            </p>
            <Link href="/contacto" className="btn-primary">
              Enviar contenido
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
