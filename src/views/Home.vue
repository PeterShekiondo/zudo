<template>
    <div class="pb-0" >
        <header class="bg-secondary-500 w-full mb-8 px-32">
        <Menu :items="menuItems" trigger-text="Menu" />
      
        <div class="flex flex-row">
          <div class="flex flex-col w-1/2  mt-24 ml-52">
            <p class="text-6xl px-4 mb-4 bg-transaparent text-primary-500">
              Get your favourite 
            </p>
            <p class="text-6xl px-4 mb-4 bg-transaparent text-primary-500">
              books all in one place
            </p>
            <div class="">
              <button class="border hover:border-primary-500
               active:border-primary-500 bg-primary-500 
               rounded-full text-white text-md px-8 py-2 mt-3" >
               View Categories
              </button>
            </div>
          </div>
        
            <div class="flex flex-row justify-center w-1/2 p-4 bg-transaparent px-40">
             <MainReading/>
            </div>
        </div>

        <div class="absolute bottom-28 px-52 ">
          <div class="flex flex-row mx-2 my-1">
            <div class="mt-1">
              <Fire/>
            </div>
            <p class="mx-2 text-primary-500 text-xl font-semibold">Hot reads</p>
          </div>
          <div class="flex flex-row w-full ">
            <Card
              v-for="item in cards"
              :key="item.id"
              :title="item.title"
            />
          </div>
          <button class="btn btn-white p-5 rounded-full border bg-white border-gray-300
            shadow-lg absolute right-20 bottom-28 " >
           <ArrowRight/>
        </button>
        </div>
      </header>
      
      <section id="search" class="flex flex-row justify-center mt-52 mb-16"> 
          <div class="container px-40">
            <Search/>
          </div>
        </section>

      <section id="boock_shelf" class="w-full px-80 mb-12">
          <div class="flex flex-row mx-2 my-1">
            <div class="mt-1.5 mx-2">
              <Subtract/>
            </div>
            <p class="mx-2 text-primary-500 text-xl font-semibold">Book Shelf</p>
          </div>
          <div class="flex flex-row ">
            <Card
              v-for="item in cards"
              :key="item.id"
              :title="item.title"
            />
          </div>
        </section>
      
        <footer class="flex flex-row justify-between px-72 bg-primary-500">
          <div class="flex flex-row">
            <LogoIcon/>
            <p class="text-white italic my-auto text-lg">Zuno library</p>
          </div>
          <div class="flex flex-col text-center justify-center">
            <p class="mt-1 text-center text-white">All rights reserved. Copyright Zuno Library. 2023</p>
          </div>
        </footer>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue'
  import Menu from '@/components/Menu.vue'
  import MainReading from '../assets/svg/MainReading.vue'
  import Fire from "../assets/svg/Fire.vue"
  import ArrowRight from "../assets/svg/RightArrow.vue"
  import Search from "../components/Seach.vue"
  import Subtract from "../assets/svg/Subtract.vue"
  import LogoIcon from "../assets/svg/LogoIcon.vue"
  
  export default {
    components: {
      Card,
      Menu,
      MainReading,
      Fire,
      ArrowRight,
      Search,
      Subtract,
      LogoIcon
    },
    data() {
      return {
        cards: [
          {
            id: 1,
            title: 'Book Cover',
           
          },
          {
            id: 2,
            title: 'Book Cover',
          },
          {
            id: 3,
            title: 'Book Cover',
          },
          {
            id: 3,
            title: 'Book Cover',
          },
          {
            id: 3,
            title: 'Book Cover',
          },
        ],
        menuItems: [
          { label: 'Home', path: '/' },
          { label: 'About', path: '/about' },
          { label: 'Contact', path: '/contact' },
        ],
      }
    },
  }
  </script>
  