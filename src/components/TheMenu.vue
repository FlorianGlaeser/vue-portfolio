<template>
  <div>
    <nav id="page-navigation">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
#page-navigation {
  background-color: #48525e;
  padding: 30px;

  ul {
    list-style-type: none;
    li {
      display: inline-block;
      a {
        font-size: 20px;
        font-family: "Helvetica", sans-serif;
        color: black;
        padding: 25px 30px;
        transition: all 0.2s ease-out;
        letter-spacing: 0.05em;
        &.router-link-exact-active {
          background-color: #38d39f;
        }
      }
    }
  }
}
</style>
