<template lang="html">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="http://localhost:9000">Фильмы</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class='nav-link' :to="{ name: 'customerList' }">Покупатели</router-link>
        </li>
        <li class="nav-item">
          <router-link class='nav-link' :to="{ name: 'ownerList'}">Владельцы</router-link>
        </li>
        <li class="nav-item">
          <router-link class='nav-link' :to="{ name: 'dealList'}">Сделки</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
</style>
