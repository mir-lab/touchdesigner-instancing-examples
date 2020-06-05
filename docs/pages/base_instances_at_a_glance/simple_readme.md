<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instances at a Glance</h1>
<h2>Simple Instances with CHOPs</h2>
<hr>
<p>We use instances when working in 3D for a number of reasons. Efficiency, elegance, simplicity, reusability, the the list goes on and on. When working in TouchDesigner we often want to use instances so we can produce multiple copies of the same geometry. Under the hood this is a much more efficient approach to rendering, and allows us to create the illusion of thousands of an object, when we are in fact only making virtual copies of that geometry. If you've played with TouchDesigner much, this has a similar behavior to the <a href="https://docs.derivative.ca/Copy_SOP">Copy SOP</a> — the key difference here being that the <a href="https://docs.derivative.ca/Copy_SOP">Copy SOP</a> produces unique pieces of geometry that are computed on the CPU, while instances are handled by the GPU. The effect here is that we can work with many more instances of that geometry, and accomplish illusions that would otherwise be very difficult to achieve if we were only working in a CPU bound context.
<br>
<br>
So how do we go about creating instances? The <a href="https://docs.derivative.ca/Geometry_COMP">geometry component</a> contains two pages dedicated to instancing. For instancing to work we need to first turn on the Instancing toggle, then point to the operator that holds our relevant data.
<br>
<br>
We might start by just thinking about positional information as important for our instances. Open the example and note that we start with a <b>sphere SOP</b> and then convert that data to CHOPs. Our <b>sopto1 CHOP</b> contains three channels: tx, ty, and tz. Each channel has 42 samples. These represent the positions of each point in the <a href="https://docs.derivative.ca/Sphere_SOP">sphere SOP</a>. When using this data for instancing, we'll end up with a copy of our <b>geometry COMP</b> (in this case a box) at each one of those samples.
<br>
<br>
Take a moment to look at the <b>geo1 COMP</b>. Notice that the parameters 'Translate X', 'Translate Y', and 'Translate Z' point to channel names in our <b>null_instances CHOP</b>. These parameters let us specify which channels should be used to derive relevant information for our copies.
<br>
<br>
This style of instancing imagines that we are thinking about our instances in 3D space, and that our sphere defines the location of each copy; the rest are just some mechanics to bring that idea to life.
</p> 

<hr>
<br>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  