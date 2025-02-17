import Image from 'next/image';
import ExperienceCard from '@/components/ExperienceCard';
import SectionHeader from '@/components/SectionHeader';
import BodyText from '@/components/texts/BodyText';
import DisplayText from '@/components/texts/DisplayText';
import HeadingText from '@/components/texts/HeadingText';
import HeroText from '@/components/texts/HeroText';
import LinkText from '@/components/texts/LinkText';
import { images } from '@/constants';
import InfoNumber from '@/components/texts/InfoNumber';
import SkillCard from '@/components/SkillCard';

export default function Home() {
  return (
    <>
      <HeroText variant="intro">Crafting Digital Goods Since — Y.2023</HeroText>
      <div className="relative">
        <DisplayText variant="hero">J. Noah</DisplayText>
        <div style={{ transform: 'translateY(-10%)' }}>
          <DisplayText variant="hero" className="">
            Rodgers
          </DisplayText>
        </div>
        <Image
          src={images.headshot}
          alt="Profile Picture"
          className="absolute rounded-full w-[84] lg:w-[180] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <HeroText variant="about">
        I'm Noah Rodgers — a full-stack software engineer passionately creating
        new software solutions and leading technical teams for 3+ years
      </HeroText>
      <section className="flex flex-col">
        <HeadingText variant="h1-blog">Software Engineer</HeadingText>
        <HeadingText variant="h2">Software Engineer</HeadingText>
        <HeadingText variant="h3">Software Engineer</HeadingText>
        <HeadingText variant="h4">Software Engineer</HeadingText>
        <HeadingText variant="h5">Software Engineer</HeadingText>
        <HeadingText variant="h6">Software Engineer</HeadingText>
        <BodyText variant="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur
          nemo odio quae, velit voluptates aspernatur doloremque deserunt aut
          numquam magnam! Numquam, culpa molestiae ullam veniam amet molestias
          reiciendis eos? Et minus esse saepe aut quas ea ipsa at error. Eos,
          maiores. Quis aliquam praesentium et iure. Consequuntur rem ipsa
          commodi porro repudiandae sapiente magnam quae dolorum autem?
          Architecto, vel?
        </BodyText>
        <BodyText variant="base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          temporibus enim delectus, placeat quae ratione reiciendis recusandae
          cupiditate assumenda sequi vero facilis quas! Iste, fugiat expedita!
          Hic laboriosam qui laudantium. Ut sunt distinctio cum, minus optio
          placeat nulla architecto, eum vel fugiat voluptates tenetur laudantium
          omnis itaque praesentium voluptatem ea dolorum debitis corporis!
          Molestias dicta tempore quibusdam perferendis autem vel?
        </BodyText>
        <BodyText variant="lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          temporibus enim delectus, placeat quae ratione reiciendis recusandae
          cupiditate assumenda sequi vero facilis quas! Iste, fugiat expedita!
          Hic laboriosam qui laudantium. Ut sunt distinctio cum, minus optio
          placeat nulla architecto, eum vel fugiat voluptates tenetur laudantium
          omnis itaque praesentium voluptatem ea dolorum debitis corporis!
          Molestias dicta tempore quibusdam perferendis autem vel?
        </BodyText>
        <BodyText variant="xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          temporibus enim delectus, placeat quae ratione reiciendis recusandae
          cupiditate assumenda sequi vero facilis quas! Iste, fugiat expedita!
          Hic laboriosam qui laudantium. Ut sunt distinctio cum, minus optio
          placeat nulla architecto, eum vel fugiat voluptates tenetur laudantium
          omnis itaque praesentium voluptatem ea dolorum debitis corporis!
          Molestias dicta tempore quibusdam perferendis autem vel?
        </BodyText>
        <LinkText to="/about">About</LinkText>
        <SectionHeader title="Projects" to="/projects" />
        <SectionHeader title="Experience" to="/Experience" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-x-20 md:gap-y-0 gap-8">
          <ExperienceCard
            title="Senior Software Engineer, Mobile & Backend"
            company="Binit"
            duration="Jun 2024 - Present"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolor cum fugiat. Laudantium necessitatibus ex facilis natus nemo consectetur omnis porro totam dicta, voluptatem quasi quaerat neque velit aperiam provident.
          Consectetur itaque tempora voluptatibus inventore animi suscipit iste, nulla nobis optio harum hic quasi dolorem architecto neque nesciunt delectus laborum eaque dolor voluptatem dolore. Omnis placeat facere animi praesentium! Assumenda."
          />
          <ExperienceCard
            title="Technical Project Manager"
            company="Pine Cove"
            duration="Aug 2024 - Present"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolor cum fugiat. Laudantium necessitatibus ex facilis natus nemo consectetur omnis porro totam dicta, voluptatem quasi quaerat neque velit aperiam provident.
          Consectetur itaque tempora voluptatibus inventore animi suscipit iste, nulla nobis optio harum hic quasi dolorem architecto neque nesciunt delectus laborum eaque dolor voluptatem dolore. Omnis placeat facere animi praesentium! Assumenda."
          />
          <ExperienceCard
            title="Full-Stack Developer"
            company="Innoiso"
            duration="Jan 2023 - Present"
            last
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolor cum fugiat. Laudantium necessitatibus ex facilis natus nemo consectetur omnis porro totam dicta, voluptatem quasi quaerat neque velit aperiam provident.
          Consectetur itaque tempora voluptatibus inventore animi suscipit iste, nulla nobis optio harum hic quasi dolorem architecto neque nesciunt delectus laborum eaque dolor voluptatem dolore. Omnis placeat facere animi praesentium! Assumenda."
          />
          <ExperienceCard
            title="IT Intern"
            company="Pine Cove"
            duration="May 2023 - Dec 2023"
            last
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolor cum fugiat. Laudantium necessitatibus ex facilis natus nemo consectetur omnis porro totam dicta, voluptatem quasi quaerat neque velit aperiam provident.
          Consectetur itaque tempora voluptatibus i"
          />
        </div>
        <SectionHeader title="Skills" to="/skills" />
        <InfoNumber>93%</InfoNumber>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex-1 ">
            <BodyText variant="lg">
              My passion lies in the intersection of art and technology,
              creating visually captivating interfaces and elevating overall
              user digital experiences.
            </BodyText>
          </div>
          <div className="flex-1">
            <BodyText variant="base" noMargin className="mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              porro aut aspernatur iste pariatur. Debitis rem tempore, impedit
              ex, obcaecati, voluptate in deserunt incidunt esse atque voluptas
              autem harum accusamus? Quia, ullam ab. Pariatur eaque natus, amet
              exercitationem aut aperiam omnis, fugit non autem minima ducimus
              ex cumque sed explicabo accusamus eos ipsa, illo deserunt beatae
              animi quibusdam incidunt corporis! Nihil incidunt quo quis ut
              necessitatibus obcaecati ipsa, veritatis velit beatae quae.
              Dolorum quia hic fugiat corrupti, ab nesciunt culpa nulla?
              Exercitationem excepturi error neque. Facilis, ducimus. Optio,
              blanditiis possimus.
            </BodyText>
            <SkillCard
              skill="React"
              level="93%"
              description="Frontend JavaScript framework"
              className="mb-8"
            />
            <SkillCard
              skill="React"
              level="93%"
              description="Frontend JavaScript framework"
              className="mb-8"
            />
            <SkillCard
              skill="React"
              level="93%"
              description="Frontend JavaScript framework"
              className="mb-8"
            />
          </div>
        </div>
        <div className="mb-20" />
      </section>
    </>
  );
}
