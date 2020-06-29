<template>
  <div class="layout">
    <header class="header">
      <div class="logo">
        <g-link class="home__link" to="/">Vault Docs</g-link>
        <g-image src="../../assets/img/vault_logo_1.png" width="100" />
      </div>
    </header>
    <div class="wrapper">
      <aside class="sidebar">
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/HTML/">HTML</g-link>
          <g-link class="nav__link" to="/CSS/">CSS</g-link>
          <g-link class="nav__link" to="/Javascript/">JavaScript</g-link>
          <g-link class="nav__link" to="/Python/">Python</g-link>
        </nav>
      </aside>
    </div>
    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}

.wrapper {
  display: flex;
}

.sidebar {
  position: fixed;
  height: 100vh;
  min-width: 240px;
  padding: 20px;
  background: #2a2c2f;
}

nav {
  margin-top: 120px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
}

.nav__link,
.home__link {
  color: white;
  text-decoration: none;
  padding: 5px 0px;
}

.header {
  z-index: 2;
  position: fixed;
  width: 100%;
  padding: 20px;
}

.main-content {
  margin-left: 300px;
  margin-top: 30px;
  padding: 20px;
}

.logo {
  max-width: 240px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
}

.home__link {
  font-size: 24px;
}
</style>
