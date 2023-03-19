<template>
    <div class="flex flex-row rounded-lg border border-gray-100 bg-gray-50
     overflow-hidden p-2">
      <form class="w-full">
    <div class="flex flex-row w-full">
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex 
        items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900
         bg-gray-50 rounded-l-lg" type="button">
         All categories 
         <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg
             focus:outline-none" placeholder="Find the book you like" required>
            <button type="submit" class="absolute top-0 right-0 inline-flex 
            items-center py-2.5 px-3 ml-2 text-sm font-medium text-white
             bg-primary-500 rounded-r-lg border border-primary-500
              hover:bg-primary-500 focus:outline-none">
                  <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
              </button>
        </div>
    </div>
</form>
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
  