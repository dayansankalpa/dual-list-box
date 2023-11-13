<script setup>
import dualListBox from "~/components/dualListBox.vue";

//pass array to availableOptions
const availableOptions = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' }
]

//pass array to selectedOptions
const selectedOptions = ref([]);

</script>
<template>
  <dualListBox
      :availableOptions="availableOptions"
      v-model:selectedOptions="selectedOptions"
      availableTitle="All Courses"
      selectedTitle="Selected Courses"
  />
</template>
