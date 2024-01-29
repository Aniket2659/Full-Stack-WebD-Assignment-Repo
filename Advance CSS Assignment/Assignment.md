# Advance Css Assignment

### Q1 Problem Statement

Explain the purpose of using the var() function in css. Also you have created two buttons with id named
primaryBtn and secondaryBtn which should be given background colors using the var() function. The color
code for primaryColor is #00b7ff and secondaryColor is #6c757d.

````
The `var()` function in CSS is used for defining and applying custom properties (also known as CSS variables) within CSS stylesheets. It allows you to define a value once and then reference it multiple times throughout your stylesheet, providing a centralized and easily modifiable way to manage styles.

Here's a breakdown of its purpose and usage:

1. **Centralization of Values**: With `var()`, you can define a value in one place (typically in the `:root` pseudo-class or within a specific scope) and then use that value wherever needed in your stylesheet. This centralization makes it easier to manage and update values, as you only need to change them in one location.

   ```css
   :root {
       --primary-color: #007bff;
   }

   .button {
       color: var(--primary-color);
   }

   .link {
       border-bottom: 2px solid var(--primary-color);
   }
````

2. **Dynamic Value Updates**: CSS variables can be updated dynamically using JavaScript, allowing for dynamic theming or adjustments based on user interactions or other events.

   ```javascript
   document.documentElement.style.setProperty("--primary-color", "red");
   ```

3. **Fallback Values**: You can provide fallback values within the `var()` function, which are used when the custom property isn't defined or supported by the browser. This ensures graceful degradation in older browsers.

   ```css
   .button {
     color: var(
       --primary-color,
       #007bff
     ); /* Fallback to #007bff if --primary-color is not defined */
   }
   ```

4. **Scoped Variables**: CSS variables can be scoped within certain elements, allowing you to define and use them within a specific context without affecting other parts of the document.

   ```css
   .container {
     --primary-color: #007bff;
   }

   .button {
     color: var(--primary-color);
   }
   ```

In summary, the `var()` function in CSS provides a powerful mechanism for centralizing and managing values, promoting code maintainability, reusability, and flexibility in styling web pages.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment Question no-1 </title>
    <style>
        :root {
            --primarycolor: #00b7ff;
            --secondraycolor: #6c757d;
        }

        div button {
            font-size: 25px;
            padding: 5px 20px;
            border: none;
            color: white;
            border-radius: 10px;
        }

        #primary-button {
            background-color: var(--primarycolor);
        }

        #secondary-button {
            background-color: var(--secondraycolor);
        }
    </style>
</head>

<body>
    <div>
        <button class="button" id="primary-button">primary-button</button>
        <button class="button" id="secondary-button">secondary-button</button>
    </div>
</body>

</html>


```

![output](<./output/Screenshot%20(347).png>)

### Q2 Problem Statement

Create a 3D cube using the transform property of CSS.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment Question no-2 </title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        .scene {
            perspective: 1000px;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
            transform: rotateX(20deg) rotateY(30deg);
        }

        .face {
            position: absolute;
            width: 200px;
            height: 200px;
            background-color: rgba(0, 123, 255, 0.7);
            border: 1px solid #666;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
            opacity: 0.8;
        }

        .front {
            transform: translateZ(100px);
        }

        .back {
            transform: rotateY(180deg) translateZ(100px);
        }

        .right {
            transform: rotateY(90deg) translateZ(100px);
        }

        .left {
            transform: rotateY(-90deg) translateZ(100px)
        }

        .top {
            transform: rotateX(90deg) translateZ(100px);
        }

        .bottom {
            transform: rotateX(-90deg) translateZ(100px);
        }
    </style>
</head>

<body>
    <div class="scene">
        <div class="cube">
            <div class="face front">front</div>
            <div class="face back">back</div>
            <div class="face top">top</div>
            <div class="face bottom">bottom</div>
            <div class="face right"> right</div>
            <div class="face left">left</div>
        </div>
    </div>
</body>

</html>
```

![](<./output/Screenshot%20(348).png>)

### Q3 Problem Statement

Create a simple circular loader which will rotate continuously to look like a loading screen on a website. Assignment Question Full Stack Web Development ?

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment Question no-3 </title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        .loader {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: #007bff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    </style>
</head>

<body>
    <div class="loader"></div>
</body>

</html>

```

![ouput](<./output/Screenshot%20(350).png>)

### Q4 Problem Statement

You have to visit the PW Skills website (https://pwskills.com/) and have to hide the logo by using the developer
tool. This should be done using the css and developer tool only, use of javascript is prohibited.

![output](<./output/Screenshot%20(345).png>)

### Q5 Problem Statement

You have to visit the PW Skills website (https://pwskills.com/) and have to change the content of the ‘Login /
Register’ button to ‘Connect with us’ using the developer tool. This should be done using the elements of
developer tools only, use of javascript is prohibited.

![output](<./output/Screenshot%20(346).png>)
