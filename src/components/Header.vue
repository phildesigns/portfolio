<template>
  <div>
    <header>
      <nav>
        <router-link to="/">
          <h1>Phil V.</h1>
        </router-link>
        <div class="nav-toggle" @click="openMenu()">
          <div class="nav-toggle-bar">
          </div>
        </div>
        <div class="menu" id="menu">
          <div class="menu-content">
            <ul>
              <li><a>projets <b>></b></a></li>
              <li><a>contact <b>></b></a></li>
            </ul>
          </div>
        </div>
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
nav li {
  font-size: 1.125rem;
  margin-left: 1.5rem;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 5em;
}

.menu {
  z-index: 1;
  position: fixed;
  top: 5rem;
  transform: translateX(100vw);
  transition: all .4s;
  background: #202020;
  height: 100vh;
  width: calc(100vw - 1.5rem)
}

.menu-content {
  border-top: 3px solid #202020;
}

.menu-content li {
  position: relative;
  margin-top: 1.5rem;
  right: 3rem;
  text-align: right;
  width: 100%;
}

.menu-open .menu {
  transform: translateX(0);
}

.menu-open, .menu-open body {
  overflow: hidden;
}

.nav-toggle {
  position: absolute;
  right: 1em;
  top: 1em;
  width: 2.55rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-toggle-bar,
.nav-toggle-bar::before,
.nav-toggle-bar::after {
  content: "";
  background-color: #F2F2F2;
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  transition: all .4s ease;
}

.nav-toggle-bar::before {
  top: -1rem;
}

.nav-toggle-bar::after {
  top: 1rem;
}

.menu-open .nav-toggle-bar {
  transform: rotate(135deg);
}

.menu-open .nav-toggle-bar::before,
.menu-open .nav-toggle-bar::after {
  transform: rotate(90deg);
  top: 0;
}

@media only screen and (min-width: 768px) {
  .menu {
    transform: translateX(0);
    height: auto;
    position: relative;
    top: 0;
    width: auto;
  }

  .menu-content li {
    display: inline;
    right: 0;
  }

  .nav-toggle {
    display: none;
  }
}
</style>
