export interface ILogin {
    email: string,
    password: string
}

export interface IForgetPassword {
    email: string,
    oldPassword: string,
    newPassword: string
}

export interface ISignup {
    firstName: string,
    lastName: string,
    role: string,
    email: string,
    password: string,
}