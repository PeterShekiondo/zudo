<template>
   
<nav  class="px-2 sm:px-4 py-2.5 rounded dark:bg-transparent">
  <div class="flex flex-wrap items-center justify-between mx-40">
    
    <div class="w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg 
          md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-transparent">
          <li class="flex flex-row">
            <LogoIcon/>
            <p class="text-primary-600 italic my-auto text-lg">Zuno library</p>
        </li>
          <li>
            <button class="border hover:border-primary-500
             focus:border-primary-500 bg-white focus:bg-white 
             rounded-full text-primary-500 text-md px-8 py-2 mt-3" >Home</button>
        </li>
        <li>
            <button class="border hover:border-primary-200 focus:border-primary-200
             rounded-full text-primary-400 text-md px-8 py-2 mt-3">Category</button>
        </li>
        <li>
            <button class="border hover:border-primary-200 focus:border-primary-200
             rounded-full text-primary-400 text-md px-8 py-2 mt-3">Popular</button>
        </li>
        <li>
            <button class="border hover:border-primary-200 focus:border-primary-200 
            rounded-full text-primary-400 text-md px-8 py-2 mt-3">My pick</button>
        </li>
      </ul>
      
    </div>
    <div class="container flex flex-row justify-around w-24 mx-24">
      <CartIcon/>
      <div class="CartIcon "> home</div>
    </div>
  </div>
</nav>

  </template>
  
  <script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  import LogoIcon from "../assets/svg/LogoIcon.vue"
  import CartIcon from "../assets/svg/CartIcon.vue"

  
  </script>
  