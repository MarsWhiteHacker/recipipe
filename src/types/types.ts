import { ImageSourcePropType } from 'react-native';

export type TextColor = 'main' | 'second' | 'third' | 'fourth';
export type TextFontFamily = 'main' | 'second';
export type HeaderSize = 'big' | 'medium' | 'small';
export type TitleSize = 'big' | 'medium' | 'small';
export type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

export type WelcomeInfo = {
  header: string;
  subheader: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageSourcePropType;
};
