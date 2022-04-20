<template>
  <div id="app">
    <a href="#main-content" class="skiplink bg-dark p-2">
      <span class="text-orange font-weight-bold">Skip to content</span>
    </a>
    <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </nav>
    <div id="main-content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.skiplink {
  left: 47%;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
  font-size: 1.2rem;

  &:focus {
    transform: translateY(0%);
    z-index: 1100;
  }
}
</style>
