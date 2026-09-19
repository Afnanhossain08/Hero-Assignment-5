import { useCallback, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechGrid from './components/TechGrid.jsx'
import StackSidebar from './components/StackSidebar.jsx'
import ProjectsShowcase from './components/ProjectsShowcase.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import { useTechnologies } from './hooks/useTechnologies.js'

export default function App() 
{
  const { technologies, isLoading, error } = useTechnologies()
  const [stack, setStack] = useState([])
  
  const addedIds = useMemo(() => new Set(stack.map((tech) => tech.id)), [stack])
  const categoryCount = useMemo(
    () => new Set(technologies.map((tech) => tech.category)).size,
    [technologies],)

  const handleAdd = useCallback((technology) => 
    {
    if (addedIds.has(technology.id)) 
        {
      toast.warn(`${technology.name} is already in your stack.`)
      return
    }
    toast.success(`${technology.name} added to your stack.`)
    setStack((current) => {
      if (current.some((tech) => tech.id === technology.id)) return current
      return [...current, technology]
    })
  }, [addedIds])

  const handleRemove = useCallback((id) => 
    {
    const technology = stack.find((tech) => tech.id === id)
    if (technology) 
        {
      toast.info(`${technology.name} removed from your stack.`)
    }
    setStack((current) => current.filter((tech) => tech.id !== id))
  }, [stack])

  const handleRemoveAll = useCallback(() => 
    {
    if (stack.length > 0) 
        {
      toast.info('Your stack has been cleared.')
    }
    setStack([])
  }, [stack])

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-[var(--font-display)] text-3xl font-extrabold text-[var(--color-ink)]">
                Explore the <span className="text-[var(--color-accent)]">Technologies</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

            {isLoading ? (
              <Loader />
            ) : error ? (
              <p className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-600">
                Couldn't load the technology catalogue: {error}
              </p>
            ) : (
              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
                <TechGrid technologies={technologies} addedIds={addedIds} onAdd={handleAdd} />
                <StackSidebar stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
              </div>
            )}
          </div>
        </section>

        {!isLoading && !error && (
          <ProjectsShowcase technologies={technologies} addedIds={addedIds} onAdd={handleAdd} />
        )}

        <About technologyCount={technologies.length} categoryCount={categoryCount} />
      </main>
      <Footer />

      <ToastContainer
        position="bottom-right"
        theme="light"
        autoClose={2800}
        newestOnTop
        pauseOnHover
      />
    </div>
  )
}
