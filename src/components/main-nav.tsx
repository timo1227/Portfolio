import Link from 'next/link';
import { IoDownloadOutline } from 'react-icons/io5';

import { Button } from './ui/button';

const MainNav = () => {
  return (
    <div className='mx-auto hidden w-full max-w-screen-2xl items-center justify-evenly md:flex'>
      <p className='text-3xl font-bold'>Timothy Estrada</p>
      <ul className='flex gap-10 pr-20 text-2xl '>
        <li>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <Link href='#project'>Projects</Link>
        </li>
        <li>
          <Link href='mailto:the4@njit.edu'>Contact</Link>
        </li>
      </ul>
      <Button variant='ghost'>
        <Link
          className='text-2xl'
          href='https://storage.googleapis.com/my-personal-proj/TimothyEstrada.pdf'
          target='_blank'
        >
          Download CV
        </Link>
        <IoDownloadOutline className='ml-2 md:text-xl' />
      </Button>
    </div>
  );
};

export default MainNav;
