const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
<head>

    <title>123zota</title>
    <style>
      
        body {
            text-align:center;
            background-color:white; 
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; 
            margin: 0;
        }
        .inner-container {
        
            width: 90%; 
            height: 90%; 
            background-color: #f2eaea;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .center-image{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
        }
        h1{
            font-size:50px;
            margin-top: 50px;
        }
        .largre{
            width: 400px; 
            height: 30px; 
            font-size: 20px; 
            padding: 5px; 
        }
        .color{
            margin-top: 20px;
            color:white;
        text-align: center;
        background-color: rgb(24, 150, 179);
        font-size:15px;   
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4 px #1fa7a5;
        transition: background-color 0.3s;
        }
        .color:hover{
            background-color:blue;
        }
        .color:active{
            background-color:rgb(173, 173, 200);
        }
        </style>
</head>
<body>
    <div class="inner-container" >
        
    <div class="center-image">
       <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423472369_1073201563848498_6880293956330268524_n.png?stp=cp0_dst-png&_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_ohc=-Kd6n5BHiJoAX9-dJrp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQr0iWgDyk1EdnkxqTl7nicTX0EuJJHX_fxWmXEOXQQ0g&oe=65ED7902">
    </div>
    <h1><b>Get the invite</b></h1>
    <p>Lorem ipsum dolor sit amet. consextetur adipiscing elit. Aliquam viverra orci ut.</p>
    <br>
    <input type="text" class="largre " placeholder="Enter Email">
    <br>
    <button class="color">REQUEST INVITE</button>
    </div>

</body>
</html>
`
