import { User } from './user';

export interface UserService {
    addpseudo(pseudo: string): User;
    addemail(email: string): User;
    getById(id: number): User | null;
}
