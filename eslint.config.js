import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // 들여쓰기: 2칸
      "indent": ["error", 2, { SwitchCase: 1 }],
      // 세미콜론: 사용하지 않음
      "semi": ["error", "never"],
      // 따옴표: 작은따옴표 사용
      "quotes": ["error", "single", { avoidEscape: true }],
      // 줄바꿈: Unix 스타일 (LF)
      "linebreak-style": ["error", "unix"],
      // 마지막 줄바꿈: 필수
      "eol-last": ["error", "always"],
      // 콤마: 항상 마지막에
      "comma-dangle": ["error", "always-multiline"],
      // 공백: 객체 중괄호 앞뒤
      "object-curly-spacing": ["error", "always"],
      // 공백: 배열 대괄호 앞뒤
      "array-bracket-spacing": ["error", "never"],
      // 사용하지 않는 변수: 경고
      "no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
      // React 관련 규칙
      "react/prop-types": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];