<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instances at a Glance</h1>
<h2>Rotate to Vector and Color</h2>
<hr>
<p>In addition to scale, and rotation, we may also want to include color. We can do this manually in a similar fashion to our other approaches - where we pack the relevant information into CHOPs which are then targeted on our geometry COMP. 
<br>
<br>
Similar to the previous approach, we'll set up our geometry instances to have position and rotation that's defined by a reference SOP.
<br>
<br>
Next we create a <b>noise TOP</b> whose x resolution is equal to the number of points in our reference SOP. We can do this with a simple expression like <code>op( 'null1' ).numPoints</code> - where <code>null1</code> is a null attached to our SOP. Here we've adjusted the <b>noise TOP</b> so that there are many distinct colors so the effect is easier to see. In this example we then convert the TOP to a CHOP, and pack the color information in with the rest of our instancing data. On the <b>geometry COMPs</b> <code>Instance 2</code> page we can assign the r, g, b, and a channels to be the color information for our instances.
</p> 

<hr>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  