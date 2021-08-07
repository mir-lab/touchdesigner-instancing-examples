---
layout: default
title: Simple Instances and Scale
nav_order: 3
parent: Instancing Overview
---

## Instances at a Glance
# Simple Instances and Scale

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/001-overview/container_simple_scale.tox){: .btn .btn-load-example .mr-2}
[TD Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

In addition to position we can also change the scale of our instances. Here we see that unlike our original examples, we have now applied a scale operation to our instances. If you open the network you'll see a **constant CHOP** is merged with our position information. Here we provide only a single scale value, and it modifies all instances in the same manner. 

Take a moment to look inside of the **geo1 COMP**. You should notice that our original SOP is a box. When working with instances it is often helpful to think about your template geometry (the geometry that will be instanced), and to consider how you want it to behave / respond to transformations. 

Finally, note that on the Instance page of the **geo1 COMP**, the parameters for "Scale X", "Scale Y" and "Scale Z" all point to matching channel names. Names matter, and if we change the names in our **constant1 CHOP** our instances will break. Ultimately you get to choose how you name these elements, so make sure to be thoughtful and use names that are meaningful and concise. 

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  