<template>
  <div id="app">
    <header>
      <h1>Popis knjiga</h1>
      <nav>
        <router-link to="/">Početna</router-link>
        <router-link to="/about">O aplikaciji</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
}
nav {
  display: flex;
  gap: 15px;
}
</style>
