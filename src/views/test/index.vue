<template>
  <div>
    <ul>
      <li>name:{{ state.user.name }}</li>
      <li>age:{{ state.user.age }}</li>
      <li>isLogined:{{ state.isLogined ? '🐕' : 'xx' }}</li>

      <button style="border: 1px dashed #000" @click="handleIncrement">
        +
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, triggerRef } from 'vue';

defineOptions({
  name: 'Test'
});

const state = shallowRef({
  isLogined: true,
  user: {
    name: 'music',
    age: 13
  }
});

const handleIncrement = () => {
  state.value.user.age++;
  state.value.isLogined = !state.value.isLogined;
  triggerRef(state);
  console.log(state.value);
};
</script>
