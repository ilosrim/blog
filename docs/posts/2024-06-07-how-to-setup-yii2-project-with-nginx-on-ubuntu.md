---
aside: false
title: How to Setup Yii2 Project with Nginx on Ubuntu
author: ilosrim
date: 2024-06-07
subDate: 2024/06/07
image: https://miro.medium.com/v2/resize:fit:720/format:webp/1*My3hUakn4-UaswsPEJTUHg.jpeg
description: ""
category: Dev
tags:
  - php
  - yii2
  - nginx
---

# {{ $frontmatter.title }}

_[{{ $frontmatter.author }}](mailto:ilosrim@outlook.com)_ | {{ $frontmatter.subDate}}

## Pre-requisites

1. PHP installed. I have created this document with PHP 7.4 installed on my server
2. Yii2 project and know to set it up.
3. PHP fpm installed

## Steps

1. Install Nginx

```bash
sudo apt install nginx
```

2. Clone your project in `/home/username/codes` folder

```bash
git clone <repo_url>
```

3. create Nginx conf files for backend and frontend

> File: /etc/nginx/sites-available/backend

```bash
server {
     listen 80;
     server_name <your_backend_url>;
     root /home/username/codes/<project_name>/backend/web;
     index index.php;

     location / {
         try_files $uri $uri/ /index.php?$args;
     }

     location ~ \.php$ {
         include snippets/fastcgi-php.conf;
         fastcgi_pass unix:/run/php/php7.4-fpm.sock;
     }
}
```

> File: /etc/nginx/sites-available/frontend

```bash
server {
    listen 80;
    server_name <your_frontend_url>;
    root /home/username/codes/<project_name>/frontend/web;
    index index.php;

    add_header 'Access-Control-Allow-Origin' "*";
    add_header 'Access-Control-Allow-Methods' "GET,POST,PUT,DELETE,OPTIONS";
    add_header 'Access-Control-Allow-Headers' "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, api-key, auth-key";


    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.4-fpm.sock;
    }
}
```

4. Create following symlinks

```bash
sudo ln -s /etc/nginx/sites-available/backend /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/frontend /etc/nginx/sites-enabled/
```

5. Add ubuntu to www-data group

```bash
sudo usermod -a -G www-data username
```

6. Give permissions to backend/assets and frontend/assets folder

```bash
sudo chmod -R 777 /home/username/codes/<project_name>/frontend/web/assets/
sudo chmod -R 777 /home/username/codes/<project_name>/backend/web/assets/
```

7. Restart Nginx

```bash
sudo service nginx restart
```
