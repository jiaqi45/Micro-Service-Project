import { ActionContext, ActionTree } from "vuex";
import { State } from "./state";
import axios from 'axios';
import { Mutation } from "./mutation";
import { User } from "@/types/User";
import { UserSync } from "@/types/UserSync";
import { i18n } from "@/lang";
import { Composer } from "vue-i18n";

export const enum Action {
    setupLocale = 'SETUP_LOCALE',
    loadUsers = 'LOAD_USERS',
    createUser = 'CREATE_USER',
    readUser = 'READ_USER',
    updateUser = 'UPDATE_USER',
    deleteUser = 'DELETE_USER',
}

export const actions: ActionTree<State, State> = {
    async [Action.setupLocale](context: ActionContext<State, State>, locale: string) {
        // No need to load language
        if (locale == 'en') {
            return;
        }
        try {
            const response = await axios.get(`/locale/${locale}`);
            i18n.global.setLocaleMessage(locale, response.data);
            if (i18n.mode === 'legacy') {
                i18n.global.locale = locale
            } else {
                ((i18n.global as unknown) as Composer).locale.value = locale
            }
        } catch (error) {
            // fail silently
        }
    },
    async [Action.loadUsers](context: ActionContext<State, State>) {
        context.commit(Mutation.toggleProcessing, true);
        try {
            const response = await axios.get(`/user`);
            context.commit(Mutation.updateUserList, response.data);
        } catch (error) {
            context.commit(Mutation.toggleError, error);
        }
        context.commit(Mutation.toggleUserSelection, null);
        context.commit(Mutation.toggleUserCreation, false);
        context.commit(Mutation.toggleProcessing, false);
    },
    async [Action.createUser](context: ActionContext<State, State>) {
        context.commit(Mutation.toggleProcessing, true);
        try {
            const response = await axios.post(`/user`, context.state.creatingUser);
            const user = response.data as User;
            context.state.userList.push(user);
            context.commit(Mutation.toggleUserSelection, user);
        } catch (error) {
            context.commit(Mutation.toggleError, error);
        }
        context.commit(Mutation.toggleProcessing, false);
    },
    async [Action.readUser](context: ActionContext<State, State>, userId: number) {
        context.commit(Mutation.toggleProcessing, true);
        try {
            const response = await axios.get(`/user/${userId}`);
            context.commit(Mutation.updateUser, response.data);
        } catch (error) {
            context.commit(Mutation.toggleError, error);
        }
        context.commit(Mutation.toggleProcessing, false);
    },
    async [Action.updateUser](context: ActionContext<State, State>, userSync: UserSync) {
        context.commit(Mutation.toggleProcessing, true);
        try {
            const response = await axios.put(`/user`, userSync.user);
            context.commit(Mutation.updateUser, response.data);
            userSync.callback(true, null);
        } catch (error) {
            context.commit(Mutation.toggleError, error);
            userSync.callback(false, error as Error);
        }
        context.commit(Mutation.toggleProcessing, false);
    },
    async [Action.deleteUser](context: ActionContext<State, State>, userId: number) {
        context.commit(Mutation.toggleProcessing, true);
        try {
            await axios.delete(`/user/${userId}`);
            context.commit(Mutation.removeUser, userId);
        } catch (error) {
            context.commit(Mutation.toggleError, error);
        }
        context.commit(Mutation.toggleProcessing, false);
    }
}
