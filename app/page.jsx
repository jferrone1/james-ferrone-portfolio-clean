import Resume from '../components/Resume'
import Projects from '../components/Projects'

export default function Page() {
  return (
    <>
      <section id="about">
        <h2>About</h2>
        <p>Senior Training & Development leader with 20+ years of experience in pharmaceutical operations, medical devices, and corporate learning environments.</p>
      </section>

      <section id="experience">
        <h2>Experience & Skills</h2>
        <Resume />
      </section>

      <section id="projects">
        <h2>Featured Work</h2>
        <Projects />
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Flemington, NJ · 908-319-2930 · <a href="mailto:Jferrone1@gmail.com">Jferrone1@gmail.com</a></p>
        <p style={{fontSize:'0.9rem',marginTop:'12px'}}>© {new Date().getFullYear()} James Ferrone</p>
      </section>
    </>
  )
}
