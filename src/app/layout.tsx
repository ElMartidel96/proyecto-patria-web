import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proyecto Patria - Cuba nos llama',
  description: 'Proyecto Patria es una organización sin fines de lucro dedicada a unificar esfuerzos para la libertad y el progreso de Cuba.',
  keywords: ['Cuba', 'libertad', 'democracia', 'proyecto patria', 'exilio cubano'],
  authors: [{ name: 'Proyecto Patria' }],
  openGraph: {
    title: 'Proyecto Patria - Cuba nos llama',
    description: 'Un pueblo, un latido, una esperanza',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
