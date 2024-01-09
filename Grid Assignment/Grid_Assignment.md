## Grid Assignment
---

### Q3 : Explain the use of grid-auto-row and grid-auto-column using code examples.

Certainly! Here are the examples using Markdown syntax:

### Example 1: Using `grid-auto-row`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 100px 100px; /* Explicitly defined columns */
      grid-auto-rows: 50px; /* Size of implicitly generated rows */
      gap: 10px;
    }

    .item {
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

</body>
</html>
```

### Example 2: Using `grid-auto-column`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .grid-container {
      display: grid;
      grid-template-rows: 100px 100px; /* Explicitly defined rows */
      grid-auto-columns: 50px; /* Size of implicitly generated columns */
      gap: 10px;
    }

    .item {
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>

</body>
</html>
```


---

### Q5: Explain the difference between justify-items and justify-self using code examples.



### `justify-items`

The `justify-items` property is used to align the content of all grid items within the grid container along the inline (row) axis. It sets the default alignment for all items, which can be overridden by individual items using `justify-self`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      justify-items: center; /* Default alignment for all items */
      gap: 10px;
    }

    .item {
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

</body>
</html>
```

In this example, all grid items are horizontally centered within their respective columns due to the `justify-items: center;` property.

### `justify-self`

The `justify-self` property is used to align a specific grid item within the grid container along the inline (row) axis. It allows individual items to override the default alignment set by `justify-items`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 10px;
    }

    .item {
      background-color: lightblue;
      padding: 10px;
     
    }
    .item2{
       justify-self: end; /* Individual item alignment */
    }
  </style>
</head>
<body>

<div class="grid-container">
  <div class="item">1</div>
  <div class="item item2">2</div>
  <div class="item">3</div>
</div>

</body>
</html>
```

In this example, the `justify-self: end;` property is applied to the second grid item, causing it to be aligned to the end of its column while the others remain centered.

These examples demonstrate the use of `justify-items` and `justify-self` with CSS Grid, highlighting the default alignment for all items and the ability to customize the alignment for individual items.