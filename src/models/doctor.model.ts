import { StaticImageData } from 'next/image';
export type Comments = {
  user: string;
  image: StaticImageData;
  comment: string;
  date: string;
  visited: boolean;
  answer: string
}

export type DoctorModel = {
  id: string;
  name: string;
  image: string;
  isVerified: boolean;
  averageRating: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  brief: string;
  badges: string[];
  gender: string;
  degree: string;
  expertise: string;
  city: string;
  code: number;
  experience: number;
  phone: string;
  comments: Comments[]
};
