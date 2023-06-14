import { assignUser, copyUser } from "@/lib/UserUtils";
import { User, EmptyUser } from "@/types/User";
import { MutationTree } from "vuex";
import { State } from "./state";

export const enum Mutation {
    updateUserList = 'UPDATE_USER_LIST',
    toggleUserSelection = 'TOGGLE_USER_SELECTION',
    toggleUserCreation = 'TOGGLE_USER_CREATION',
    toggleProcessing = 'TOGGLE_PROCESS',
    toggleError = 'TOGGLE_ERROR',
    updateUser = 'UPDATE_USER',
    removeUser = 'REMOVE_USER',
}

export const mutations: MutationTree<State> = {
    [Mutation.updateUserList](state: State, userList: User[]) {
        state.userList = userList;
    },
    [Mutation.toggleUserSelection](state: State, user: User | null) {
        state.creatingUser = null;
        if (state.selectedUser == null) {
            state.selectedUser = user;
        } else if (state.selectedUser.id == user?.id) {
            state.selectedUser = null;
        } else {
            state.selectedUser = user;
        }
    },
    [Mutation.toggleUserCreation](state: State, creating: boolean) {
        if (creating) {
            state.creatingUser = copyUser(EmptyUser);
            state.selectedUser = null;
        } else {
            state.creatingUser = null;
        }
    },
    [Mutation.toggleProcessing](state: State, processing: boolean) {
        state.processing = processing;
    },
    [Mutation.toggleError](state: State, error: Error | null) {
        state.error = error;
    },
    [Mutation.updateUser](state: State, user: User) {
        state.userList.forEach(existingUser => {
            if (existingUser.id === user.id) {
                assignUser(existingUser, user);
            }
        });
    },
    [Mutation.removeUser](state: State, userId: number) {
        let userIndex = -1;
        const foundUser = state.userList.find((user: User, index: number) => {
            if (user?.id == userId) {
                userIndex = index;
                return true;
            } else {
                return false;
            }
        });
        if (foundUser === undefined) {
            return;
        }
        if (state.selectedUser != null && state.selectedUser.id == userId) {
            state.selectedUser = null;
        }
        state.userList.splice(userIndex, 1)
    }
};