<template>
  <user-list></user-list>
  <user-create></user-create>
  <user-edit></user-edit>
  <user-error></user-error>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "@/components/UserList.vue";
import UserCreate from "@/components/UserCreate.vue";
import UserEdit from "@/components/UserEdit.vue";
import UserError from "@/components/UserError.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    UserList,
    UserCreate,
    UserEdit,
    UserError,
  },
});
</script>
