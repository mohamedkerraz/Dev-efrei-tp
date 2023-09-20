import { User } from './user';
import { UserService } from './user.service';
import fs from 'fs';



export class UserJSONService implements UserService {


    add(pseudo: string): User {

        let users: User[] = []; 

        const fichierJSON: string = fs.readFileSync('user.json', 'utf-8');
        users = JSON.parse(fichierJSON);

        const newUser: User = {
            id: users.length + 1, 
            pseudo
        };
        
       if(users.find((u : any) => u.pseudo === pseudo)){
        throw new Error('Le pseudo déja prit');
       }else{
        users.push(newUser);
       }

      

        const usersJSON: string = JSON.stringify(users, null, 2);

        fs.writeFileSync('user.json', usersJSON);


        return newUser || null;

        
    }


    
    getById(id: number): User | null {
        let users: User[] = []; 

        const fichierJSON: string = fs.readFileSync('user.json', 'utf-8');
        users = JSON.parse(fichierJSON);

        const user = users.find((u : any) => u.id === id);
        
        return user || null; 
    }

}
