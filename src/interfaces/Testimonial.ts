export interface Testimonial {
  quote: string;
  company: string;
  service: string;
  image: string;
}

export interface TestimonialsProps {
  heading: string;
  subheading: string;
  quote: string;
  company: string;
  service: string;
  image: string;
  columns: {
    firstColumn: readonly Testimonial[];
    secondColumn: readonly Testimonial[];
    thirdColumn: readonly Testimonial[];
    fourthColumn: readonly Testimonial[];
  };
}
