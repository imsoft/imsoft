export interface Service {
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export interface ServicesProps {
  heading: string;
  description: string;
  services: readonly Service[];
}
