---
layout: default
title: Instances from a Table
nav_order: 1
parent: Techniques for Using DATs
---

## Using DATs For Instancing
# Instances from a Table

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/003-using-dats/container_from_table.tox){: .btn .btn-load-example .mr-2}
[Open Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

These examples come out of a conversation from the TouchDesigner forum around how to use DATs to drive instances. Just like we can think of channels in CHOPs as holding our instance information, we can think of columns in DATs as holding the same information. In this example our **table1 DAT** has headers for 'tx', 'ty', 'tz', 'r', 'g', and 'b'. Each of those columns is used the same way as we might have used a channel with CHOPs. 

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  