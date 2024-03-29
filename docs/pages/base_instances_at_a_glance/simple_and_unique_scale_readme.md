---
layout: content-page
title: Simple Instances and Unique Scale
---
## Instances at a Glance
# Simple Instances and Unique Scale

If we can assign scale to one instance, you might already be thinking that we should be able to provide a unique scale value to each instance. That is, in fact, the case. In this example we can see that in action.

Open the network and notice that we use a [pattern CHOP](https://docs.derivative.ca/Pattern_CHOP) with three unique channels — 'sx', 'sy', and 'sz' — to provide scale information. For consistency, we use a simple expression to ensure that we have the same number of samples in our **pattern CHOP** as are in our [SOP to CHOP](https://docs.derivative.ca/SOP_to_CHOP). The Length parameter uses the following expression:

`op('sopto1').numSamples`

This grabs the number of samples from our **sopto CHOP** to ensure that our CHOPs have matching lengths. This is a common error for those new to using instancing. It is important to ensure that if you are using CHOPs, that you are mindful that the number of samples in your channels match.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  