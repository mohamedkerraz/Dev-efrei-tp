import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}


    addpseudo(pseudo: string): User {
        if(pseudo.match(`/[^a-zA-Z0-9\s]/g`) !== null){
            throw new Error('Le pseudo ne peut pas contenir de caractères spéciaux');
        }else if(pseudo === ''){
            throw new Error('Le pseudo ne peut pas être vide');
        }else{
            return this.userService.addpseudo(pseudo);
        }
    }

    addemail(email: string): User {
        if (email.match(`/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/`)) {
          throw new Error('L\'adresse email n\'est pas valide.');
        }
      
        return this.userService.addemail(email);
      }

    getById(id: number): User | null {
        // is the id a decimal ?
        // is the id a negative number ?
        // other checks...
        return this.userService.getById(id);
    }
}
