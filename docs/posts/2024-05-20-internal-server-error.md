---
aside: false
title: Internal server error SQLSTATE[22001]
author: ilosrim
date: 2024-05-20
subDate: 2024/05/20
image: https://user-images.githubusercontent.com/62628408/201538130-a1008969-06ae-4aad-9ea0-b77384d6bac1.png
description: "String data, right truncated: 1406 Data too long for column 'coulmn_name' at row 1 !!"
category: Dev
tags:
  - php
  - mysql
---

# {{ $frontmatter.title }}

_{{ $frontmatter.description }}_

_[{{ $frontmatter.author }}](mailto:ilosrim@outlook.com)_ | {{ $frontmatter.subDate}}

The error message you received indicates that the data being inserted into the `column_name` column is too long for the column's specified length. This causes a `String data, right truncated` error.

To resolve this issue, you need to adjust the column size in the database table to accommodate the longer file paths being stored. You can alter the table and increase the size of the `your_column_name` column.

Change your `your_column_name` length size by using following SQL query:

```SQL
ALTER TABLE your_table_name MODIFY COLUMN your_column_name VARCHAR(500);
```

Or change it by using SQL Database Graphical view:

First go to Database > `your_table_name` > Structure. Then click on “change” button of your `your_column_name`.

![image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*ARlewxL2kUygS0o9e069hQ.png)

Then change the varchar/other length of `your_column_name` as following and click on save.

![image](https://miro.medium.com/v2/resize:fit:720/format:webp/1*dkxov565BZ7d0nbsS73vbw.png)

If you’re using a migration file to create the `your_table_name` table, you can modify the migration file to update the column size. For example, if the current column definition is something like this:

```php
$table->string('your_column_name', 255);
```

You can increase the size to a larger value like this:

```php
$table->string('your_column_name', 500);
```

If you have already run the migration and have existing data in the table, you might need to manually update the column size using a database management tool or by creating a new migration to modify the column size.

Remember to adjust the column size in both the migration file and the actual table schema to ensure they match.

After updating the column size, try running the migration or updating the table manually, and then attempt the API request again. The error should be resolved, and the data should be inserted successfully into the database.
