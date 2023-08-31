import { Injectable } from '@nestjs/common';

@Injectable({})
export class UserService {
  private data = [
    {
      name: 'Tran Duoc',
      age: 22,
    },
    {
      name: 'Minh Thu',
      age: 22,
    },
  ];
  getUser(id: number) {
    console.log(id);
    return this.data;
  }
}
