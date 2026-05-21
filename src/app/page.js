import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  )
}