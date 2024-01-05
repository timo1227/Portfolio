import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import SocialLinks from '@/components/social-links';

import Me from '../../public/Memoji.png';
import AboutMe from '../components/aboutMe';
import Repo from '../components/repo';

const Page = () => {
  return (
    <div className='container relative'>
      <PageHeader>
        <div className='flex flex-col flex-nowrap items-center gap-10 sm:flex-row sm:gap-0 md:gap-20'>
          <div className='space-y-3'>
            <PageHeaderHeading>👋 I am Tim,</PageHeaderHeading>
            <PageHeaderDescription>
              Engineering <strong>precision</strong> into every line of
              code for <strong>software</strong> that makes a{' '}
              <strong>difference</strong>.
            </PageHeaderDescription>
          </div>
          <Image src={Me} alt='Me' className='h-[25%]' />
        </div>
        <PageActions>
          <Link href='/docs' className={cn(buttonVariants())}>
            Lets Talk
          </Link>
        </PageActions>
      </PageHeader>
      <SocialLinks />
    </div>
  );
};

export default Page;
