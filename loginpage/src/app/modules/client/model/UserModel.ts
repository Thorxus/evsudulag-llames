export interface UserDetail {
    username: string;
    password: string;
    personal: {
        id: number;
        name: string;
        age: number;
        contact: string;
        address: string;
        email: string;
        image: string;
    }
}