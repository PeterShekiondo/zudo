<template>
    <div class="shadow-lg rounded-lg bg-white overflow-hidden w-60 h-72 mx-2 scale-90">
      <div class="px-6 py-4">
        <div class="font-bold text-3xl text-gray-300 ">{{ title }}</div>
        <!-- <p class="text-gray-700 text-base">{{ content }}</p> -->
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
  