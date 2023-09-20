import { User } from './user';

export interface UserService {
    add(pseudo: string): User;
    getById(id: number): User | null;
}
