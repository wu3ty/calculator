<template>
  <main class="container">
    <h1>🧮 Group 1's Calculator</h1>
    <Calculator />
    <p class="tip">Try entering two numbers and click Add or Subtract.</p>
  </main>
</template>

<script setup>
import Calculator from './components/Calculator.vue'
</script>

<style>
:root {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
}



body {
  margin: 0;
  background: #0b1020;
  color: #eef1f7;
}
.container {
  max-width: 640px;
  margin: 6rem auto;
  padding: 2rem;
  background: #101937;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.3);
}
h1 {
  margin-top: 0;
  font-size: 1.8rem;
}
.tip {
  opacity: .8;
  margin-top: 1rem;
}
</style>
