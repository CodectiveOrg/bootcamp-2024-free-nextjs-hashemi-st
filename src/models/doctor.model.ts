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
};
