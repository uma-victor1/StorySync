interface brandProps {
  img: string;
  name: string;
  ele?: JSX.Element;
}

interface cardProps {
  title: string;
  img: string;
  bulletPoints: string[];
  index: number;
}

interface testimonialProps {
  img: string;
  name: string;
  designation: string;
  review: string;
}

interface TimelineProps {
  date: string;
  title: string;
  desc: string;
}

interface AboutNumProps {
  number: string;
  title: string;
}

interface ourMissionProps {
  title: string;
  desc: string;
  img: string;
  cta: string;
}

interface TeamMemberCardProps {
  img: string;
  name: string;
  designation: string;
  socialLinks: {
    icon: JSX.Element;
    link: string;
  }[];
}

interface blogsCategoriesProps {
  title: string;
}               

interface BlogListProps {
  tag: string;
  title: string;
  date: string;
  author_name: string;
  author_img: string;
  desc: string;
}

// interface for selling cards on caREER PAGE

interface SellingCardProps {
  img: string;
  title: string;
  desc: string;
}

// career page team testimonial
interface TeamTestimonialProps {
  img: string;
  name: string;
  designation: string;
  review: string;
}