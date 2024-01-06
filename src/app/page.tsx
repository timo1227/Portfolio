import PageBanner from '@/components/page-banner';
import PageSkills from '@/components/page-skills';
import SocialLinks from '@/components/social-links';

import AboutMe from '../components/aboutMe';
import Repo from '../components/repo';

const IndexPage = () => {
  return (
    <div className='container relative'>
      <PageBanner />
      <PageSkills />
      <AboutMe />
      <Repo />
      <SocialLinks />
    </div>
  );
};

export default IndexPage;
