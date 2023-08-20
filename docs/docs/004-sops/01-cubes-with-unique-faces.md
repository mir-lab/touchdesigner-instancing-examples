---
layout: default
title: Cube Instances with Unique Faces
nav_order: 1
parent: Techniques for Using SOPs
---

## Techniques Using SOPs
# Cube Instances with Unique Faces

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/004-using-sops/container_building_cubes_with_faces.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

*Note: this example may appear blank if you are using MacOS or have an older GPU.*

This example comes from an old HelpGroup question about putting unique images on the faces of instances. There are a number of ways to approach this challenge. You could certainly use the 'instances of instances' approach we've outlined in other examples — where we create the cube faces individually. That's a fine approach, but here we want to instead focus on working with cubes. To do this, we need to use a cube map texture along with texture instancing — this isn't supported on all GPUs, so you may find that this example doesn't load on your computer. 

You'll see in the example that we instance 4 cubes, and that on our **geometry COMP** we use the Instance Texture parameters. For this to work correctly we provide a path to our TOPs with a wild-card card character in place of where we'll substitute a digit. For example:

```
textures/item*/final
```

This is going to be expressed as the following during instancing:

```
textures/item1/final
textures/item2/final
textures/item3/final
textures/item4/final
...etc...
```

This is a nice way to work with whole cubes rather than trying to think of each face of each cube when working with textures.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  