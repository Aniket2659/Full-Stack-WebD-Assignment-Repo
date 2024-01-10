## Media and Forms Assignment

### 1. Create an image gallery that holds multiple images.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment Question <no-1></no-1></title>
    <style>
        img{
            
            height: 400px;
            width: 500px;
        }
    </style>
</head>
<body>
    <img src="./assets/04241279f5a85323615d383e6a55f151.jpg" alt="random Image">
    <img src="./assets/download.jpeg" alt="random Image">
    <img src="./assets/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.webp" alt="random image">
    <img src="./assets/flowers-276014_640.jpg" alt="random image">
    <img src="./assets/images.jpeg " alt="random image">
    <img src="./assets/jonatan-pie-3l3RwQdHRHg-unsplash.jpg"  alt="random image">
    <img src="./assets/W4A2827-1-1500x1000.jpg " alt="Random image">
</body>
</html>
```
![photo](./output/Screenshot%20(304).png)


---

### 2. Use video and audio tags to display video and audio with the playback, and audio controls

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment Question no2</title>

</head>
<body>
    <audio src="./assets/Guli Mata(PagalWorld.com.pe).mp3" controls>Audio Song</audio>
    <video src="./assets/_3_Peg_Sharry_Mann__(Full_Video)___Mista_Baaz___Parmish_Verma___Latest_Punjabi_S.mp4" controls>video</video>
</body>
</html>

```
![Screenshort](./output/Screenshot%20(303).png)


---

### 3. Modify the previous assignment so that the audio and video play automatically as the page is loaded and they should play infinitely ? 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment Question no2</title>

</head>
<body>
    <audio src="./assets/Guli Mata(PagalWorld.com.pe).mp3" controls muted autoplay loop >Audio Song</audio>
    <video src="./assets/_3_Peg_Sharry_Mann__(Full_Video)___Mista_Baaz___Parmish_Verma___Latest_Punjabi_S.mp4" controls muted autoplay loop >video</video>
</body>
</html>

```
![Screenshort](./output/Screenshot%20(303).png)


---

### 4. Use iframe to embed the PhysicsWallah Wikipedia page properly.

```
<!DOCTYPE html>

<html lang="en">


<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Assignment 1</title>

</head>


<body>

  <iframe src="https://en.wikipedia.org/wiki/Physics_Wallah" style="border:0px #ffffff none; height: 100vh; width: 100vw;" 
name="myiFrame"

    scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" 
width="600px"

    allowfullscreen></iframe>

</body>


</html>

```

![Screenshort](./output/Screenshot%20(305).png)

---

### 5. Create a sign-up and sign-in form with proper validation.
    a. Sign-up form should have a first name, last name, email, password, confirm password, age, gener, ans agree to terms and conitions fields at minimum (you can add any other if you like)
    b. Sign-in form should have email and password fields.

a. 
```
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-in Demo </title>
</head>
<body>
    <form action="post">    
        <label for="fname">First Name: <input type="text" name="fname" placeholder="eg. Jonysince" id="fname" required minlength="3" maxlength="20"/></label>
        <br>
        <label for="lname">Last Name: <input type="text" placeholder="eg. Khalifa" id="lname" required minlength="3" maxlength="20"></label>
        <br>
        <label for="email">Email: <input type="text" placeholder="Jonysince@gmail.com" id="email" required></label>
        <br>
        <label for="age">Age: <input type="number" placeholder="eg. 25" id="age" name="age" required min="10" max="150"></label>
        <br>
        <label for="gender">Gender: 
            <input type="radio" value="Male" name="gender" id="male" checked>
            <label for="male">Male
            <input type="radio" name="gender" id="female" value="female">
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other">
            <label for="other">Other</label>
        </label>
        <br>
        
    </label>
    <label for="password">Password: <input type="text" name="password" placeholder="********" id="password" required min="8" max="20"></label>
    <br>
    <label for="password">Confirm Password: <input type="text" name="confirmpassword" id="confirmpassword" required></label>
    <br>
    <label for="terms">Terms: <input type="checkbox" name="tern" id="terms" required> I agree to terms and Conditions</label>
    <br>
    <button type="submit">Register</button>

    </form>
    
</body>
</html>
    
```

![ScreenShort](./output/Screenshot%20(306).png)

### b.
```
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign-IN demo </title>
</head>
<body style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h1>Sign in Form</h1>
    <form action="" method="post" style="border: 2px solid black; background-color: grey; margin-bottom: 10px;">
        <label for="email">Email: <input type="email" name="email" id="email" placeholder="registered email" required ></label>
        <br>
        <label for="password">Password <input type="text" name="password" id="password" placeholder="password" required></label>
        <br>
        
    </form>
    <button type="submit">Submit</button>
</body>
</html> 
```

![ScreenShort](./output/Screenshot%20(307).png)