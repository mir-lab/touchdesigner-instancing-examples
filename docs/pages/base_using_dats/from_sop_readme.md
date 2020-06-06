---
layout: content-page
title: Using a SOP and Point Attributes
---

## Using DATs For Instancing
# Using a SOP and Point Attributes

Similar to our previous example this explores the use of updating scale values — only rather than directly updating a table, which can be computationally expensive — this instead updates a dictionary in storage. Values in storage are treated as native data types, while cell contents are strings which then need to be correctly type cast before instancing. This process is invisible to the user, but adds to the computational overhead involved in working with DATs. This instead uses an expression in a **point SOP** to retrieve a value from storage.

To see how this process is working open the network and first look at the **text1 DAT** — here you'll find the script that is run at a regular interval to update storage. Next look at the **point SOP** to see how that value is retrieved and assigned for scale in the SOP pipeline. At a small scale the computation time for this approach is negligible — how / if it would work at scale is worth exploring in order to better understand what approach you might want to use for a project. 

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  