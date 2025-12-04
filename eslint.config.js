import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
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
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react": react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // 들여쓰기: 2칸 (Prettier와 호환)
      "indent": "off",
      // 세미콜론: 사용하지 않음
      "semi": ["error", "never"],
      // 따옴표: 큰따옴표 사용
      "quotes": ["error", "double", { avoidEscape: true }],
      // 줄바꿈: Unix 스타일 (LF)
      "linebreak-style": ["error", "unix"],
      // 마지막 줄바꿈: 필수
      "eol-last": ["error", "always"],
      // 콤마: 마지막에 선택적
      "comma-dangle": ["error", "never"],
      // 공백: 객체 중괄호 앞뒤
      "object-curly-spacing": ["error", "always"],
      // 공백: 배열 대괄호 앞뒤
      "array-bracket-spacing": ["error", "never"],
      // 사용하지 않는 변수: 비활성화
      "no-unused-vars": "off",
      // React 관련 규칙
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];