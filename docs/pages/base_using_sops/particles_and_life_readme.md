---
layout: content-page
title: Particle Life as Scale
---

## Techniques Using SOPs
# Particle Life as Scale

The **particle SOP** has a number of interesting uses, and one of them is for driving instancing-based systems. Here we get another example of instances based on the position of our particles. This is often helpful as particles have a number of forces they react to. Before physics was included in TouchDesigner, particles could be set to die or bounce based on collision with other SOPs.

Perhaps more interesting for us in this example is that particles carry an attribute for life. When we convert our SOP to a CHOP we see two life attributes — "l1" describes the particles current life (how long it's been present), and "l2" describes the total life of the particle (how long it will live). These raw values are useful, but perhaps more important for us here is to convert these two numbers into a single normalized value. A normalized value is easier to scale, and can be used in conjunction with other CHOPs like the **look-up CHOP**. Here a **select CHOP** and **math CHOP** are used to isolate the desired channels, and then derive the normalized life for the particle (current life / life-span). The range parameters of the **math CHOP** are also used so the spheres shrink over the course of their life, rather than growing.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  