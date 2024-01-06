### Q1 describe the main difference between the CSS Flexbox layout model and the CSS Grid Layout model. When would you choose to use one over the other?


### CSS Flexbox vs. CSS Grid Layout

The main difference between the CSS Flexbox layout model and the CSS Grid Layout model lies in their approach to organizing and laying out elements on a webpage.

#### Flexbox:

- **One-dimensional layout:**
  - Flexbox is designed for one-dimensional layouts, either in a row (horizontal) or column (vertical) direction.

- **Content order:**
  - The order of the elements in the HTML source can be different from their display order using flex properties.

- **Responsive design:**
  - It is well-suited for creating flexible and responsive page components, such as navigation bars, sidebars, and flexible content containers.

#### Grid:

- **Two-dimensional layout:**
  - Grid is designed for two-dimensional layouts, allowing you to define both rows and columns for your layout.

- **Precise control:**
  - It provides more control over the placement of items in both the rows and columns, making it suitable for complex layouts.

- **Content order:**
  - The order of the elements in the HTML source is typically the order in which they are displayed on the grid, although you can still control it using grid properties.

- **Overall page layout:**
  - Grid is great for creating overall page layouts, dividing the page into regions, and positioning items with precision.

#### Choosing between Flexbox and Grid:

- **Use Flexbox when:**
  - Dealing with one-dimensional layouts (rows or columns).
  - Creating flexible and dynamic components within a container.
  - You need content to adjust its size to fit the available space.
  - Working with items that can have different dimensions.

- **Use Grid when:**
  - Dealing with two-dimensional layouts, requiring rows and columns.
  - Creating complex and structured page layouts.
  - Precise control over the placement of items in both rows and columns is necessary.
  - Working with a grid system that aligns content in a more structured way.

In practice, it's common to use a combination of both Flexbox and Grid within a webpage, as they complement each other well. Flexbox is often used for the components within a layout, while Grid is used to structure the overall page layout.

---

### Q2 Explain the role of the following key properties int the Flexbox Luout model.
        1. Justify-content
        2. align-items
        3. gap
        4. flex-direction
        5. flex-wrap


### Flexbox Layout Model Properties

#### 1. `justify-content`

The `justify-content` property in Flexbox is used to align items along the main axis of the container. It defines how the extra space in the container is distributed among the items. This property can be set to values such as `flex-start` (default), `flex-end`, `center`, `space-between`, and `space-around`, among others.

Example:
```css
.container {
  display: flex;
  justify-content: center;
}
```

#### 2. `align-items`

The `align-items` property in Flexbox is used to align items along the cross-axis of the container. It defines how the items should align vertically within the container. Values include `flex-start`, `flex-end`, `center`, `baseline`, and `stretch`.

Example:
```css
.container {
  display: flex;
  align-items: center;
}
```

#### 3. `gap`

The `gap` property in Flexbox (and Grid) is used to define the spacing between items. It sets the space between the elements, both along the main and cross axes. It's a shorthand property for `row-gap` and `column-gap` in Flexbox.

Example:
```css
.container {
  display: flex;
  gap: 10px;
}
```

#### 4. `flex-direction`

The `flex-direction` property in Flexbox defines the direction of the main axis in the flex container. It can be set to values like `row` (default), `row-reverse`, `column`, and `column-reverse`. This property determines if the items should be placed horizontally or vertically.

Example:
```css
.container {
  display: flex;
  flex-direction: column;
}
```

#### 5. `flex-wrap`

The `flex-wrap` property in Flexbox controls whether the flex container should wrap the items onto multiple lines or not. Values include `nowrap` (default), `wrap`, and `wrap-reverse`. It is useful when dealing with a container that may not have enough space for all items in a single line.

Example:
```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

These properties, when used together, provide powerful tools for creating flexible and responsive layouts in a Flexbox container. Adjusting these properties allows you to control the alignment, spacing, and direction of the flex items within the container.

---

### Q3: Write the code to center a div using CSS Flexbox.

### codes to center the div using CSS flexbox
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .child-container{
            height: 300px;
            width: 300px;
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="child-container">

        </div>
    </div>
</body>
</html>

```






