<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instancing Instances</h1>
<h2>Copy SOP</h2>
<hr>
<p>
    A typical approach to intancing uses a piece of geometry to describe the positions of our instances — this is great, but we sometimes want more complex arrangements of instances. In tools like C4D, it's not uncommon to have clones of clones — but in TouchDesigner instancing on the GPU doesn't work exactly like that. Instead we need to do some additional set-up work to make this possible. For static arragements, <a href="https://docs.derivative.ca/Copy_SOP">the copy SOP</a> can be a great helper. Here the first input of the <b>copy SOP</b> is the shape to be copied, and the second input is the points where it will be copied.
    <br><br>
    <img src="../../../assets/imgs/instances-of-instnaces/copy-sop/copy-sop-01.jpg">
    <br><br>
    In the image above, we create a sphere at each point of a reference sphere. That set of 12 spheres then becomes the source geometry to be instanced at the corner points of our box.
    <br><br>
    <img src="../../../assets/imgs/instances-of-instnaces/copy-sop/copy-sop-02.jpg">
    <br><br>
    This approach is great for static sets of instances that are not overly complex. The <b>copy SOP</b> produces actual geometry rather than just instances on the GPU — which makes this less efficient in some cases, and not well suited for pieces that are animated. As a starting point, however, this is a great place to start understanding how instances work, and how to create complex arrangments.
</p> 

<hr>

<br>

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  