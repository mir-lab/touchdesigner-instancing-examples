---
layout: default
title: Rotation and Color with CHOPs
nav_order: 7
parent: Instancing Overview
---

## Instances at a Glance
# Rotation and Color with CHOPs

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/001-overview/container_simple_rot_color_chops.tox){: .btn .btn-load-example .mr-2}
[TD Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

Unlike our previous example where we were rotating to a vector, we can also manually provide rotations for each instance. In this example we'll provide a unique rotation that's constantly increasing for each axis. You can, of course, only manipulate one axis, but this example looks at how you might change each. 

Opening the network you should see an example that looks familiar. What we should find different here is that we have a **noise CHOP** that produces unique rotation speeds for each axis — these are labeled 'rotx', 'roty', and 'rotz'. These channels are shuffled, passed to a speed to so they increment over time, then reshuffled to be packed into channels that are correctly formatted for instancing. 

Like in previous examples, each instance is represented by a sample in our CHOP network. Notice as well that in this example we use a **noise TOP** to produce the colors for our instances, which is then converted to CHOPs. The rotation and color data is combined with our location information with a **merge CHOP** before being used by our **geometry COMP**.

In the **geometry COMP** notice that we follow the same rules as previous examples, and that on the Instance page of our operator we point to CHOP channels that'll be used for rotation. The parameters "Rotate X", "Rotate Y", and "Rotate Z" are targeted with our new rotation information.

If you'd like to better see how the **speed CHOP** is being used in this example, locate the pulse reset parameter on the **speed CHOP** and click to reset the rotation of each instance. This style of technique can often be useful for systems that need to return to a default or home state periodically.  

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  