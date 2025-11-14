import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, FileDown } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { useNavigate } from 'react-router-dom'

const easing = [0.16, 1, 0.3, 1]

const projects = [
  {
    slug: 'realtime-collab-suite',
    title: 'Realtime Collab Suite',
    cover: '/covers/collab.jpg',
    stack: ['Next.js', 'Socket.io', 'PostgreSQL', 'Docker'],
    summary: {
      problem: 'Teams struggle with context-switching across tools.',
      solution: 'Unified docs, chat, and whiteboard in one realtime workspace.',
      impact: 'Cut coordination overhead by 32% for pilot teams.'
    }
  },
  {
    slug: 'commerce-engine',
    title: 'Headless Commerce Engine',
    cover: '/covers/commerce.jpg',
    stack: ['Next.js', 'Node', 'Stripe', 'Supabase'],
    summary: {
      problem: 'Scaling DTC storefronts is complex and slow.',
      solution: 'Composable API-first engine with caching and webhooks.',
      impact: 'Improved page speed to 95+ and boosted CR by 14%.'
    }
  },
  {
    slug: 'insights-ops',
    title: 'InsightsOps Platform',
    cover: '/covers/insights.jpg',
    stack: ['React', 'Python', 'FastAPI', 'MongoDB'],
    summary: {
      problem: 'Siloed operational data blocks decisions.',
      solution: 'Streaming ingestion + opinionated dashboards.',
      impact: 'Reduced time-to-insight from days to minutes.'
    }
  }
]

export default function Home() {
  const navigate = useNavigate()

  const [active, setActive] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    const ids = ['home', 'about', 'experience', 'projects', 'services', 'stack', 'contact']
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-[#0b0b0f] text-white">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="font-semibold tracking-tight text-white/90 hover:text-white">iZakCode</button>
          <div className="hidden md:flex gap-6 text-sm">
            {[
              ['About','about'],['Experience','experience'],['Projects','projects'],['Services','services'],['Tech','stack'],['Contact','contact']
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`transition-colors ${active===id? 'text-white' : 'text-white/60 hover:text-white'}`}
              >{label}</button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Mail size={16}/> <span>Let’s talk</span>
            </a>
            <a href="/cv.pdf" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 transition-colors">
              <FileDown size={16}/> <span>CV</span>
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 pointer-events-none"/>
        </div>
        <div className="relative z-10 pt-28 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              <span className="block text-white">Designing scalable</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">full-stack architectures</span>
              <span className="block text-white">— one crafted experience at a time.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/80">
              I’m iZakCode — a full‑stack developer focused on robust architectures, clean engineering, and immersive UX.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a onClick={(e)=>{e.preventDefault();scrollTo('projects')}} href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition focus:outline-none">
                Explore My Work <ArrowRight size={18}/>
              </a>
              <details className="group">
                <summary className="list-none inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">More About Me</summary>
                <div className="mt-3 grid grid-cols-3 gap-2 bg-white/5 p-2 rounded-2xl backdrop-blur">
                  {[
                    ['About','about'],['Experience','experience'],['Education','about']
                  ].map(([label,id])=> (
                    <button key={id} onClick={()=>scrollTo(id)} className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-sm">{label}</button>
                  ))}
                </div>
              </details>
            </div>
            <div className="mt-10 flex items-center gap-4 text-white/70">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white"><Github/></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin/></a>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-500/30 to-red-500/30 border border-white/10" />
          <div>
            <p className="text-lg text-white/80">Engineer turned full‑stack developer with a bias for systems thinking. I craft scalable backends, clean APIs, and expressive frontends that move fast and feel great.</p>
            <a className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20" href="#">Read My Story</a>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent"/>
          {[
            { title: 'Full‑Stack Developer', org: 'Freelance', period: '2022 — Present', bullets: ['Architected SPA platforms', 'Shipped CI/CD pipelines', 'Led performance overhauls'] },
            { title: 'Engineering Club', org: 'Tech Society', period: '2020 — 2022', bullets: ['Built internal tools', 'Mentored juniors', 'Organized dev talks'] },
            { title: 'Certifications', org: 'Various', period: 'Ongoing', bullets: ['AWS fundamentals', 'Database design', 'Security basics'] },
          ].map((item, i) => (
            <div key={i} className="mb-8">
              <div className="text-sm text-white/50">{item.period}</div>
              <div className="text-xl font-semibold">{item.title} · <span className="text-white/70">{item.org}</span></div>
              <ul className="mt-2 text-white/80 list-disc ml-5 space-y-1">
                {item.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <a className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20" href="#stack" onClick={(e)=>{e.preventDefault();scrollTo('stack')}}>
          View My Skillset <ArrowRight size={16}/>
        </a>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p)=> (
            <article key={p.slug} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-lg">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">{s}</span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-white/80">{p.summary.problem}</p>
                <button onClick={()=>navigate(`/case/${p.slug}`)} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90">Read Case Study <ArrowRight size={16}/></button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="services" title="Services">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Web Applications', desc: 'Design and build fast, scalable, secure web apps end‑to‑end.' },
            { title: 'Full‑Stack Development', desc: 'APIs, databases, auth, CI/CD, and delightful UI in one stack.' },
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition">
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-white/80">{s.desc}</p>
              <a className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20" href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}}>
                Let’s Build Something <ArrowRight size={16}/>
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="stack" title="Tech Stack">
        <div className="grid sm:grid-cols-2 gap-6">
          <Card title="Core Tools" list={['TypeScript','React','Next.js','Node','Express','PostgreSQL','Docker']} />
          <Card title="Other Tools" list={['GitHub','Actions','VS Code','Linux','Postman','Drizzle ORM','Supabase']} />
        </div>
        <a className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20" href="#projects" onClick={(e)=>{e.preventDefault();scrollTo('projects')}}>
          View My Code Style <ArrowRight size={16}/>
        </a>
      </Section>

      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>

      <footer className="py-12 text-center text-white/50">© {new Date().getFullYear()} iZakCode</footer>
    </div>
  )
}

function Section({ id, title, children }){
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function Card({ title, list }){
  return (
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition">
      <div className="text-xl font-semibold">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {list.map((item) => (
          <span key={item} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80">{item}</span>
        ))}
      </div>
    </div>
  )
}

function ContactForm(){
  const [state, setState] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try{
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state, source: 'landing/contact' })
      })
      if(!res.ok) throw new Error('Failed')
      setStatus('success')
      setState({ name:'', email:'', message:'' })
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
      <input required placeholder="Name" value={state.name} onChange={(e)=>setState(s=>({...s, name:e.target.value}))} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" />
      <input required type="email" placeholder="Email" value={state.email} onChange={(e)=>setState(s=>({...s, email:e.target.value}))} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" />
      <textarea required placeholder="Message" value={state.message} onChange={(e)=>setState(s=>({...s, message:e.target.value}))} className="sm:col-span-2 min-h-[140px] bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" />
      <div className="sm:col-span-2 flex items-center gap-3">
        <button disabled={status==='loading'} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 disabled:opacity-60">
          {status==='loading' ? 'Sending…' : 'Send Message'}
        </button>
        {status==='success' && <span className="text-green-400">Thanks! I’ll reply soon.</span>}
        {status==='error' && <span className="text-red-400">Something went wrong. Try again.</span>}
      </div>
    </form>
  )
}
