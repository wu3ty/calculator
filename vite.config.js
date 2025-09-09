import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// If building on GitHub Actions, infer the repo name from env and use it as base.
// For user/org pages (username.github.io), base should be '/'.
const isCI = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/').pop()
const base = isCI ? `/${repoName}/` : '/'

export default defineConfig({
  plugins: [vue()],
  base,
  test: {
    environment: 'jsdom'
  }
})
