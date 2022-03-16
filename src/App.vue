<template>
  <div id="app">
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer'
import param from '@/param/param'

const axios = require('axios');

export default {
  name: 'HomeView',

  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  --dominant: #202020;
  --contrast: #F2F2F2;
  --tonic: #56FFA4;
}

html {
  background: var(--dominant);
}

body {
  box-sizing: border-box;
  padding: 0 1em;
  margin: 0;
}

h1, h2, h3 {
  color: var(--contrast);
  font-family: 'Manrope', sans-serif;
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.05em;
}

h2 {
  font-size: 3rem;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  margin: auto;
}

.title span {
  color: var(--contrast)
}

.title-1 {
  justify-content: space-between;
  max-width: 940px;
}

.title-1 span {
  font-size: 2rem;
  height: 2rem;
  margin: 0;
}

.title-2 span {
  font-size: 1.25rem;
  width: 1.25em;
  margin-right: 0.5em;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

p, li, a, button {
  font-family: 'Inter', sans-serif;
  color: #F2F2F2;
  font-size: 1rem;
}

ul {
  padding: 0;
}

ul li {
  list-style: none;
  margin-bottom: 1em;
}

.tags span {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 0.875rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
}

b {
  font-weight: 300;
  font-family: 'Manrope', sans-serif;
}

button {
  font-weight: 600;
}

.info small {
  font-weight: 200;
}
</style>
