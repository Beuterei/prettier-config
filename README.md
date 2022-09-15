[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="https://prettier.io/icon.png" alt="Logo" height="60">

  <h3 align="center">prettier-config</h3>

  <p align="center">
    A shared prettier config for my projects
    <br />
    <br />
    ·
    <a href="https://github.com/beuluis/prettier-config/issues">Report Bug</a>
    ·
    <a href="https://github.com/beuluis/prettier-config/issues">Request Feature</a>
    ·
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

A shared prettier config for my projects. Utilizes [prettier](https://prettier.io/).

<!-- INSTALLATION -->

### Installation

```bash
npm i -D @beuluis/prettier-config
```

<!-- USAGE -->

### Usage

Extend `package.json` file with the following configuration:

```json
{
    "prettier": "@beuluis/prettier-config"
}
```

## Extending

In case you want to extend prettier configurations, do not use the previous integration, but instead create a `.prettierrc.js` and:

```javascript
module.exports = {
    ...require('@beuluis/prettier-config'),
    tabWidth: 2,
};
```

## EditorConfig

Here is a EditorConfig to be used alongside this prettier config.

```
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false

[*.json]
indent_size = 2

[*.{yaml,yml}]
indent_size = 2
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Luis Beu - me@luisbeu.de

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/beuluis/prettier-config.svg?style=flat-square
[contributors-url]: https://github.com/beuluis/prettier-config/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/beuluis/prettier-config.svg?style=flat-square
[forks-url]: https://github.com/beuluis/prettier-config/network/members
[stars-shield]: https://img.shields.io/github/stars/beuluis/prettier-config.svg?style=flat-square
[stars-url]: https://github.com/beuluis/prettier-config/stargazers
[issues-shield]: https://img.shields.io/github/issues/beuluis/prettier-config.svg?style=flat-square
[issues-url]: https://github.com/beuluis/prettier-config/issues
[license-shield]: https://img.shields.io/github/license/beuluis/prettier-config.svg?style=flat-square
