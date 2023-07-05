import { Role } from '../api/models';

export interface IUser {
  role: Role[];
  userId: string | null;
}
