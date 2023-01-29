import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import Me from '../../public/Memoji.png'
import AboutMe from './aboutMe'
import Repo from './repo'
import '@coreui/coreui/dist/css/coreui.min.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <nav className='bg-gray-200 flex justify-between items-center h-nav fixed w-full z-50 pl-10 text-indigo-600'>
        <h1 className="text-xl font-bold font-Burtons">Timothy Estrada</h1>
        <ul className="flex gap-10 pr-20">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section className="bg-white h-1/2 bg-[url('../../public/Background.jpg')] bg-cover bg-center pt-20 fixed w-full banner">
        <div className="flex flex-col justify-center items-center ">
          <div className="w-80 h-80 rounded-full overflow-hidden mb-10 logo">
            <Image src={Me} alt='Me' className="relative img-logo" style={{ objectFit: "cover" }} />
          </div>
          <h2 className="text-6xl font-bold font-Burtons">Timothy Estrada</h2>
          <h3 className="text-2xl font-light font-Burtons">Software Engineer that loves a good challenge</h3>
        </div>
      </section>
      <section className="absolute w-full z-10 h-screen top-1/2 flex flex-col items-center bg-gray-100">
        <section >
          <AboutMe />
          <a href="https://www.github.com/timo1227" target="_blank" rel='noreferrer'>
            <FiGithub className="text-4xl text-indigo-600 fixed left-4 bottom-10" />
          </a>
        </section>
        <section className='w-full bg-white'>
          <Repo />
        </section>
      </section>
    </main>
  )
}
