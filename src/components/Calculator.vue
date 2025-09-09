<template>
  <section class="card">
    <div class="row">
      <label>
        A
        <input data-testid="a" type="number" v-model.number="a" />
      </label>
      <label>
        B
        <input data-testid="b" type="number" v-model.number="b" />
      </label>
    </div>

    <div class="row actions">
      <button data-testid="add" @click="compute('+')">Add</button>
      <button data-testid="sub" @click="compute('-')">Subtract</button>
      <button data-testid="clear" class="ghost" @click="clearAll">Clear</button>
    </div>

    <div class="result" aria-live="polite">
      <span>Result:</span>
      <strong data-testid="result">{{ result }}</strong>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { add, subtract } from '../utils/math'

const a = ref(0)
const b = ref(0)
const result = ref(0)

function compute(op) {
  result.value = op === '+' ? add(a.value, b.value) : subtract(a.value, b.value)
}

function clearAll() {
  a.value = 0
  b.value = 0
  result.value = 0
}
</script>

<style scoped>
.card {
  background: #0f1633;
  border: 1px solid #223066;
  border-radius: 12px;
  padding: 1rem;
}
.row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
label {
  display: flex;
  flex-direction: column;
  font-size: .9rem;
  gap: .4rem;
}
input {
  background: #0a1026;
  border: 1px solid #223066;
  color: #eef1f7;
  border-radius: 8px;
  padding: .6rem .8rem;
  min-width: 8rem;
}
.actions {
  display: flex;
  gap: .6rem;
}
button {
  border: 1px solid #3a57d1;
  background: #2843c2;
  color: white;
  border-radius: 999px;
  padding: .6rem .9rem;
  font-weight: 600;
  cursor: pointer;
}
button:hover { filter: brightness(1.1) }
button.ghost {
  background: transparent;
  border-color: #223066;
}
.result {
  margin-top: .8rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1.1rem;
}
</style>