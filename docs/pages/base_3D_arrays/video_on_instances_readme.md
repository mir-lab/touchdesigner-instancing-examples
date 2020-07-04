---
layout: content-page
title: Creating a Filmstrip Illusion
---
## 3D Texture Arrays
# Playing Video on Instances

3D Textures have some cool properties — namely that a 3D texture, unlike a 2D array, can be interpolated. In other words, you can blend between slices in the stack of images. This allow us to create effects like playing back video with frames that are all stored in memory. In this network we first pre-fill a **texture3D TOP** configured as a 3D texture.

We then set up our instances based on a grid. Next we'll need to provide a normalized value (from 0-1) to scrub through the frames of our video. In this case we use a **pattern CHOP**. Here we've set up our **pattern CHOP** to be a ramp, and we're driving the phase of our ramp with time. 

Here our ramp value represents where we are the cached video — 0 would be the beginning of the texture3D, and 1 would be the end. We've also set-up our ramp to be the same length as the number of frames in our video, and in the **merge CHOP** we've trimmed our chop lengths to the first interval. The result is that each of our slices is roughly 1 frame apart.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  
