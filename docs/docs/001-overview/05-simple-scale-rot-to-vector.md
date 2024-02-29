---
layout: default
title: Scale and Rotate to Vector
nav_order: 5
parent: Instancing Overview
---

## Instances at a Glance
# Scale and Rotate to Vector

----

### [:floppy_disk: Download TOX](https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/001-overview/container_simple_scale_rotate_to_vector.tox)

----

In addition to scale, we often want to rotate our instances. We can do this manually in a similar fashion to our other approaches — where we pack the relevant information into CHOPs which are then targeted on our **geometry COMP**. 

What happens, however, when we want to rotate our instances to follow something like the curvature of our input geometry? In those cases we can use parameters on the Instance 2 page. We'll start by using the Normal of our geometry — we can think of a normal as a ray that is perpendicular to the surface of our geometry. We'll use our normal to represent a vector that we to rotate our geometry towards. 

For this to work, however, we need to first extract our normal information from our **sphere SOP**. Open the network and notice that our **sopto CHOP** is set to grab both the normal and position information from our SOP. Also notice that our CHOP now has three additional channels 'nx', 'ny', and 'nz'. These are the normals for our points. 

Next in our **geometry COMP** on the Instance 2 page, let's use our channels containing our normal data to be used for on the parameters "Rotate to Vector X", "Rotate to Vector Y", and "Rotate to Vector Z". We should now see each instance rotate to the normal of our sphere.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  