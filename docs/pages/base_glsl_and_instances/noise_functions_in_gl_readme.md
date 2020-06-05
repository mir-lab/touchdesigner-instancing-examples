<!DOCTYPE html>
<html>
<head>    
    <link rel="stylesheet" href="../../../assets/styles.css">
</head>
<body>

<h1>GLSL and Instances</h1>
<h2>Noise Functions for Instances</h2>
<hr>

<p>
    Here we'll look at the use of simplex noise to change the scale of our instances. In many TouchDesigner tutorials about using noise in custom materials, you'll often see a custom noise function. In fact, in another example we'll use our own noise function. You can also use two built-in noise functions provided by TouchDesigner: <code>TDSimplexNoise()</code> or <code>TDPerlinNoise()</code>. These functions can help save a significant amount of time when working with noise and come in several varieties. Both of these helper functions come in 2D, 3D and 4D. If you have a chance you should read more about the built-in noise functions on the <a href="https://docs.derivative.ca/Write_a_GLSL_Material#Perlin_and_Simplex_noise_functions">Write a GLSL Material</a> page in the wiki.
    <br><br>
    In this example, our magic happens on lines 21 through 24:
    <br><br>
    <code>vec3 inst_for_noise = (TDInstanceMat()[3].xyz) * u_noise_scale;

float scale     = TDSimplexNoise( vec4( inst_for_noise, u_transform.w) );
vec3 new_P      = P * scale;
</code>
    <br><br>
    We begin by using our <code>TDInstnaceMat()</code> to find the position of our instance. We'll use this value to seed our noise function, but before we do that we first need to scale our values by the vec3 uniform. This value is then passed <code>TDSimplexNoise()</code> as a vec4 — values for x, y, z, and time. Finally we scale the vertex position based on the resulting value. 
    <br><br>
    I'd encourage you to play with the network in this example to better understand what's happening. Especially pay attention to the custom uniform <code>u_nosie_scale</code> and <code>u_transform</code>. Noise scale will allow you to adjust the scale of the noise in x, y, and z. The transform uniform will allow you to change the movement of the noise in the x, y, z or time dimensions.
</p> 

<hr>

<br>

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  