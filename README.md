# Playwright Test Automation Project

This project contains end-to-end (E2E) test automation scripts built with [Playwright](https://playwright.dev/). It aims to verify web application functionality automatically with high reliability and maintainability.

---

## Features

- Comprehensive E2E test coverage  
- Structured with the Page Object Model (POM) pattern for clear separation of concerns  
- Reusable utility functions and helpers for DRY (Don't Repeat Yourself) principles  
- Retry mechanism to stabilize flaky tests  
- Configurable via environment variables for dynamic test setups  
- Supports parallel test execution and trace capturing for debugging  
  

---

## Project Structure

- `pages/` — Page Object classes representing different UI pages/components  
- `tests/` — Test suites and scenarios  
- `utils/` — Helper functions, custom assertions, and test data files  
- `playwright.config.js` — Centralized Playwright configuration with environment-based overrides  
- `.env` and `.env.local` — Environment-specific settings for URLs, credentials, and other secrets (not committed to source control)  

---
