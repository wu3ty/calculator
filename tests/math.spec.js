import { describe, it, expect } from 'vitest'
import { add, subtract } from '../src/utils/math'

describe('math utils', () => {
  it('adds numbers', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
  })

  it('subtracts numbers', () => {
    expect(subtract(5, 3)).toBe(2)
    expect(subtract(0, 7)).toBe(-7)
  })
})