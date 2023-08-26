import Image from 'next/image'

import HomeLanding from '../components/HomeLanding'
import Timetable from "../components/Timetable"
import Services from "../components/Services"
import About from "../components/About"
import Contact from "../components/Contact"


export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeLanding />
      <div>
        <Timetable />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </main>  
  )
}
