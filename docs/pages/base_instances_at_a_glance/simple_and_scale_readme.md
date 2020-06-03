<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instances at a Glance</h1>
<h2>Simple Instances and Scale</h2>
<p>In addition to position we can also change the scale of our instances. Here we see that unlike our original examples, we have now applied a scale operation to our instances. If you open the network you'll see a <b>constant CHOP</b> is merged with our position information. Here we provide only a single scale value, and it modifies all instances in the same manner. 
<br>
<br>
Take a moment to look inside of the <b>geo1 COMP</b>. You should notice that our original SOP is a box. When working with instances it is often helpful to think about your template geometry (the geometry that will be instanced), and to consider how you want it to behave / respond to transformations. 
<br>
<br>
Finally, note that on the Instance page of the <b>geo1 COMP</b>, the parameters for "Scale X", "Scale Y" and "Scale Z" all point to matching channel names. Names matter, and if we change the names in our <b>constant1 CHOP</b> our instances will break. Ultimately you get to choose how you name these elements, so make sure to be thoughtful and use names that are meaningful and concise. 
</p> 

<hr>
<br>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  