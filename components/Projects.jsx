'use client'
import React from 'react'

const projects = [
  {
    title: 'Stroke Training App',
    url: 'https://stroke-awareness-training.base44.app',
    desc: 'Interactive web app to educate about stroke recognition.',
    image: 'stroke-app'
  },

  {
    title: 'Stroke Awareness Training Video',
    url: 'https://tinyurl.com/JFStrokeTraining',
    desc: 'Awareness and training video created with Synthesia.',
    image: 'stroke-video'
  },
  {
    title: 'Med Tracker App',
    url: 'https://tinyurl.com/JFPortal',
    desc: 'Medication tracking and portal app.',
    image: 'med-tracker'
  }
]

export default function Projects() {
  return (
    <div className="projects-grid">
      {projects.map(p => (
        <figure key={p.url} className="project-card">
          <figcaption>
            <h4><a href={p.url} target="_blank" rel="noreferrer">{p.title}</a></h4>
            <p>{p.desc}</p>
          </figcaption>
          <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} in new tab`}>
            <img className={p.image === 'med-tracker' ? 'crop-half' : p.image === 'stroke-app' ? 'crop-top' : ''} src={`/screenshots/${p.image}.png`} alt={`${p.title} screenshot`} onError={(e)=>{ e.target.src=`/screenshots/${p.image}.svg` }} />
          </a>
        </figure>
      ))}
    </div>
  )
}
