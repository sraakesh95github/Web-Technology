module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  transformIgnorePatterns: ['/node_modules/(?!(@storybook/.*\\.vue$))']
}
