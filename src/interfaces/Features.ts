export interface Differentiator {
  title: string;
  description: string;
}

export interface FeaturesProps {
  heading: string;
  subheading: string;
  description: string;
  differentiators: readonly Differentiator[];
}
