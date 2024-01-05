import Link from 'next/link';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

import { siteConfig } from '@/config/site';

const SocialLinks = () => {
  return (
    <>
      <Link
        href={siteConfig.links.github}
        target='_blank'
        rel='noreferrer'
        className='hidden md:block'
      >
        <FiGithub className='fixed bottom-5 left-4 z-10 text-4xl text-black' />
      </Link>
      <Link
        href='https://www.linkedin.com/in/tim-estrada'
        target='_blank'
        rel='noreferrer'
        className='hidden md:block'
      >
        <AiOutlineLinkedin className='fixed bottom-20 left-4 z-10 text-4xl text-black' />
      </Link>
    </>
  );
};

export default SocialLinks;
