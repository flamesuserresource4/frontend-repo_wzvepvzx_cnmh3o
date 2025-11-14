import { useParams, Link } from 'react-router-dom'

const data = {
  'realtime-collab-suite': {
    title: 'Realtime Collab Suite',
    overview: {
      problem: 'Teams juggle too many tools for synchronous work.',
      goals: 'Unify docs, chat, and whiteboard with realtime presence.',
      context: 'Built as a modular SPA with API-first backend.'
    },
    architecture: 'Client-side Next-like routing, websockets layer, CQRS services, and cache-first data fetching.',
    walkthrough: 'Core flows: create rooms, collaborative editing, mentions, presence cursors, and comment threads.',
    decisions: ['Socket namespace per room', 'Optimistic updates with reconciliation', 'Separated write/read models'],
    improvements: ['Latency reduction', 'Accessibility tuning', 'Observability dashboards'],
    results: 'Cut coordination overhead by 32% for pilot teams.',
    images: ['/covers/collab.jpg']
  },
  'commerce-engine': {
    title: 'Headless Commerce Engine',
    overview: {
      problem: 'Headless stacks get complex under scale.',
      goals: 'Composable services with fast page delivery.',
      context: 'SSR-ready SPA with edge caching.'
    },
    architecture: 'Gateway + services, Stripe webhooks, catalog indexing, and CDN caching.',
    walkthrough: 'Checkout flow, PDP caching strategy, and inventory sync.',
    decisions: ['Stripe webhook retry logic', 'Catalog denormalization', 'Queue-backed jobs'],
    improvements: ['95+ lighthouse', 'Bundle splitting', 'Preload hints'],
    results: 'Improved CR by 14%',
    images: ['/covers/commerce.jpg']
  },
  'insights-ops': {
    title: 'InsightsOps Platform',
    overview: {
      problem: 'Data silos slow decisions.',
      goals: 'Streaming ingestion and clear dashboards.',
      context: 'React SPA + Python services.'
    },
    architecture: 'Ingestion workers, OLAP store, API aggregation, and client charts.',
    walkthrough: 'Connect sources, define metrics, explore reports.',
    decisions: ['Windowed streams', 'Idempotent upserts', 'Typed contracts'],
    improvements: ['Time-to-insight cuts', 'Better retention', 'Data lineage'],
    results: 'From days to minutes for key reports.',
    images: ['/covers/insights.jpg']
  }
}

export default function CaseStudy(){
  const { slug } = useParams()
  const cs = data[slug]
  if(!cs) return <div className="min-h-screen bg-[#0b0b0f] text-white p-8">Not found.</div>

  return (
    <div className="bg-[#0b0b0f] text-white min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="text-white/70 hover:text-white">← Back to Projects</Link>
        <h1 className="mt-6 text-4xl font-bold">{cs.title}</h1>

        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <InfoCard title="Problem" text={cs.overview.problem}/>
          <InfoCard title="Goals" text={cs.overview.goals}/>
          <InfoCard title="Context" text={cs.overview.context}/>
        </div>

        <Section title="Architecture">{cs.architecture}</Section>
        <Section title="UI Walkthrough">{cs.walkthrough}</Section>
        <Section title="Key decisions">{cs.decisions.join(' • ')}</Section>
        <Section title="What was improved">{cs.improvements.join(' • ')}</Section>
        <Section title="Results & Impact">{cs.results}</Section>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {cs.images.map((src, i)=> (
            <div key={i} className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <img src={src} alt="screenshot" className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoCard({ title, text }){
  return (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-1 font-medium">{text}</div>
    </div>
  )
}

function Section({ title, children }){
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-white/80">{children}</p>
    </section>
  )
}
