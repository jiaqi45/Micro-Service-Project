<template>
  <home-page></home-page>
  <!-- 
    Router view will lead to unfavorable url
    Hence, it is disabled.
    To enable it, use

    `<router-view />`

    In the template section
  -->
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { key } from "./store";
import { Action } from "./store/action";
import HomePage from "./views/HomePage.vue"

export default defineComponent({
  name: "App",
  components: {
    HomePage,
  },
  setup() {
    const store = useStore(key);

    onMounted(() => {
      store.dispatch(Action.setupLocale, navigator.language);
    });

    return {};
  },
});
</script>
