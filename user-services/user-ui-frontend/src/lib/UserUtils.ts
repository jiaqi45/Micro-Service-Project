import { User } from "@/types/User";

export enum UserValidationErrorCode {
    none = 0,
    invalideName,
    invalideEmail,
}

export function isEqualUser(user1: User, user2: User): boolean {
    if (user1.id != user2.id) {
        return false;
    }
    if (user1.name != user2.name) {
        return false;
    }
    if (user1.email != user2.email) {
        return false;
    }
    return true;
}

export function validateUser(user: User): UserValidationErrorCode {
    if (user.name?.length == 0) {
        return UserValidationErrorCode.invalideName;
    }
    if (user.email?.length == 0) {
        return UserValidationErrorCode.invalideEmail;
    }
    return UserValidationErrorCode.none;
}

export function copyUser(user: User): User {
    const copied = {} as User;
    copied.id = user.id;
    copied.name = user.name;
    copied.email = user.email;
    return copied;
}

export function assignUser(target: User, source: User): User {
    target.id = source.id;
    target.name = source.name;
    target.email = source.email;
    return target;
}
