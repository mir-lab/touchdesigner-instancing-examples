---
layout: content-page
title: Rotate to Vector and Color
---
## Instances at a Glance
# Rotate to Vector and Color

In addition to scale, and rotation, we may also want to include color. We can do this manually in a similar fashion to our other approaches - where we pack the relevant information into CHOPs which are then targeted on our geometry COMP. 

Similar to the previous approach, we'll set up our geometry instances to have position and rotation that's defined by a reference SOP.

Next we create a **noise TOP** whose x resolution is equal to the number of points in our reference SOP. We can do this with a simple expression like `op( 'null1' ).numPoints` - where `null1` is a null attached to our SOP. Here we've adjusted the **noise TOP** so that there are many distinct colors so the effect is easier to see. In this example we then convert the TOP to a CHOP, and pack the color information in with the rest of our instancing data. On the **geometry COMPs** `Instance 2` page we can assign the r, g, b, and a channels to be the color information for our instances.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  