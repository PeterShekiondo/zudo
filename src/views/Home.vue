<template>
    <div class="container mx-auto my-8">
      <div class="grid grid-cols-3 gap-4">
        <Card
          v-for="item in cards"
          :key="item.id"
          :title="item.title"
          :content="item.content"
          :image="item.image"
        />
      </div>
  
      <div class="my-8">
        <Menu :items="menuItems" trigger-text="Menu" />
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue'
  import Menu from '@/components/Menu.vue'
  
  export default {
    components: {
      Card,
      Menu,
    },
    data() {
      return {
        cards: [
          {
            id: 1,
            title: 'Card Title 1',
            content: 'This is the content of card 1',
            image: 'https://source.unsplash.com/random/800x600',
          },
          {
            id: 2,
            title: 'Card Title 2',
            content: 'This is the content of card 2',
            image: 'https://source.unsplash.com/random/800x600',
          },
          {
            id: 3,
            title: 'Card Title 3',
            content: 'This is the content of card 3',
            image: 'https://source.unsplash.com/random/800x600',
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
  