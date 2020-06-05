<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instances at a Glance</h1>
<h2>Simple Instances with SOPs</h2>
<hr>
<p>While working with CHOPs was previously one of the few ways to work with instances, changes in TouchDesigner have made room for creating instances more intuitively and with fewer intermediary steps. In this example we can see how we might create instances using only Surface Operatores without converting them.
<br>
<br>
Open the example and note that we start with a <b>sphere SOP</b>, which is in turn used by our <b>geo1 COMP</b> to create our instances. Take a moment to look at the <b>geo1 COMP</b>. Notice that the parameters 'Translate X', 'Translate Y', and 'Translate Z' point to the <b>null_instances SOP </b>. These parameters let us specify which channels should be used to derive relevant information for our copies. Unlike the example "Simple Instances with CHOPs" here our parameters point to 'P(0)', 'P(1)', and 'P(2)'. These are the point attributes for our SOP and represent the x, y, and z positions of each point on our <b>sphere SOP</b>. 
<br>
<br>
Perhaps the most important piece to think about here is that names matter — so if we point to an attribute or a channel name we need to know what those values represent in order to get results that are consistent with our vision and expectations.
</p> 

<hr>
<br>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  