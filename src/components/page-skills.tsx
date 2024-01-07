import { Icons } from './icons';

const PageSkills = () => {
  return (
    <div className='relative md:container'>
      <div className='flex flex-col items-center justify-around gap-5 md:flex-row'>
        <div className='flex justify-center gap-4'>
          <svg
            viewBox='0 0 100 1'
            className='relative -top-5 hidden w-16 md:block'
          >
            <line
              x1='0'
              y1='0'
              x2='100'
              y2='0'
              stroke='currentColor'
              strokeWidth='3.5'
            />
          </svg>
          <p className='text-left text-4xl leading-8 md:items-center md:text-3xl'>
            Some of the top{' '}
            <strong>
              Skills <br className='hidden lg:block' /> I have
            </strong>
          </p>
        </div>
        <div className='flex w-[50%] flex-col justify-around space-y-10 md:flex-row md:gap-5 md:space-y-0'>
          <Icons.nextJs className='h-7' />
          <Icons.tailwindText className='h-7 pr-10 md:pr-0' />
          <Icons.gitHubText className='h-9 pr-5 md:pr-0' />
        </div>
      </div>
    </div>
  );
};

export default PageSkills;
