---
layout: default
title: Rotate to Vector and the Blend SOP
nav_order: 1
parent: Techniques for Using SOPs
---

## Techniques Using SOPs
# Rotate to Vector and the Blend SOP

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/004-using-sops/container_rotate_to_vector_blending_sops.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

Rather than calculating bearing manually, you may want to take advantage of another feature of instancing — Rotate to Vector. Another way we can think about this type of vector is to use the normal's for a given point.
In this example, we use the normals from our SOPs to describe the rotation of our instances. The normals from our Surface Operators can be retrieved with a **sopTo CHOP**.

The other technique at play here is to use a **blend SOP** to morph one SOP into another. While this is a non-typical use for the **blend SOP**, the application for instances is interesting. The **blend SOP** allows for multiple inputs — so while this example moves from the sphere to the long form grid arrangement, it would also be possible to have many different configurations of geometry that you're blending between. 

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  