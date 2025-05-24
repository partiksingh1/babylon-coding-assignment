import { User } from 'firebase/auth';

export interface FirebaseUser extends User {
  displayName: string | null;
}