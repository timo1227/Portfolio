import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';

const PageBanner = () => {
  return (
    <PageHeader>
      <div
        className={cn(
          'sm:flex-row sm:justify-normal',
          'flex flex-col flex-nowrap items-center justify-center'
        )}
      >
        <div className='relative mb-5 aspect-square h-full w-full max-w-[70%] sm:hidden'>
          <Image
            src='/Memoji-Wave.png'
            alt='Me'
            className='h-full'
            fill
            priority
          />
        </div>
        <div className='space-y-3'>
          <PageHeaderHeading>👋 I am Tim,</PageHeaderHeading>
          <PageHeaderDescription>
            Engineering <strong>precision</strong> into every line of code
            for <strong>software</strong> that makes a{' '}
            <strong>difference</strong>.
          </PageHeaderDescription>
        </div>
        <div className='relative hidden aspect-square h-full w-full max-w-[40%] sm:block'>
          <Image
            src='/Memoji-Wave.png'
            alt='Me'
            className='h-full'
            fill
            priority
          />
        </div>
      </div>
      <PageActions>
        <Link
          href='mailto:tim.estrada@techtim.dev'
          className={cn(
            buttonVariants({
              variant: 'outline',
            }),
            'p-5 text-lg',
            'md:p-7 md:text-xl'
          )}
        >
          Lets Talk
          <IoIosArrowRoundForward className='ml-2 h-7 w-7' />
        </Link>
      </PageActions>
    </PageHeader>
  );
};

export default PageBanner;
