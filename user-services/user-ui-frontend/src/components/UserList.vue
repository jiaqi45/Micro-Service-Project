<template>
  <div class="row container mt-4 ml-4">
    <div>
      <div class="card">
        <h5 class="card-header">User List</h5>
        <div class="card-body">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col"><span>{{ $t('Identifier') }}</span></th>
                <th scope="col"><span>{{ $t('Name') }}</span></th>
                <th scope="col"><span>{{ $t('Email') }}</span></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="user in userList"
                :key="user.id"
                @click="userSelected(user)"
              >
                <td>
                  <span>{{ user.id }}</span>
                </td>
                <td>
                  <span>{{ user.name }}</span>
                </td>
                <td>
                  <span>{{ user.email }}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row mt-3">
            <div class="d-flex justify-content-end">
              <div div class="btn-group" role="group">
                <button
                  class="btn btn-success"
                  @click="addUser"
                  :disabled="userCreating || isProcessing ? true : null"
                >
                  {{ $t('Add') }}
                </button>
                <button class="btn btn-primary" @click="getUserList">
                  {{ $t('Reload') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import User from "@/types/User";
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { Action } from "@/store/action";
import { Mutation } from "@/store/mutation";

export default defineComponent({
  setup() {
    const store = useStore(key);

    const userList = computed(() => {
      return store.state.userList;
    });
    const getUserList = () => {
      store.dispatch(Action.loadUsers);
    };
    const addUser = () => {
      store.commit(Mutation.toggleUserCreation, true);
    };
    const userSelected = (user: User | null) => {
      store.commit(Mutation.toggleUserSelection, user);
    };

    const userCreating = computed(() => store.getters.isCreatingUser);
    const isProcessing = computed(() => store.getters.isProcessing);

    onMounted(getUserList);

    return {
      userList,
      getUserList,
      userCreating,
      addUser,
      userSelected,
      isProcessing,
    };
  },
});
</script>

