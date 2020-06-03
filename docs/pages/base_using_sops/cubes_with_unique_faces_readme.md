<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Techniques Using SOPs</h1>
<h2>Cube Instances with Unique Faces</h2>
<hr>

<p>
    <i> Note: this example may appear blank if you are using MacOS or have an older GPU.</i>
    <br> <br>
    This example comes from an old HelpGroup question about putting unique images on the faces of instances. There are a number of ways to approach this challenge. You could certainly use the 'instances of instances' approach we've outlined in other examples — where we create the cube faces individually. That's a fine approach, but here we want to instead focus on working with cubes. To do this, we need to use a cube map texture along with texture instancing — this isn't supported on all GPUs, so you may find that this example doesn't load on your computer. 
    <br><br>
    You'll see in the example that we instance 4 cubes, and that on our <b>geometry COMP</b> we use the Instance Texture parameters. For this to work correctly we provide a path to our TOPs with a wild-card card character in place of where we'll substitute a digit. For example:
    <br><br>
<code>textures/item*/final</code>
    <br><br>
    This is going to be expressed as the following during instancing:
    <br><br>
<code>textures/item1/final
textures/item2/final
textures/item3/final
textures/item4/final
...etc...
</code>
    <br><br>
    This is a nice way to work with whole cubes rather than trying to think of each face of each cube when working with textures.
</p>

<hr>

<br>

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  