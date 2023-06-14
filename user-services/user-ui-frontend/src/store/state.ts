import { User } from "@/types/User";

export interface State {
  userList: User[],
  selectedUser: User | null,
  creatingUser: User | null,
  processing: boolean,
  error: Error | null,
}

export const state: State = {
  userList: [],
  selectedUser: null,
  creatingUser: null,
  processing: false,
  error: null,
}
