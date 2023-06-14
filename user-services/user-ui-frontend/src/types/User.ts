export interface User {
    id: number | null,
    name: string | null,
    email: string | null,
}

export const EmptyUser: User = { id: null, name: "", email: "" } ;

export default User;
