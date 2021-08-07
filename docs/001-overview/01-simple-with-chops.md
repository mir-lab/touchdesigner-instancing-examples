---
layout: default
title: Simple Instances with CHOPs
nav_order: 1
parent: Instancing Overview
---

## Instances at a Glance
# Simple Instances with CHOPs 

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/001-overview/container_simple_instances_with_chops.tox){: .btn .btn-load-example .mr-2}
[TD Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

We use instances when working in 3D for a number of reasons. Efficiency, elegance, simplicity, reusability, the the list goes on and on. When working in TouchDesigner we often want to use instances so we can produce multiple copies of the same geometry. Under the hood this is a much more efficient approach to rendering, and allows us to create the illusion of thousands of an object, when we are in fact only making virtual copies of that geometry. If you've played with TouchDesigner much, this has a similar behavior to the [Copy SOP](https://docs.derivative.ca/Copy_SOP) — the key difference here being that the [Copy SOP](https://docs.derivative.ca/Copy_SOP) produces unique pieces of geometry that are computed on the CPU, while instances are handled by the GPU. The effect here is that we can work with many more instances of that geometry, and accomplish illusions that would otherwise be very difficult to achieve if we were only working in a CPU bound context.

So how do we go about creating instances? The [geometry component](https://docs.derivative.ca/Geometry_COMP) contains two pages dedicated to instancing. For instancing to work we need to first turn on the Instancing toggle, then point to the operator that holds our relevant data.

We might start by just thinking about positional information as important for our instances. Open the example and note that we start with a **sphere SOP** and then convert that data to CHOPs. Our **sopto1 CHOP** contains three channels: tx, ty, and tz. Each channel has 42 samples. These represent the positions of each point in the [sphere SOP](https://docs.derivative.ca/Sphere_SOP). When using this data for instancing, we'll end up with a copy of our **geometry COMP** (in this case a box) at each one of those samples.

Take a moment to look at the **geo1 COMP**. Notice that the parameters 'Translate X', 'Translate Y', and 'Translate Z' point to channel names in our **null_instances CHOP**. These parameters let us specify which channels should be used to derive relevant information for our copies.

This style of instancing imagines that we are thinking about our instances in 3D space, and that our sphere defines the location of each copy; the rest are just some mechanics to bring that idea to life.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  