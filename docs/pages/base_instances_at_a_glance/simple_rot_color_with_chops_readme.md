<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instances at a Glance</h1>
<h2>Rotation and Color with CHOPs</h2>
<hr>
<p>Unlike our previous example where we were rotating to a vector, we can also manually provide rotations for each instance. In this example we'll provide a unique rotation that's constantly increasing for each axis. You can, of course, only manipulate one axis, but this example looks at how you might change each. 
<br>
<br>
Opening the network you should see an example that looks familiar. What we should find different here is that we have a <b>noise CHOP</b> that produces unique rotation speeds for each axis — these are labeled 'rotx', 'roty', and 'rotz'. These channes are shuffled, passed to a speed to so they increment over time, then reshuffled to be packed into channels that are correctly formatted for instancing. 
<br>
<br>
Like in previous examples, each instance is represented by a sample in our CHOP network. Notice as well that in this example we use a <b>noise TOP</b> to produce the colors for our instances, which is then converted to CHOPs. The rotation and color data is combined with our location information with a <b> merge CHOP </b> before being used by our <b>geometry COMP</b>.
<br>
<br>
In the <b>geometry COMP</b> notice that we follow the same rules as previous examples, and that on the Instance page of our operator we point to CHOP channels that'll be used for rotation. The parameters "Rotate X", "Rotate Y", and "Rotate Z" are targeted with our new rotation information.
<br>
<br>
If you'd like to better see how the <b>speed CHOP</b> is being used in this example, locate the pulse reset parameter on the <b>speed CHOP</b> and click to reset the rotation of each instance. This style of technique can often be useful for systems that need to return to a default or home state periodically.  
</p> 

<hr>
<br>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  