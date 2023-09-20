import fs from 'fs';
import { UserJSONService } from './user.json-service';
import { User } from './user';

jest.mock('fs');

const fsMock = fs as jest.Mocked<typeof fs >;

describe('UserJSONService', ()=> {
    let sut : UserJSONService;

    beforeEach(() => {
        sut = new UserJSONService();
        jest.resetAllMocks();
    });

    describe('getById', ()=> {
        it('should read json file using fs module', ()=> {
            const users : User[] = [];
            const stringifiedUsers = JSON.stringify(users);
            const dummyBuffers = Buffer.from(stringifiedUsers);
        }
        )
    })
})