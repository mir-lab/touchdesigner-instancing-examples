<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Techniques Using SOPs</h1>
<h2>Rotate to Vector and the Blend SOP</h2>
<hr>
<p>
    Rather than calculating bearing manually, you may want to take advantage of another feature of instancing — Rotate to Vector. Another way we can think about this type of vector is to use the normal's for a given point.
    In this example, we use the normals from our SOPs to describe the rotation of our instances. The normals from our Surface Operators can be retrieved with a <b>sopTo CHOP</b>.
    <br><br>
    The other technique at play here is to use a <b>blend SOP</b> to morph one SOP into another. While this is a non-typical use for the <b>blend SOP</b>, the appliaction for instances is interesting. The <b>blend SOP</b> allows for multiple inputs — so while this example moves from the sphere to the long form grid arrangemnet, it would also be possible to have many different configurations of geometry that you're blending between. 
</p> 

<hr>

<br>

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  