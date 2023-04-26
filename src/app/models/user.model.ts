export interface User {
    email: string;
    password?: string;
    username?: string;
    roles?: string[];
    signupAt?: Date;
    updateAt?: Date;
    id?: number;
}
