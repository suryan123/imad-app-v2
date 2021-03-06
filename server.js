var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
    'html': {
        title:'HTML TRICKS | Learn HTML',
        heading:'HTML',
        date:'',
        content:`
            
               
               
               
               
             <span style="text-decoration: underline;"><h2>Let's Start with HTML</h2></span>
      <hr>
      <br>
       <h3>1.</h3>
       
        <h2>The title attribute</h2>
<p title="THIS IS A TOOLTIP">
Mouse over this paragraph, to display the title attribute as a tooltip.
</p>
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_attributes_title"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>2.</h3>
<p><b>This text is bold</b></p>
<p><i>This text is italic</i></p>
<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>
<hr>
<br>
<h3>3.</h3>
<h2>HTML LINK</h2>
<p><a href="http://suryan123.imad.hasura-app.io/">Visit our HTML tutorial</a></p>
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_w3schools"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>4.</h3>
<h2>Input Type Button</h2>
<input type="button" onclick="alert('Hello World!')" value="Click Me!">
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_button"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>5.</h3>
<h2>HTML IMAGES</h2>
<h2>Spectacular Mountain</h2>
<img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_mountain"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>6.<h3/>
<h2>Colouring Some Lines</h2>
<html>
<head>
<style>
span.note {
    font-size: 120%;
    color: red;
}
</style>
</head>
<body>
<h1>My <span class="note">Important</span> Heading</h1>
<p>This is some <span class="note">important</span> text.</p>
</body>
</html>
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_classes_span"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>7.<h3/>
<h2>HTML Forms</h2>
<html>
<body>
<form action="action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form> 
<p>If you click the "Submit" button, the form-data will be sent to a page called "action_page.php".</p>
</body>
</html>
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>8.</h3>
<h2>HTML 5 Canvas(Stroke Text )</h2>
<html>
<body>
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,50);
</script>
</body>
</html>
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_canvas_tut_text2"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>9.</h3>
<h2>HTML Google Map</h2>
<html>
<body>
<h1>My First Google Map</h1>
<div id="map" style="width:400px;height:400px;background:yellow"></div>
<script>
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>
</body>
</html>
<p><a href="http://www.w3schools.com/html/html_googlemaps.asp"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>10.</h3>
<h2>HTML plug-Ins (Bookmark)</h2>
<html>
<body>
<object width="400" height="50" data="bookmark.swf"></object>
 
</body>
</html>
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_object_plugin"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>Thank You..</h3>
               
               
               
        <a href="/#"><button><h5>To The Top</h5></button></a>       
               
                            
                        
            <p>
            </p>` 
            
            
            
            
                
                
    },
    'css': {
        title:'CSS | Learn CSS',
            heading:'',
            date:'',
            content:`
            
            
            <h1>CSS</h1>
            <hr>
            <br>
            
            <h3>1.</h3>
            
           <h2>Inline CSS</h2>
<p>An inline CSS is used to apply a unique style to a single HTML element.
An inline CSS uses the style attribute of an HTML element.
This example sets the text color of the element to blue:</p>
<h1 style="color:blue;">This is a Blue Heading</h1>
<p><a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_css_inline"><button>Click here to view Code</button></a></p>
<hr>
<br>
            
            
   <h3>2.</h3>
   <h2>CSS Syntax</h2>
   
   <html>
<head>
<style>
p {
    color: red;
    text-align: center;
} 
</style>
</head>
<body>
<p>Hello World!</p>
<p>These paragraphs are styled with CSS.</p>
</body>
</html>
<p><a href="http://www.w3schools.com/css/tryit.asp?filename=trycss_syntax1"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>3.</h3>
<h2>CSS Icons</h2>
<html>
<head>
<title>Bootstrap Icons</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body class="container">
<p>Some Bootstrap icons:</p>
<i class="glyphicon glyphicon-cloud"></i>
<i class="glyphicon glyphicon-remove"></i>
<i class="glyphicon glyphicon-user"></i>
<i class="glyphicon glyphicon-envelope"></i>
<i class="glyphicon glyphicon-thumbs-up"></i>
<br><br>
<p>Styled Bootstrap icons (size and color):</p>
<i class="glyphicon glyphicon-cloud" style="font-size:24px;"></i>
<i class="glyphicon glyphicon-cloud" style="font-size:36px;"></i>
<i class="glyphicon glyphicon-cloud" style="font-size:48px;color:red;"></i>
<i class="glyphicon glyphicon-cloud" style="font-size:60px;color:lightblue;"></i>
</body>
</html>
<p><a href="http://www.w3schools.com/css/css_icons.asp"><button>Click here to view Code</button></a></p>
<hr>
<br>
            
    <h3>4.</h3>
    <h2>CSS Links</h3>
    
    <html>
<head>
<style>
/* unvisited link */
a:link {
    color: red;
}
/* visited link */
a:visited {
    color: green;
}
/* mouse over link */
a:hover {
    color: hotpink;
}
/* selected link */
a:active {
    color: blue;
}
</style>
</head>
<body>
<p><b><a href="http://suryan123.imad.hasura-app.io" target="_blank">This is a link</a></b></p>
<p><b>Note:</b> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective.</p>
<p><b>Note:</b> a:active MUST come after a:hover in the CSS definition in order to be effective.</p>
</body>
</html>
<p><a href="http://www.w3schools.com/css/tryit.asp?filename=trycss_link"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>5.</h3>
<h2>Using CSS to style a HTML Form</h2>
<!DOCTYPE html>
<html>
<style>
input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
input[type=submit]:hover {
    background-color: #45a049;
}
div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
<body>
<div>
  <form action="action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname">
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname">
    <label for="country">State</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit">
  </form>
</div>
</body>
</html>
<p><a href="http://www.w3schools.com/css/css_form.asp"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>6.</h3>
<h2>CSS ToolTip</h2>
<html>
<style>
.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: -5px;
    left: 105%;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
}
</style>
<body style="text-align:center;">
<h2>Right Tooltip</h2>
<p>Move the mouse over the text below:</p>
<div class="tooltip">Hover over me 123
  <span class="tooltiptext">Tooltip text</span>
</div>
</body>
</html>
<p><a href="http://www.w3schools.com/css/tryit.asp?filename=trycss_tooltip_right"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h2>7.</h2>
<h3>Rounded Images</h3>
<html>
<head>
<style>
img {
    border-radius: 50%;
}
</style>
</head>
<body>
<h2>Rounded Images</h2>
<p>Use the border-radius property to create circled images:</p>
<img src="paris.jpg" alt="Paris" width="400" height="300">
</body>
</html>
<p><a href="http://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_circle"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>8.</h3>
<h2>Text Decoration</h2>
<br />
<a href="#">sample link</a>
<span class="sample">sample text</span>
<br/><br/>
<span class="through">to be cut text</span>
<span class="wavy">wavy line</span>
<p><a href="http://codepen.io/rpsthecoder/pen/YXzMQw"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>9.</h3>
<h2>Select a fruit</h2>
<fieldset>
  <legend>Select a fruit</legend>
  <input type="radio" name="animal" value="Mango" />
  <br />
  <input type="radio" name="animal" value="Apple" />
  <br />
  <input type="radio" name="animal" value="Grapes" />
  <br />
</fieldset>
<p><a href="http://codepen.io/rpsthecoder/pen/bdGXWr"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h3>10.</h3>
<h2>Quoting A Quote</h2>
<p>
  <q>By your <q>powers</q> combined <q>I am <q>Captain Planet</q></q>
  </q>
</p>
<img src="http://upload.wikimedia.org/wikipedia/en/1/1e/Captain_Planet_and_the_Planeteers_title.jpg" alt="captain planet" height="100" />
<p><a href="http://codepen.io/rpsthecoder/pen/VLwNzv"><button>Click here to view Code</button></a></p>
<hr>
<br>
<h1>Thanks.....</h1>
<hr>
<br>
<script src="https://apis.google.com/js/plusone.js"></script>
<div id="comments"></div>
<script>
gapi.comments.render('comments', {
    href: window.location,
    width: '624',
    first_party_property: 'BLOGGER',
    view_type: 'FILTERED_POSTMOD'
});
</script>
            
            
            
            
          <a href="/#"><button><h5>To The Top</h5></button></a>  
            
            
            
            
            
            
            
            
            
                <p>
                </p>`
       },
    'javascript': {
        title:'JAVASCRIPT | Learn JS',
            heading:'',
            date:'',
            content:`
            
            
            <h1>JAVASCRIPT</h1>
            <hr>
            <br>
            
            
       
<body>
<iframe height="1500px" width="100%" src="https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/" name="iframe_a"></iframe>
<p></p>
</body>
<h2>Thanks...</h2>
            
            <hr>
            <br>
            
<script src="https://apis.google.com/js/plusone.js"></script>
<div id="comments"></div>
<script>
gapi.comments.render('comments', {
    href: window.location,
    width: '624',
    first_party_property: 'BLOGGER',
    view_type: 'FILTERED_POSTMOD'
});
</script>
            
            <a href="/#"><button><h5>To The Top</h5></button></a>
            
            
            
            
                <p>
                </p>`
   
   
   
   
   
  
   
   
   
   
   
    },
    'about-me': {
        title:'ABOUT ME | Suryan',
            heading:'',
            date:'',
            content:`
            
            <h1>ABOUT ME</h1>
            <hr>
            <br>
            
          <body>
<html>
<head>
    <title>About ME</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="wrapper">
    
	<div id="header">
		
		<div id="bg"></div>
	</div>
	
	<div id="main-content">
		<div id="left-column">
			<div id="logo">
			Welcome to Suryan  Jayaprakash's  WebApp
			</div>
			<div class="box">
        		<h1>What You'll Find Here</h1>
        		<p>This is my space. Here are some of my interests: </p>
				<ul style="margin-top:10px;">
					<li>HTML</li>
					<li>JAVASCRIPT</li>
					<li>CSS</li>
					<li>Coding</li>
					<li>Website Building</li>
				</ul>
			</div>
			
			<p>
				
				
			</p>
		</div>
		<div id="right-column">
			<div id="main-image"><img src="https://s23.postimg.org/v2vbihqh7/adjgqgfkj.jpg
" width="160" height="188" /></div>
			<div class="sidebar">
				<h3>Blurb About Me</h3>
				<p>My name is Suryan Jayaprakash. And I love Website Buiilding.</p>
				<h3>Find Me Elsewhere</h3>
				<div class="box">
					<ul>
						<li><a href="http://facebook.com/" target="_blank">Facebook</a></li>
						<li><a href="http://twitter.com" target="_blank">Twitter</a></li>
						<li><a href="http://linkedin.com" target="_blank">LinkedIn</a></li>
						<li><a href="http://tumblr.com" target="_blank">Tumblr</a></li>
						<li><a href="http://pinterest.com" target="_blank">Pinterest </a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
		Copyright &copy; 2016 HTML TRICKS. All rights reserved.<br/>
		
	</div>
</div>
</body>
</html>
<p></p>
</body>
            
            
          <hr>
          <br>
          
    <script src="https://apis.google.com/js/plusone.js"></script>
<div id="comments"></div>
<script>
gapi.comments.render('comments', {
    href: window.location,
    width: '624',
    first_party_property: 'BLOGGER',
    view_type: 'FILTERED_POSTMOD'
});
</script>        
            
            
            
            
            
            
            
            
            
            
            
            
                <p>
                </p>`
                
                
                
    },
    'contact-me': {
        title:'CONTACT ME | Suryan',
            heading:'',
            date:'',
            content:`
            
            
           
            
            
            <h1>CONTACT ME</h1>
            <hr>
            <br>
            
           
<!-- www.123contactform.com script begins here -->
<script type="text/javascript" defer src="//www.123contactform.com/embed/2387061.js" data-role="form"></script>
<p> </p><!-- www.123contactform.com script ends here -->
            
            
            
            
            
            
            
            
            
            
                <p>
                </p>`
   
   
    
    },
    'register': {
        title:'REGISTER | HTML TRICKS',
            heading:'',
            date:'',
            content:`
            
            
           <h1>REGISTER</h1>
           
           
<html>
<body>
<p>Click the below button to Register...</p>
<button onclick="myFunction()">CLICK HERE TO REGISTER</button>
<p id="demo"></p>
<script>
function myFunction() {
    var person = prompt("Please enter your name", "");
    var password = prompt("Please enter a password","")
    var password = prompt("Please enter the password once again","")
    
     
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + " You are now Registered, and your password is  " + password + "."
          
  
    
   
    }
}
</script>
</body>
</html>
            
            
           
            
            
            
            
            
            
            
            
            
            
                <p>
                </p>`
   
    

        
    },   
    'login': {
        title:'LOGIN | HTML TRICKS',
            heading:'',
            date:'',
            content:`
            
            
           
            
            
           
            <html>
<body>
<p>Click the below button to Log in...</p>
<button onclick="myFunction()">CLICK HERE TO LOG IN</button>
<p id="demo"></p>
<script>
function myFunction() {
    var person = prompt("Please enter your name", "");
    var password = prompt("Please enter your password","")
    
    
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + " You are now logged in."
          
        
        
    
  
    
   
    }
}
</script>
</body>
</html>
            
            
            
            
            
            
            
            
            
                <p>
                </p>`
   
    
    }
    
   
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
         <div>
             <a href="/">HOME</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/html">HTML</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/css">CSS</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/javascript">JAVASCRIPT</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/about-me">ABOUT ME</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/contact-me">CONTACT ME</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/register">REGISTER</a>
             <span style="display:inline-block; width: 100;"></span>
             <a href="/login">LOG IN</a>
         </div>
         <h3>
            ${heading}
         </h3>
         <div>
            ${date}
         </div>
         <div>
            <p>
                ${content}  
            </p>
         </div>
        </div>
    </body>
    </html>
 `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter++;
    res.send(counter.toString());
});

app.get('/favicon.ico', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

var names = [];
app.get('/submit-name',function(req,res){
    //Get the namefrom the request
    var name = req.query.name;
    names.push(name);
    //JSON:Javascript Object Notation
    res.send(JSON.stringify(names));
});
app.get('/:articleName',function (req,res){
  var articleName=req.params.articleName;    
  res.send(createTemplate(article[articleName]));
});













app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
