---
layout: content-page
title: 2D Texture Arrays and Instancing
---
## GLSL and Instances
# 2D Texture Arrays and Instancing

Like our previous examples, this one explores using 2D textures arrays to manipulate instances. Here our 2D Array is represented as voxels in our rendering. Each slice of our texture is another layer in our 3D world. We'll also use the luminance of our pixel to determine its scale in our final render. To make this work, this time we'll use two helper functions. One of these is a variation of the helper function we've used previously — `CoordsFromTex()`. This variation now returns an ivec3 - providing us a lookup position in x, y, and z:

```glsl
ivec3 CoordsFrom2DArray( vec3 size, int id ){

float xCoord = mod(float(id), size.x);
float yCoord = fract( (float(id) / (size.x * size.y))  ) * size.y;
float zCoord = (float(id) / (size.x * size.y * size.z)) * size.z;

return ivec3(int(xCoord), int(yCoord), int(zCoord));
}
```

In addition we'll use a helper function to determine the luminance of our pixel — `luminance`:

```glsl
float luminance(vec3 color){
float lumin = (color.r * 0.3) + (color.g * 0.59) + (color.b * 0.11);
return lumin;
}   
```

Our process should seem relativly similar to previous iterations. We start by finding our look-up coordinate using our helper function. This is then used by `texelFetch()` to retrieve a sample. We'll next use that sample to calculate our scale by using our helper function `luminance()`. We then use this new value to scale the position of our vertex. 

```glsl
ivec3 lookup_xyz = CoordsFrom2DArray(u_ref_size, TDInstanceID());
vec4 scaler = texelFetch(s_inst_disp, lookup_xyz, 0);
float scaler_lumin = luminance(scaler.rgb);
vec3 newP = P * scaler_lumin;
```

Finally, on line 57 you can see where we pass the same lookup value we used for calculating luminance to be the color value of our instance:

```glsl
oVert.color = TDInstanceColor(scaler);
```

There are a few other pieces at play in this example, so I'd encourage you to take some time to look through the sample network to see how this example works.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  