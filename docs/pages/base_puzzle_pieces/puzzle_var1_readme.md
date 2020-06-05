<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>Puzzle Pieces</h1>
<h2>Variation 1 | Texture Instancing</h2>
<hr>
<p>
    <i> Note: this example may appear blank if you are using MacOS or have an older GPU.</i>
    <br> <br>
    There are lots of ways that we can approch this kind of puzzle piece animation and display. This example looks at the very first way to understand this problem. This is not the most efficient approach, but it's one way that you could think about solving the problem.
    <br><br>
    The biggest piece here is in how an input texture is sliced up and turned into puzzle pieces. In this example we manually crop and slice up the texture into different bases, then use texture instancing to arrange them. While this isn't efficient, it is one way to understand what's going on in this particular challenge.
</p> 

<hr>

<br>
---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  