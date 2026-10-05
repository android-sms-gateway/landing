# 🖥️ SMSGate Landing Page

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

The public marketing site for SMS Gateway for Android, published at https://sms-gate.app/. A dependency-free static site - plain HTML, CSS, and JavaScript with no framework and no build step.

## 📖 About

The landing page introduces the SMSGate ecosystem, lists features and FAQs, and links to downloads and documentation. Everything is hand-written: semantic HTML in [index.html](index.html), a modular CSS system under `styles/`, and two small scripts for theme toggling and clipboard copy. Netlify-compatible hosting configuration (`_headers`, `_redirects`) ships with the site.

## 📚 Table of Contents

- [📖 About](#-about)
- [📚 Table of Contents](#-table-of-contents)
- [⭐ Features](#-features)
- [📦 Prerequisites](#-prerequisites)
- [🚀 Quickstart](#-quickstart)
- [🚀 Build and Deploy](#-build-and-deploy)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [⚖️ License](#️-license)

## ⭐ Features

- Static site: no framework, no dependencies, no build step
- Light/dark/system theme toggle via [scripts/theme.js](scripts/theme.js)
- Copy-to-clipboard for code snippets via [scripts/clipboard.js](scripts/clipboard.js)
- SEO: meta/OpenGraph/Twitter tags, `sitemap.xml`, `robots.txt`, JSON-LD (SoftwareApplication + FAQPage)
- Netlify-compatible deployment config: security headers, immutable asset caching, `/download` redirect to the latest APK

## 📦 Prerequisites

None - any static file server or a modern browser.

## 🚀 Quickstart

Serve the repository directory with any static file server:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080.

## 🚀 Build and Deploy

There is no build step: publish the repository contents as-is to any static hosting provider that honors `_headers` and `_redirects` (Netlify, Cloudflare Pages, etc.). The production site is https://sms-gate.app/; ecosystem documentation lives at [docs.sms-gate.app](https://docs.sms-gate.app/).

## 📚 Documentation

- [Central docs](https://docs.sms-gate.app/)
- [GitHub repository](https://github.com/android-sms-gateway/landing)

## 🤝 Contributing

Contributions are welcome. Open an issue or pull request; follow the [README style guide](https://docs.sms-gate.app/).

## ⚖️ License

Apache-2.0.

<!-- Reference-style badge URLs: style=for-the-badge is mandatory -->
[contributors-shield]: https://img.shields.io/github/contributors/android-sms-gateway/landing?style=for-the-badge
[contributors-url]: https://github.com/android-sms-gateway/landing/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/android-sms-gateway/landing?style=for-the-badge
[forks-url]: https://github.com/android-sms-gateway/landing/network/members
[stars-shield]: https://img.shields.io/github/stars/android-sms-gateway/landing?style=for-the-badge
[stars-url]: https://github.com/android-sms-gateway/landing/stargazers
[issues-shield]: https://img.shields.io/github/issues/android-sms-gateway/landing?style=for-the-badge
[issues-url]: https://github.com/android-sms-gateway/landing/issues
[license-shield]: https://img.shields.io/github/license/android-sms-gateway/landing?style=for-the-badge
[license-url]: https://github.com/android-sms-gateway/landing/blob/main/LICENSE
