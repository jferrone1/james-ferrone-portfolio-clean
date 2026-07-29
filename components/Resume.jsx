'use client'
import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function Resume() {
  const ref = useRef(null)

  const downloadPDF = async () => {
    if (!ref.current) return
    const el = ref.current
    const canvas = await html2canvas(el, { scale: 2 })
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = 210
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('James_Ferrone_Resume.pdf')
  }

  return (
    <section aria-label="Resume">
      <div className="actions">
        <button onClick={downloadPDF} aria-label="Download resume as PDF">Download PDF</button>
      </div>
      <article ref={ref} className="resume-card">
        <header>
          <h3>Professional Summary</h3>
        </header>
        <p>Senior Training & Development Leader with over 20 years of experience in pharmaceutical operations, medical devices, and corporate learning environments. Expert in designing and implementing GMP-compliant training strategies...</p>

        <h4>Experience</h4>
        <section aria-label="Head of GMP Learning and Development">
          <h5>Head of GMP Learning and Development — Solventum (Formerly 3M)</h5>
          <p>Sept 2016 - Present — Lead training strategy for 240 sitewide employees; designed 200+ interactive eLearning courses; led SAP LSO → SumTotal migration.</p>
        </section>

        <section aria-label="Technical Writer">
          <h5>Technical Writer — 3M (Volt Workforce)</h5>
          <p>June 2013 – Sept 2016 — Technical liaison, authored planning documentation, developed enterprise reporting tools.</p>
        </section>

        <section aria-label="Senior Document Technical Analyst">
          <h5>Senior Document Technical Analyst — Johnson & Johnson</h5>
          <p>Feb 2000 – Oct 2009 — Authoring and controlling critical planning documents; CAPAS SME; created global surveys and reporting.</p>
        </section>

        <h4>Skills & Tools</h4>
        <ul>
          <li>Articulate Storyline & Rise, SumTotal, SAP LSO, ENOVIA PLM</li>
          <li>SQL, Access, Audio/Visual Systems, Instructional Design</li>
        </ul>

        <h4>Certifications</h4>
        <ul>
          <li>Google AI Professional Certificate (2026)</li>
          <li>An Introduction to Learning Experience Design (LXD) — University of Michigan (2025)</li>
          <li>BSI Managing Systems Auditing (2017)</li>
        </ul>
      </article>
    </section>
  )
}
