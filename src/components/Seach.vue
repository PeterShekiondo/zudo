<template>
    <div class="flex flex-row rounded-sm bg-trnsparent overflow-hidden px-4 py-4">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-transparent font-medium 
        rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center
        " type="button">All Categories <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
            </path></svg>
        </button>
        
        <div></div>
        <div></div>
        <button class="btn btn-primary-500 p-5 border border-primary-300 " >
           <ArrowRight/>
      </button>
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
  