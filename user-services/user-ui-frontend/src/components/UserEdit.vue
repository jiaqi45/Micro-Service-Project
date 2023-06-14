<template>
  <div v-if="userSelected" class="row container mt-4 ml-4">
    <div>
      <div class="card">
        <h5 class="card-header">{{ $t('Create User') }}</h5>
        <div class="card-body">
          <div class="row mt-3">
            <div
              for="UserID"
              class="
                col-sm-4 col-form-label
                rounded
                bg-secondary
                text-white text-right
              "
            >
              <label>{{ $t('Identifier') }}</label>
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                readonly
                disabled
                id="UserID"
                v-model="user.id"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div
              for="UserName"
              class="
                col-sm-4 col-form-label
                rounded
                bg-secondary
                text-white text-right
              "
            >
              <label>{{ $t('Name') }}</label>
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                id="UserName"
                v-model="user.name"
                :readonly="editing ? null : true"
                :disabled="editing ? null : true"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div
              for="UserEmail"
              class="
                col-sm-4 col-form-label
                rounded
                bg-secondary
                text-white text-right
              "
            >
              <label>{{ $t('Email') }}</label>
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                id="UserEmail"
                v-model="user.email"
                :readonly="editing ? null : true"
                :disabled="editing ? null : true"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="d-flex justify-content-end">
              <div class="btn-toolbar" role="toolbar">
                <div class="btn-group" role="group" v-if="editing">
                  <button
                    class="btn btn-primary"
                    @click="saveEditting"
                    :disabled="
                      isProcessing || !userChanged || !canSaveEditting
                        ? true
                        : null
                    "
                  >
                    {{ $t('Save') }}
                  </button>
                  <button
                    class="btn btn-secondary"
                    @click="cancelEditting"
                    :disabled="isProcessing ? true : null"
                  >
                    {{ $t('Cancel') }}
                  </button>
                </div>
                <div class="btn-group" role="group" v-else>
                  <button
                    class="btn btn-primary"
                    @click="startEditting"
                    :disabled="isProcessing ? true : null"
                  >
                    {{ $t('Edit') }}
                  </button>
                  <button
                    class="btn btn-danger"
                    @click="deleteUser"
                    :disabled="isProcessing ? true : null"
                  >
                    {{ $t('Delete') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  assignUser,
  copyUser,
  isEqualUser,
  UserValidationErrorCode,
  validateUser,
} from "@/lib/UserUtils";
import { key } from "@/store";
import { Action } from "@/store/action";
import { Mutation } from "@/store/mutation";
import { User } from "@/types/User";
import { EmptyUser } from "@/types/User";
import { UserSync } from "@/types/UserSync";
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore(key);

    const user = computed(() => store.state.selectedUser ?? EmptyUser);
    const userSelected = computed(() => store.getters.isUserSelected);

    const editing = ref<boolean>(false);
    const originalUser = ref<User | null>(null);
    const userId = ref<number | null>(null);

    const userChanged = computed(() => {
      if (originalUser.value == null) {
        return store.state.selectedUser == null;
      }
      return !isEqualUser(originalUser.value!, store.state.selectedUser!);
    });

    const startEditting = () => {
      if (!editing.value) {
        originalUser.value = copyUser(store.state.selectedUser!);
      }
      editing.value = !editing.value;
    };

    const canSaveEditting = computed(() => {
      return (
        validateUser(store.state.selectedUser!) == UserValidationErrorCode.none
      );
    });
    const saveEditting = () => {
      if (!store.getters.isUserSelected) {
        return;
      }
      const savingUser = store.state.selectedUser!;
      const userSync = {
        user: savingUser,
        callback: function (success: boolean) {
          if (success) {
            originalUser.value = copyUser(savingUser);
            editing.value = !editing.value;
          }
        },
      } as UserSync;
      store.dispatch(Action.updateUser, userSync);
    };

    const cancelEditting = () => {
      assignUser(store.state.selectedUser!, originalUser.value!);
      editing.value = !editing.value;
    };
    const deleteUser = () => {
      store.dispatch(Action.deleteUser, store.state.selectedUser!.id);
    };

    const isProcessing = computed(() => store.getters.isProcessing);

    watch(
      () => store.getters.isUserSelected,
      function () {
        originalUser.value = null;
        editing.value = false;
      }
    );
    watch(
      () => store.getters.selectedUserId,
      function (currentUserId) {
        const previousUserId =
          originalUser.value != null ? originalUser.value.id : null;
        // restore previous value if previous user has changed
        if (originalUser.value != null) {
          store.commit(Mutation.updateUser, originalUser.value);
        }
        if (currentUserId !== previousUserId) {
          originalUser.value = copyUser(store.state.selectedUser!);
          userId.value = currentUserId;
          editing.value = false;
        }
      }
    );

    return {
      user,
      userSelected,
      editing,
      originalUser,
      userId,
      userChanged,
      startEditting,
      canSaveEditting,
      saveEditting,
      cancelEditting,
      deleteUser,
      isProcessing,
    };
  },
});
</script>
