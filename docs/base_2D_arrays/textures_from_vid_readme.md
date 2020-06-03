<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>2D Texture Arrays</h1>
<h2>Loading Textures from Video Files</h2>
<hr>
<p>
	<i> Note: this example may appear blank if you are using MacOS or have an older GPU.</i>
	<br> <br>
	Another interesting approach for working with instances is thinking about how to include textures. This approach uses a 2D array that's loaded into memory with a <a href="https://docs.derivative.ca/Texture_3D_TOP">texture3D TOP</a>. This example uses <a href="https://docs.derivative.ca/Pre-Filling">pre-filling</a> to fill our <b>texture3D TOP </b> with all of our images. If you haven't used pre-filling before it's worth taking a closer look at that article to understand the mechanics.
	<br><br>
	Important for us here is to note that our video is currently encoded at 30fps, and because we're driving the index with frames we'll need to set our <b>texture3D's </b>step size to 2 — adding a texture every other frame.
	<br><br>
	From here we convert the points of our geometry to CHOP channels that represent our instance positions. A <b>wave CHOP</b> provides our index positions that will then be used to point to an index in our 2D texture array.

</p> 

<hr>

<br>

<footer>
Tested in TouchDesigner099 2020.23680 <br>
Updated 05.24.20 <br>
Matthew Ragan <br>
Zoe Sandoval
</footer>

</body>
</html> 