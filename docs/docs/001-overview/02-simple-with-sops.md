---
layout: default
title: Simple Instances with SOPs
nav_order: 2
parent: Instancing Overview
---

## Instances at a Glance
# Simple Instances with SOPs

*****

[Load Example](?actionable=1&action=load_tox&remotePath=https://github.com/mir-lab/touchdesigner-instancing-examples-code/raw/main/tox/001-overview/container_simple_instances_with_sops.tox){: .btn .btn-load-example .mr-2}
[TD Network](?actionable=1&action=open_floating_network){: .btn .btn-td-network .mr-2}
[Web](?actionable=1&action=open_in_browser){: .btn .btn-load-web .mr-2}

While working with CHOPs was previously one of the few ways to work with instances, changes in TouchDesigner have made room for creating instances more intuitively and with fewer intermediary steps. In this example we can see how we might create instances using only Surface Operators without converting them.

Open the example and note that we start with a **sphere SOP**, which is in turn used by our **geo1 COMP** to create our instances. Take a moment to look at the **geo1 COMP**. Notice that the parameters 'Translate X', 'Translate Y', and 'Translate Z' point to the **null_instances SOP**. These parameters let us specify which channels should be used to derive relevant information for our copies. Unlike the example "Simple Instances with CHOPs" here our parameters point to 'P(0)', 'P(1)', and 'P(2)'. These are the point attributes for our SOP and represent the x, y, and z positions of each point on our **sphere SOP**. 

Perhaps the most important piece to think about here is that names matter — so if we point to an attribute or a channel name we need to know what those values represent in order to get results that are consistent with our vision and expectations.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  