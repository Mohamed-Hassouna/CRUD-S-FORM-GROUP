import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() { }
  users: User[] = [{ id: 1, name: { first: 'Mohamed', last: 'Hassouna' }, birthdate: '12/2/2001', email: 'hassonam12@gmail.com', phone: '05977771800', address: 'gaza', },
  { id: 2, name: { first: 'Ali', last: 'Ismail' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', },
  { id: 3, name: { first: 'Abed', last: 'Abed' }, birthdate: '11/6/2004', email: 'abed@gmail.com', phone: '059546754520', address: 'gaza', },
  { id: 4, name: { first: 'Abed', last: 'Abed' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', },
  { id: 5, name: { first: 'Abed', last: 'Abed' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', },
  { id: 6, name: { first: 'Abed', last: 'Abed' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', },
  { id: 7, name: { first: 'Abed', last: 'Abed' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', },
  { id: 8, name: { first: 'Abed', last: 'Abed' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', },
  { id: 9, name: { first: 'Abed', last: 'Abed' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', },
  { id: 10, name: { first: 'Abed', last: 'Abed' }, birthdate: '12/5/1998', email: 'ali@gmail.com', phone: '059546454520', address: 'gaza', }
  ];

  getUsers() {
    return this.users;
  }
  getUserById(id: any) {
    return this.users.find(user => user.id === id);
  }
  addUser(values: User): void {
    this.users.push(values);
  }
  updateUser(id: any, user: any) {
    const index = this.users.findIndex(u => u.id === id);
    this.users[index] = { ...this.users[index], ...user };
  }

  removeUser(user: User) {
    this.users.splice(this.users.findIndex(u => u.id === user.id), 1);
  }

}
