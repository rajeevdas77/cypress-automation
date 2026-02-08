# 🚀 Cypress Automation Framework – OrangeHRM (Real‑World)

This repository contains a **real‑world Cypress automation framework** designed for beginners and professionals.
It follows **industry best practices** and mirrors what you already built in CYPRESS.

---

## ✅ Framework Features

* Page Object Model (POM)
* Separate locator files
* Custom commands
* Fixtures & test data
* Data‑driven testing
* API + UI automation
* Multiple browsers (Chrome / Electron / Firefox*)
* CI/CD ready (GitHub Actions)
* Clean & scalable structure

---

## 🧩 Project Structure

```
cypress-orangehrm/
│
├── cypress.config.js
├── package.json
├── README.md
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js              # UI login test
│   │   └── api-login.cy.js          # API + UI test
│   │
│   ├── pages/
│   │   └── loginPage.js             # Page Object
│   │
│   ├── locators/
│   │   └── loginLocators.js         # Locators only
│   │
│   ├── fixtures/
│   │   └── loginData.json           # Test data
│   │
│   ├── support/
│   │   ├── commands.js              # Custom commands
│   │   └── e2e.js                   # Global setup
│   │
│   └── api/
│       └── authApi.js               # API helper
│
└── .github/workflows/cypress.yml    # CI/CD
```

---

## 🛠️ Prerequisites

* Node.js (v16+)
* VS Code
* Git

---

## 📥 Installation

```bash
git clone <repo-url>
cd cypress-orangehrm
npm install
```

```





## 📌 API + UI Test


```

---

## ▶️ Run Tests

### Open Cypress UI

```bash
npx cypress open
```

### Run headless

```bash
npx cypress run
```

### Run Chrome only

```bash
npx cypress run --browser chrome
```

### Run a Specific Spec File

```bash
npx cypress run --spec cypress/e2e/login/login.cy.js

```

---

## 🚀 CI/CD (GitHub Actions)

### `.github/workflows/cypress.yml`

```yaml
name: Cypress Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npx cypress run
```

---


## 👨‍💻 Author

**Rajeev – QA Automation Engineer**

---

## 📌 Notes

* This framework is scalable and enterprise‑ready
* Easy migration from Playwright → Cypress
* Supports CI/CD & data‑driven testing

---

Happy Testing with Cypress 🚀
