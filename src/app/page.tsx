import PageBanner from '@/components/page-banner';
import PageSkills from '@/components/page-skills';
import Projects from '@/components/projects';
import SocialLinks from '@/components/social-links';

const IndexPage = () => {
  return (
    <div className='container relative'>
      <PageBanner />
      <div className='space-y-16'>
        <PageSkills />
        <div
          id='about'
          className='relative flex flex-col justify-evenly gap-10 md:container md:flex-row '
        >
          <h1 className='font-Burtons text-4xl font-bold'>About Me</h1>
          <p className='text-xl leading-9 md:max-w-[66%]'>
            A dedicated <strong>Software Engineer</strong> from{' '}
            <strong>New Jersey</strong> and a recent{' '}
            <strong>Computer Science</strong> graduate from the{' '}
            <strong>New Jersey Institute of Technology</strong>. My journey in tech has been
            marked by a fervent drive to master various{' '}
            <strong>programming languages</strong> and{' '}
            <strong>development tools</strong>, enabling me to transform
            ideas into fully-realized{' '}
            <strong>software applications</strong>. With a penchant for{' '}
            <strong>problem-solving</strong> and{' '}
            <strong>innovation</strong>, my portfolio is a testament to the
            breadth of my skills and the depth of my commitment to pushing
            the envelope in <strong>software engineering</strong>.
          </p>
        </div>
        <Projects />
        <SocialLinks />
      </div>
    </div>
  );
};

export default IndexPage;
