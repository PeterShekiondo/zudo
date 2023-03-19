<template>
   
<nav  class="px-2 sm:px-4 py-2.5 rounded dark:bg-transparent">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg 
      md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent">
        <li>
            <button class="border hover:border-gray-200 active:border-gray-200 rounded-full font-bold px-8 py-2">Home</button>
        </li>
        <li>
            <button class="border hover:border-gray-200 active:border-gray-200 rounded-full font-bold px-8 py-2">Category</button>
        </li>
        <li>
            <button class="border hover:border-gray-200 active:border-gray-200 rounded-full font-bold px-8 py-2">Popular</button>
        </li>
        <li>
            <button class="border hover:border-gray-200 active:border-gray-200 rounded-full font-bold px-8 py-2">My pick</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </template>
  
  <script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  </script>
  