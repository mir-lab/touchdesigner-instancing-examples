---
layout: content-page
title: Curl Noise Functions for Instances
---
## GLSL and Instances
# Curl Noise Functions for Instances

While Perlin and Simplex noise are great functions, Curl noise is an excellent contender for organic looking motion. In this example we'll leverage the ability to utilize `#include` statements in TouchDesigner, along with an adapted outside noise function from [Cabbibo]("https://github.com/cabbibo/glsl-curl-noise/blob/master/curl.glsl) on Github.


First off — an `#include` statement allows us to put some of our GLSL functions in another part of the TouchDesigner network, and then point to that code for use in another shader. In Python we might use the `import` keyword, and with GLSL we can instead use `#include`. We can see this in action in our vertex shader on line 11:

```glsl
#include <text_curl_noise>
```

This gives us access to all of the functions in our <b>text DAT</b> `text_curl_noise`, and helps us keep our vertex shader tidy. In the curl noise function on Cabbibo's Github there is a simplex noise function. Since TouchDesigner has a built-in noise function, I've adapted this code block to instead use the TD noise functions.

```glsl
vec3 snoiseVec3( vec3 x ){
    x       += u_transform;
    float s  = TDSimplexNoise(vec3( x ));
    float s1 = TDSimplexNoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
    float s2 = TDSimplexNoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
    vec3 c = vec3( s , s1 , s2 );
    return c;
}
```

We can then see in our vertex shader on lines 23-25 where we're using the curl noise fucntion:

```glsl
vec3 inst_for_noise = (TDInstanceMat()[3].xyz + u_transform.xyz) * u_noise_scale;

vec3 scale      = curlNoise(inst_for_noise);  
```

Like in other examples, we retrieve the xyz position of our instance with the `TDInstanceMat()` function, and then use that value to seed our `curlNoise()` function. I'd encourage you to play with the network in this example to better understand what's happening. Especially pay attention to the custom uniform `u_noise_scale` and `u_transform`. Noise scale will allow you to adjust the scale of the noise in x, y, and z.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  