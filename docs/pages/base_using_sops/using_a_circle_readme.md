---
layout: content-page
title: Carousel Illusions with a Circle SOP
---

## Techniques Using SOPs
# Carousel Illusions with a Circle SOP

*Note: this example may appear blank if you are using MacOS or have an older GPU.*

It's sometimes preferable to have endlessly cycling image carousels for installations or experiences. Here the idea is that our screen is never empty, instead we always cycle back to the first image in the stack. This can be challenging to approach with a simple line based instancing technique. Alternatively, we might think of this problem as one that can be solved with some clever rendering tricks.

In this example we use a tube to describe the the positions of our images. A **tube SOP** already has normals that face outward, allowing us to skip the process of changing the orientation of our normals. A **delete SOP** allows us to remove the extra row of points from geometry. We convert these to CHOP channels, and then use them to instance our photos. The real trick here is that we set our camera to be orthographic. We can then rotate the camera around the Y axis — the final illusion is that we have an endless image carousel that requires minimal effort to set-up and prep.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  