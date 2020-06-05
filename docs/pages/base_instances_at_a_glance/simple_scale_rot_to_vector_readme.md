<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instances at a Glance</h1>
<h2>Scale and Rotate to Vector</h2>
<hr>
<p>In addition to scale, we often want to rotate our instances. We can do this manually in a similar fashion to our other approaches — where we pack the relevant information into CHOPs which are then targed on our <b>geometry COMP</b>. 
<br>
<br>
What happens, however, when we want to rotate our instances to follow something like the curvature of our input geometry? In those cases we can use parameters on the Instance 2 page. We'll start by using the Normal of our geometry — we can think of a normal as a ray that is perpendicular to the surface of our geometry. We'll use our normal to represent a vector that we to rotate our geometry towards. 
<br>
<br>
For this to work, however, we need to first extract our normal information from our <b>sphere SOP</b>. Open the network and notice that our <b>sopto CHOP </b> is set to grab both the normal and position information from our SOP. Also notice that our CHOP now has three additional channels 'nx', 'ny', and 'nz'. These are the normals for our points. 
<br>
<br>
Next in our <b>geometry COMP</b> on the Instance 2 page, let's use our channels containing our normal data to be used for on the parameters "Rotate to Vector X", "Rotate to Vector Y", and "Rotate to Vector Z". We should now see each instance rotate to the normal of our sphere.
</p> 

<hr>
<br>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  