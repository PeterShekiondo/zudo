<template>
    <div class="pb-16 " >
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

        <div class="absolute bottom-20 px-52 mt-32">
          <div class="flex flex-row mx-2 my-1">
            <Fire/>
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
  
      
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue'
  import Menu from '@/components/Menu.vue'
  import MainReading from '../assets/svg/MainReading.vue'
  import Fire from "../assets/svg/Fire.vue"
  import ArrowRight from "../assets/svg/RightArrow.vue"
  
  export default {
    components: {
      Card,
      Menu,
      MainReading,
      Fire,
      ArrowRight
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
  