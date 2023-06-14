<template>
  <div v-if="userCreating" class="row container mt-4 ml-4">
    <div>
      <div class="card">
        <h5 class="card-header">{{ $t('Create User') }}</h5>
        <div class="card-body">
          <div class="row mt-3">
            <div
              for="NewUserName"
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
                id="NewUserName"
                placeholder="Choose a name for user"
                v-model="user.name"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div
              for="NewUserEmail"
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
                id="NewUserEmail"
                placeholder="Specify email of the user"
                v-model="user.email"
              />
            </div>
          </div>

          <div class="row mt-3">
            <div class="d-flex justify-content-end">
              <div class="btn-toolbar" role="toolbar">
                <div class="btn-group" role="group">
                  <button
                    class="btn btn-primary"
                    @click="saveEditting"
                    :disabled="isProcessing || !canSaveEditting ? true : null"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserValidationErrorCode, validateUser } from "@/lib/UserUtils";
import { key } from "@/store";
import { Action } from "@/store/action";
import { Mutation } from "@/store/mutation";
import { EmptyUser } from "@/types/User";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore(key);

    const userCreating = computed(() => store.getters.isCreatingUser);
    const user = computed(() => store.state.creatingUser ?? EmptyUser);

    const canSaveEditting = computed(() => {
        if (store.state.creatingUser == null) {
            return false;
        } else {
            return validateUser(store.state.creatingUser) == UserValidationErrorCode.none;
        }
    });
    const saveEditting = () => {
      if (!store.getters.isCreatingUser) {
        return;
      }
      store.dispatch(Action.createUser);
    };
    const cancelEditting = () => {
      store.commit(Mutation.toggleUserCreation, false);
    };

    const isProcessing = computed(() => store.getters.isProcessing);

    return {
      userCreating,
      user,
      canSaveEditting,
      saveEditting,
      cancelEditting,
      isProcessing,
    };
  },
});
</script>
