---
layout: default
title: Random Moving Position
nav_order: 3
parent: Instances of Instances
---

## Instancing Instances
# Random Moving Position

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/011-instances-of-instances/container_moving_random_position.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

The previous technique is especially powerful when working with moving and dynamic objects. **Copy SOPs** can be very slow, and having ways to do this all with CHOP math helps you find highly efficient approaches for solving these kinds of problems. In this example you'll see that we use the same techniques for flattening our reference positions, using a **math CHOP** to calculate the new positions, then shuffling our data so it's back in order for instancing. 

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  