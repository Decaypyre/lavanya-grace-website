
export type AppointmentStatus = 'scheduled' | 'in-progress' | 'completed' | 'cancelled';

export interface Appointment {
  id: string;
  name: string;
  service: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  progress: number;
}
