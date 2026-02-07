import { defineConfig } from 'cspell';

export default defineConfig({
  // Since cSpell doesn't appear to honor global gitignores, we manually ignore
  // various editor config directories, amongst other things.
  ignorePaths: [
    '.git/',
    '.idea/',
    '.vscode/',
    'pnpm-lock.yaml'
  ],
  language: 'en-US',
  words: [
    'Benner',
    'RadHam',
    'Nuxt',
    'Sveltekit',
    'Vite',
    'dotenv',
    'eslintcache',
    'jscoverage',
    'jspm',
    'stylelintcache',
    'pids',
    'vitepress',
    'vuepress',
    'wscript'
  ],
  version: '0.2'
});
