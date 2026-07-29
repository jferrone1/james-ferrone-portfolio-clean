'use client'
import React from 'react'

const projects = [
  {
    title: 'Stroke Training App',
    url: 'https://stop-stroke-fast.base44.app/',
    desc: 'Interactive web app to educate about stroke recognition and response.'
  },
  {
    title: 'Stroke Awareness Training Video',
    url: 'https://tinyurl.com/JFStrokeTraining',
    desc: 'Awareness and training video created with Synthesia.'
  },
  {
    title: 'Med Tracker App',
    url: 'https://tinyurl.com/JFPortal',
    desc: 'Medication tracking and portal app.'
  }
]

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map(p => (
        <figure key={p.url} className="project-card">
          <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} in new tab`}>
            <img src={`/screenshots/${p.title.toLowerCase().replace(/\s+/g,'-')}.png`} alt={`${p.title} screenshot`} onError={(e)=>{ e.target.src='/screenshots/'+p.title.toLowerCase().replace(/\s+/g,'-')+'.svg' }} />
          </a>
          <figcaption>
            <h4><a href={p.url} target="_blank" rel="noreferrer">{p.title}</a></h4>
            <p>{p.desc}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
