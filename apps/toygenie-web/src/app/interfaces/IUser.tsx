interface IUser {
    id: number
    first_name: string,
    last_name: string,
    email_address: string,
    // password: string,
    roles: string,
    auth_token: string
}

export default IUser;