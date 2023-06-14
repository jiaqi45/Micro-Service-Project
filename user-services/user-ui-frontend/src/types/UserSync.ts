import { ActionCallback } from "./ActionCallback";
import User from "./User";

export interface UserSync {
    user: User,
    callback: ActionCallback,
}