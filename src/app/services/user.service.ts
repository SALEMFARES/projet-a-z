import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'Coca',
            hobbies: [
                'coder',
                'la déqustation de café'
            ]

        }
    ];
    userSubject = new Subject<User[]>();

    emaiUsers() {
        this.userSubject.next(this.users.slice());
    }
    addUser(user: User) {
    this.users.push(user);
    this.emaiUsers();
    }
}
