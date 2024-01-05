import { Bebas_Neue } from 'next/font/google';
import Link from 'next/link';
import { AiOutlineLinkedin } from 'react-icons/ai';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import { buttonVariants } from './ui/button';

const fontBebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });

const SiteHeader = () => {
  return (
    <header
      className={cn(
        'sticky z-50 flex w-full items-center px-1 py-5',
        'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        'justify-between',
        fontBebasNeue.className
      )}
    >
      <MobileNav />
      <MainNav />

      <nav className='flex items-center md:hidden'>
        <Link
          href='https://www.github.com/timo1227'
          target='_blank'
          rel='noreferrer'
        >
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            <Icons.gitHub className='h-4 w-4' />
            <span className='sr-only'>GitHub</span>
          </div>
        </Link>
        <Link
          href='https://www.linkedin.com/in/tim-estrada'
          target='_blank'
          rel='noreferrer'
        >
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            <AiOutlineLinkedin className='h-5 w-5 fill-current' />
            <span className='sr-only'>linkedin</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default SiteHeader;
