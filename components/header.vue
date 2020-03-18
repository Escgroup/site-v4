<template>
  <header>
    <b-navbar toggleable="lg">
      <nuxt-link to="/">
        <b-navbar-brand>[Esc] Group site</b-navbar-brand>
      </nuxt-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="mr-sm-5">
            <b-nav-text class="mr-3">
              <nuxt-link to="/">Home</nuxt-link>
            </b-nav-text>
            <b-nav-text>
              <nuxt-link to="/community">Community</nuxt-link>
            </b-nav-text>
          </b-navbar-nav>

          <b-nav-item-dropdown text="Lang" right disabled>
            <b-dropdown-item href="#">JA</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>
