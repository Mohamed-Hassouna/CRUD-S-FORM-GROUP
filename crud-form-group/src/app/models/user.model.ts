export interface User {
    id: number,
    name: { first: string, last: string },
    birthdate: string,
    email: string,
    phone: string,
    address: string
}