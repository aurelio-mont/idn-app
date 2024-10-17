import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PostImage = {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type RootStackParam = {
  Home: undefined;
  Detail: PostImage;
};

export type PostImageNavigationProp = NativeStackNavigationProp<
  RootStackParam,
  "Detail" | "Home"
>;
