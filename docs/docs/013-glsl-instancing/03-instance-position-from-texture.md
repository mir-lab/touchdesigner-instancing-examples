---
layout: default
title: Textures to Displace Instances
nav_order: 3
parent:  GLSL Instancing
---

## GLSL and Instances
# Textures to Displace Instances

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/013-glsl-instancing/container_instance_position_from_texture.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

While the previous example demonstrates how we can think of displacement purely in terms of mathematics, it can sometimes be helpful to do this with a texture instead. Just like we can use height maps for displacing a mesh, we can use a similar principle for manipulating instances directly. In the most recent builds of TouchDesinger there are alternative ways to approach this set of manipulations — this set of examples, however, still stands as a reference for how to take advantage of instance manipulation in the vertex stage. 

Here a texture is used to represent the change in height for our instances. In order to correctly sample a pixel value from this image we'll use a helper function `CoordsFromTex()`. This function will return an ivec2 with a set of x and y coordinates that we'll use to sample the texture. Here's our helper function:

```glsl
ivec2 CoordsFromTex(vec2 size, int id){
    float xCoord = mod(float(id), size.x);
    float yCoord = fract( (float(id) / (size.x * size.y)) ) * size.y;
    return ivec2(int(xCoord), int(yCoord));
}
```

This function takes a vec2 that describes the dimensions of our texture (the number of pixels in x and y), and the instance ID. From those two values we can derive the pixel coordinate where we want to sample. These values will be used with `texelFetch()` — a function that provides pixel accurate results, prefered over the alternative `texture()` function which uses noramlized coordinates. In the following three lines we'll use this function to look up our texel, retrieve the value from the red channel, scale this by a uniform `u_disp_scale`, and finally add it to our new instance position:

```glsl
ivec2 xyLookup  = CoordsFromTex(u_instance_pos, TDInstanceID());
float translate_y = texelFetch(s_disp, xyLookup, 0).r * u_disp_scale;
vec3 new_p = vec3(P.x, P.y + translate_y, P.z); 
```

This new result is used in our `TDDeform()` function. Try feeding the **null TOP** `null_disp` another 100 x 100 pixel image to see this at play.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  