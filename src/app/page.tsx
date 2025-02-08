import BodyText from '@/components/texts/BodyText';
import DisplayText from '@/components/texts/DisplayText';
import HeadingText from '@/components/texts/HeadingText';

export default function Home() {
  return (
    <>
      <DisplayText variant="hero">J. Noah</DisplayText>
      <div style={{ transform: 'translateY(-10%)' }}>
        <DisplayText variant="hero" className="">
          Rodgers
        </DisplayText>
      </div>
      {/* <DisplayText variant="hero" className="">
        Rodgers
      </DisplayText> */}
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
        maiores. Quis aliquam praesentium et iure. Consequuntur rem ipsa commodi
        porro repudiandae sapiente magnam quae dolorum autem? Architecto, vel?
      </BodyText>
      <BodyText variant="base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        temporibus enim delectus, placeat quae ratione reiciendis recusandae
        cupiditate assumenda sequi vero facilis quas! Iste, fugiat expedita! Hic
        laboriosam qui laudantium. Ut sunt distinctio cum, minus optio placeat
        nulla architecto, eum vel fugiat voluptates tenetur laudantium omnis
        itaque praesentium voluptatem ea dolorum debitis corporis! Molestias
        dicta tempore quibusdam perferendis autem vel?
      </BodyText>
      <BodyText variant="lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        temporibus enim delectus, placeat quae ratione reiciendis recusandae
        cupiditate assumenda sequi vero facilis quas! Iste, fugiat expedita! Hic
        laboriosam qui laudantium. Ut sunt distinctio cum, minus optio placeat
        nulla architecto, eum vel fugiat voluptates tenetur laudantium omnis
        itaque praesentium voluptatem ea dolorum debitis corporis! Molestias
        dicta tempore quibusdam perferendis autem vel?
      </BodyText>
      <BodyText variant="xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        temporibus enim delectus, placeat quae ratione reiciendis recusandae
        cupiditate assumenda sequi vero facilis quas! Iste, fugiat expedita! Hic
        laboriosam qui laudantium. Ut sunt distinctio cum, minus optio placeat
        nulla architecto, eum vel fugiat voluptates tenetur laudantium omnis
        itaque praesentium voluptatem ea dolorum debitis corporis! Molestias
        dicta tempore quibusdam perferendis autem vel?
      </BodyText>
    </>
  );
}
