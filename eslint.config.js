import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  { files: ['**/*.{js,mjs,cjs,vue}'] },

  {
    languageOptions: { globals: globals.browser },
  },

  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/no-reserved-component-names': 0,
      'prettier/prettier': 'warn',
      'vue/no-multiple-template-root': "off",
    },
  },
  {
    ignores: [
      'node_modules',
      'public',
      '/.git',
      '/.vscode',
      '.nuxt',
      'server',
      'nuxt.config.ts',
    ],
  },
]);
