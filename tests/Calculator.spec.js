import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Calculator from '../src/components/Calculator.vue'

describe('Calculator.vue', () => {
  it('computes addition and subtraction via UI', async () => {
    const wrapper = mount(Calculator)

    const a = wrapper.get('[data-testid="a"]')
    const b = wrapper.get('[data-testid="b"]')
    const addBtn = wrapper.get('[data-testid="add"]')
    const subBtn = wrapper.get('[data-testid="sub"]')
    const result = wrapper.get('[data-testid="result"]')

    // Set inputs
    await a.setValue('10')
    await b.setValue('4')

    await addBtn.trigger('click')
    expect(result.text()).toBe('14')

    await subBtn.trigger('click')
    expect(result.text()).toBe('6')
  })
})