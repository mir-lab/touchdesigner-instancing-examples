<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Instances at a Glance</h1>
<h2>Simple Instances and Unique Scale</h2>
<p>If we can assign scale to one instance, you might already be thinking that we should be able to provide a unique scale value to each instance. That is, in fact, the case. In this example we can see that in action.
<br>
<br>
Open the network and notice that we use a <a href="https://docs.derivative.ca/Pattern_CHOP">pattern CHOP</a> with three unique channels — 'sx', 'sy', and 'sz' — to provide scale information. For consistency, we use a simple expression to ensure that we have the same number of samples in our <b>pattern CHOP</b> as are in our <a href="https://docs.derivative.ca/SOP_to_CHOP">SOP to CHOP</a>. The Length parameter uses the following expression:
<br><br>
<code>op('sopto1').numSamples
</code>
<br><br>
This grabs the number of samples from our <b> sopto CHOP </b> to ensure that our CHOPs have matching lengths. This is a common error for those new to using instancing. It is important to ensure that if you are using CHOPs, that you are mindful that the number of samples in your channels match.
</p> 

<hr>
<br>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  