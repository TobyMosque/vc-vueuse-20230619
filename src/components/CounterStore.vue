<template>
  <fieldset>
    <legend>Counter Store (pinia)</legend>
    <div>
      <label> Count: <input type="number" v-model.number="count" /> </label>
      <button @click="increment">Increment</button>
      double: {{ doubleCount }}
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const doubleCount = computed(() => counterStore.doubleCount);
const { increment } = counterStore;
</script>
