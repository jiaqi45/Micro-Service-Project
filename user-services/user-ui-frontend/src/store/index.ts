import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store } from 'vuex'
import { state, State } from './state';
import { getters } from './getter';
import { mutations } from './mutation';
import { actions } from './action';

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  getters,
  mutations,
  actions,
});
