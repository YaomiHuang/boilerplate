// .eslintrc.js

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
    'prettier', //永远将 prettier 放置在 extends 的末尾，这是为了关闭其与 ESLint 有冲突的规则。
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // 在这里添加需要覆盖的规则
  },
};
