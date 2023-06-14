<template>
  <div
    v-if="hasError"
    class="row container mt-4 ml-4"
    @mouseover="toggleAutoHidePaused(true)"
    @mouseleave="toggleAutoHidePaused(false)"
  >
    <div class="alert alert-danger" role="alert">
      <div class="ml-3 mr-3">
        <div class="row">
          <span><b>{{ error.name }}</b></span>
        </div>
        <div class="row mt-3">
          <span>{{ error.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { Mutation } from "@/store/mutation";
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";

const TimerInterval = 200;
const TimerTrigger = 3000;

export default defineComponent({
  setup() {
    const store = useStore(key);

    const hasError = computed(() => store.getters.hasError);
    const error = computed(() => store.state.error);

    const timer = ref<number>(0);
    const timerAccumulator = ref<number>(0);
    const timerStopped = ref<boolean>(false);
    const timerPaused = ref<boolean>(false);

    const toggleAutoHidePaused = (paused: boolean) => {
      timerPaused.value = paused;
    };

    const onShow = function () {
      timerAccumulator.value = 0;
      timerStopped.value = false;
      timerPaused.value = false;
      timer.value = setInterval(function () {
        if (!timerPaused.value && !timerStopped.value) {
          timerAccumulator.value += TimerInterval;
        }
        if (timerAccumulator.value > TimerTrigger) {
          timerStopped.value = true;
          clearInterval(timer.value);
          store.commit(Mutation.toggleError, null);
        }
      }, TimerInterval);
    };

    const onHide = function () {
      if (!timerStopped.value) {
        timerStopped.value = true;
        clearInterval(timer.value);
      }
    };

    watch(
      () => store.getters.hasError,
      function (hasError) {
        if (hasError) {
          onShow();
        } else {
          onHide();
        }
      }
    );

    return { hasError, error, toggleAutoHidePaused };
  },
});
</script>
