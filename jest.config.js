export const moduleFileExtensions = ["js", "jsx", "json", "vue", "ts", "tsx"];
export const transform = {
  "^.+\\.vue$": "vue-jest",
  ".+\\.(css|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  "^.+\\.tsx?$": "ts-jest",
  "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
};
export const transformIgnorePatterns = ["/node_modules/"];
export const moduleNameMapper = {
  "^@/(.*)$": "<rootDir>/src/$1"
};
export const snapshotSerializers = ["jest-serializer-vue"];
export const testMatch = [
  "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
];
export const testURL = "http://localhost/";
export const globals = {
  "ts-jest": {
    babelConfig: false
  }
};
