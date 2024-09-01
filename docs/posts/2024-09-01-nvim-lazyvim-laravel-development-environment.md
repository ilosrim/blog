---
aside: false
title: Nvim + LazyVim Laravel Development Environment
author: ilosrim
date: 2024-09-01
subDate: 2024/09/01
image: https://miro.medium.com/v2/resize:fit:720/format:webp/1*fuBQ92euM2g3W6gizteU3A.png
description: ""
category: Dev
tags:
  - nvim
  - lua
  - lazyvim
  - lua-plugin
  - php
  - laravel
---

# {{ $frontmatter.title }}

_[{{ $frontmatter.author }}](mailto:ilosrim@outlook.com)_ | {{ $frontmatter.subDate}}


<!-- ![dNDZJpV.md.png](https://iili.io/dNDZJpV.md.png) -->

<a href="https://freeimage.host/i/dNDZJpV"><img src="https://iili.io/dNDZJpV.md.png" style="width: 100%;" alt="dNDZJpV.md.png" border="0"></a>

Welcome to my optimized Laravel development setup featuring [Nvim](https://neovim.io/) with [LazyVim](https://github.com/LazyVim) integration. This configuration is tailored to enhance productivity and streamline the development workflow for Laravel projects.

### Features:

- **Efficient Code Editing**: Leverage the power of Nvim's fast, extensible code editing with LazyVim's user-friendly enhancements.
- **Laravel-Specific Tools**: Pre-configured tools and plugins to support Laravel development, including syntax highlighting, code completion, and route navigation.
- **Enhanced Productivity**: Enjoy a suite of features aimed at boosting efficiency, such as automatic code formatting, linting, and integrated terminal support.
- **Customizable**: Easily adapt the setup to your preferences with a modular and customizable configuration.

### Setup

- Make a backup of your current Neovim files:
```bash
# required
mv ~/.config/nvim{,.bak}

# optional but recommended
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
```

- Clone the repo
```bash
git clone https://github.com/ilosrim/dotfiles.git ~/.config/nvim
```

- Remove the .git folder, so you can add it to your own repo later
```bash
rm -rf ~/.config/nvim/.git
```

- Start Neovim!
```bash
nvim
```

---

To get started, clone the repository and follow the installation instructions in the [README](https://github.com/ilosrim/dotfiles). This repository includes all necessary configurations, plugins, and dependencies to get your Laravel development environment up and running quickly.

**Repository URL:** [https://github.com/ilosrim/dotfiles](https://github.com/ilosrim/dotfiles)

