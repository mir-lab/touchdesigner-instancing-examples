---
layout: default
title: Variation 1 | Texture Instancing
nav_order: 1
parent: Puzzle Pieces
---

## Puzzle Pieces
# Variation 1 | Texture Instancing

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/015-puzzle-pieces/container_puzzle_var1.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

*Note: this example may appear blank if you are using MacOS or have an older GPU.*

There are lots of ways that we can approach this kind of puzzle piece animation and display. This example looks at the very first way to understand this problem. This is not the most efficient approach, but it's one way that you could think about solving the problem.

The biggest piece here is in how an input texture is sliced up and turned into puzzle pieces. In this example we manually crop and slice up the texture into different bases, then use texture instancing to arrange them. While this isn't efficient, it is one way to understand what's going on in this particular challenge.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  