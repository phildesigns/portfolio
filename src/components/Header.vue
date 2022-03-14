<template>
  <div>
    <header>
      <nav>
        <h1>phil</h1>
        <router-link to="/">
          <svg id="monogram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1024">
          <path d="m453 492-14-4-338-195 53-32 299 172 295-169 58 29-339 195-14 4zM142 753l-55-33V323l257 140c72 42 106 121 105 176 0 36-13 64-37 77-18 11-49 17-96-10L142 605v148Zm0-211 202 117c21 12 35 13 41 10s10-15 10-30c0-41-27-98-79-128L142 410v132ZM817 475c1-38-12-68-37-83-17-11-48-18-93 6L475 514l-14 24v391l55-33V750l140-77 97 91 49-29-95-90 6-3c70-39 103-112 104-167Zm-301 79 197-108c17-9 31-12 39-7 7 4 11 18 11 35-1 38-25 92-76 120l-171 94V554Z"/>
          <path id="outline" d="M463 1024h-27L13 780 0 756V268l13-24L436 0h27l423 244 13 24v488l-13 24-423 244ZM54 740l396 229 395-229V284L450 55 54 284v456Z"/>
        </svg>
        </router-link>
        <h1>varret</h1>
      </nav>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    openMenu: function () {
      document.documentElement.classList.toggle("menu-open");
    }
  }
}
</script>

<style>


nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 5em;
  margin: 1em;
}

nav h1 {
   color: var(--contrast);
 }

#monogram {
  overflow: clip;
  height: 5em;
  margin: auto 1em;
}

#monogram * {
  fill: var(--contrast);
}

#monogram #outline {
  transition: ease-in-out .10s;
  transform-origin: center;
}

#monogram:hover #outline {
  transform: scale(110%);
}

</style>
