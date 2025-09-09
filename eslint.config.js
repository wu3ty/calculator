// eslint.config.js
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node }
    }
  },
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'vue/multi-word-component-names': 'off'   // 👈 disable
    }
  },
  { ignores: ['dist/**', 'node_modules/**'] }
]