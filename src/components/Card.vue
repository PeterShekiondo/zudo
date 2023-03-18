<template>
    <div class="shadow-lg rounded-lg bg-white overflow-hidden">
      <img :src="image" alt="" class="w-full h-48 object-cover">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">{{ content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      content: String,
      image: String,
    },
  }
  </script>
  