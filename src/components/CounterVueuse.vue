<template>
  <fieldset>
    <legend>Counter Store (vueuse)</legend>
    <div>
      <label> Count: <input type="number" v-model.number="count" /> </label>
      <button @click="increment">Increment</button>
      double: {{ doubleCount }}
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { useCounterStore } from "../composables/counter";

const counterStore = useCounterStore();
const { count, doubleCount, increment } = counterStore;
</script>
