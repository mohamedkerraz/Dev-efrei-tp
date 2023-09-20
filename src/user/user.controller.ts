import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}




    

    add(pseudo: string): User {
        if(pseudo.match(/[^a-zA-Z0-9\s]/g) !== null){
            throw new Error('Le pseudo ne peut pas contenir de caractères spéciaux.');
        }else if(pseudo === ''){
            throw new Error('Le pseudo ne peut pas être vide.');
        }else{
            return this.userService.add(pseudo);
        }
    }


    getById(id: number): User | null {
        // is the id a decimal ?
        // is the id a negative number ?
        // other checks...
 
        if(id % 1 !== 0){
            throw new Error('L\'ID doit être un nombre entier.'); 
        }else if(id < 0){
            throw new Error('L\'ID ne peut pas etre negatif.'); 
        }else{
            return this.userService.getById(id);
        }
        
    }
}
