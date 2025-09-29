# React Native Testing Demo

A minimal React Native-style project showcasing **6 test cases** for:
- **Login** (2 tests)
- **Search** (2 tests)
- **Add to cart** (2 tests)

Tests are written with **Jest** and **@testing-library/react-native**.

## Structure

```
react-native-testing-demo/
  src/components/
    CartProvider.js
    CartBadge.js
    LoginScreen.js
    SearchScreen.js
    ProductListItem.js
  __tests__/
    login.test.js
    search.test.js
    cart.test.js
  package.json
  jest.config (in package.json)
  babel.config.js
```

## Run locally

> You don't need a full native build to run these tests.

```bash
npm install
npm test
```

## Push to GitHub

```bash
git init
git add .
git commit -m "feat: add RN tests for login/search/cart"
git branch -M main
# create a new public repo on GitHub named react-native-testing-demo, then:
git remote add origin https://github.com/<your-username>/react-native-testing-demo.git
git push -u origin main
```

## Notes

- Components are intentionally minimal to keep the focus on testing patterns.
- The cart uses a simple context with quantity aggregation; the badge shows the total item count.