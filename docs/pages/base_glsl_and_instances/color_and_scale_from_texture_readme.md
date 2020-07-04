---
layout: content-page
title: Color and Scale from Texture
---
## GLSL and Instances
# Color and Scale from Texture

Similar to the techniques used in our previous examples, we can also use textures to manipulate our instances in terms of both color and size. This allows us to quickly map images onto our instances. In this example, the scale of our instance is determined by the sampled pixel's alpha, and the color of the instance is derived by the color of the pixel.

Here we again use our helper fucntion `CoordsFromTex()`. This function will return an ivec2 with a set of x and y coordinates that we'll use to sample the texture. Here's our helper function:

```glsl
ivec2 CoordsFromTex(vec2 size, int id){
float xCoord = mod(float(id), size.x);
float yCoord = fract( (float(id) / (size.x * size.y)) ) * size.y;
return ivec2(int(xCoord), int(yCoord));
}
```

This function takes a vec2 that describes the dimensions of our texture (the number of pixels in x and y), and the instance ID. From those two values we can derive the pixel coordinate where we want to sample. These values will be used with `texelFetch()` — a function that provides pixel accurate results, prefered over the alternative `texture()` function which uses noramlized coordinates. In the following four lines we'll use this function to look up our texel, retrieve the value from the alpha channel, scale this by a uniform `u_disp`, and finally scale our entire instance by the result:

```glsl
ivec2 xyLookup = CoordsFromTex(u_texture_size, TDInstanceID());
vec4 fragColor = texelFetch(s_disp, xyLookup, 0);
float scale = fragColor.a * u_disp_scale;
vec3 new_p = P * scale;
```

On line 48 we use the rgb values of our pixel as the color for the instance:

```glsl
oVert.color = vec4(fragColor.rgb, 1.0);
```

There are a few other pieces at play in this example, so it's worth taking some time to look through the network to see how all of this works.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  