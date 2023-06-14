import { GetterTree } from "vuex";
import { State } from "./state";

export const getters: GetterTree<State, State> = {
    isUserSelected(state: State): boolean {
        return state.selectedUser !== null;
    },
    isCreatingUser(state: State): boolean {
        return state.creatingUser !== null;
    },
    selectedUserId: (state: State): number | null => {
        return state.selectedUser != null ? state.selectedUser.id : null;
    },
    isProcessing(state: State): boolean {
        return state.processing;
    },
    hasError(state: State): boolean {
        return state.error !== null;
    }
}
