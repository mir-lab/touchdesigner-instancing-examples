---
layout: default
title: Loading Textures from Video Files
nav_order: 1
parent: 2D Textures
---

## 2D Texture Arrays
# Loading Textures from Video Files

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/007-2d-texture-array/container_texture_array_from_video.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

*Note: this example may appear blank if you are using MacOS or have an older GPU.*  

Another interesting approach for working with instances is thinking about how to include textures. This approach uses a 2D array that's loaded into memory with a [texture3D TOP](https://docs.derivative.ca/Texture_3D_TOP). This example uses [pre-filling](https://docs.derivative.ca/Pre-Filling) to fill our **texture3D TOP** with all of our images. If you haven't used pre-filling before it's worth taking a closer look at that article to understand the mechanics.

Important for us here is to note that our video is currently encoded at 30fps, and because we're driving the index with frames we'll need to set our **texture3D's** step size to 2 — adding a texture every other frame.


From here we convert the points of our geometry to CHOP channels that represent our instance positions. A **wave CHOP** provides our index positions that will then be used to point to an index in our 2D texture array.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  
