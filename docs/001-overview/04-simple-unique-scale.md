---
layout: default
title: Simple Instances and Unique Scale
nav_order: 4
parent: Instancing Overview
---
## Instances at a Glance
# Simple Instances and Unique Scale  

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/001-overview/container_unique_scale.tox){: .btn .btn-load-example .mr-2}
[TD Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

If we can assign scale to one instance, you might already be thinking that we should be able to provide a unique scale value to each instance. That is, in fact, the case. In this example we can see that in action.


Open the network and notice that we use a [pattern CHOP](https://docs.derivative.ca/Pattern_CHOP) with three unique channels — 'sx', 'sy', and 'sz' — to provide scale information. For consistency, we use a simple expression to ensure that we have the same number of samples in our **pattern CHOP** as are in our [SOP to CHOP](https://docs.derivative.ca/SOP_to_CHOP). The Length parameter uses the following expression:

`op('sopto1').numSamples`

This grabs the number of samples from our **sopto CHOP** to ensure that our CHOPs have matching lengths. This is a common error for those new to using instancing. It is important to ensure that if you are using CHOPs, that you are mindful that the number of samples in your channels match.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  