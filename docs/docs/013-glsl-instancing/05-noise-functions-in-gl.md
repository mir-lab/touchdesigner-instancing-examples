---
layout: default
title: Noise Functions for Instances
nav_order: 5
parent:  GLSL Instancing
---

## GLSL and Instances
# Noise Functions for Instances

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/013-glsl-instancing/container_noise_functions_in_gl.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

Here we'll look at the use of simplex noise to change the scale of our instances. In many TouchDesigner tutorials about using noise in custom materials, you'll often see a custom noise function. In fact, in another example we'll use our own noise function. You can also use two built-in noise functions provided by TouchDesigner: `TDSimplexNoise()` or `TDPerlinNoise()`. These functions can help save a significant amount of time when working with noise and come in several varieties. Both of these helper functions come in 2D, 3D and 4D. If you have a chance you should read more about the built-in noise functions on the [Write a GLSL Material](https://docs.derivative.ca/Write_a_GLSL_Material#Perlin_and_Simplex_noise_functions) page in the wiki.

In this example, our magic happens on lines 21 through 24:

```glsl
vec3 inst_for_noise = (TDInstanceMat()[3].xyz) * u_noise_scale;

float scale     = TDSimplexNoise( vec4( inst_for_noise, u_transform.w) );
vec3 new_P      = P * scale;
```

We begin by using our `TDInstnaceMat()` to find the position of our instance. We'll use this value to seed our noise function, but before we do that we first need to scale our values by the vec3 uniform. This value is then passed `TDSimplexNoise()` as a vec4 — values for x, y, z, and time. Finally we scale the vertex position based on the resulting value. 

I'd encourage you to play with the network in this example to better understand what's happening. Especially pay attention to the custom uniform `u_nosie_scale` and `u_transform`. Noise scale will allow you to adjust the scale of the noise in x, y, and z. The transform uniform will allow you to change the movement of the noise in the x, y, z or time dimensions.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  