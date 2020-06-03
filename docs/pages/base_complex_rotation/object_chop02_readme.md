---
layout: content-page
title: Creating a Filmstrip Illusion
---
## Complex rotation
# Object CHOP | Calculating Bearing with Feedback

Moving a step beyond simply pointing to one refernece position, this example looks at how we might be able to calculate a bearing value for each instance individually. Here we use a <b>feedback CHOP</b> to feed our <b>object CHOP</b> with a previous value — from our current position and our previous position we can derive a heading that represents the a vector between those two points. In this example we derive a bearing from that information. 
<br><br>
<img src="../../../assets/imgs/complex-rotation/object-chop-and-feedback/object-and-feedback-01.jpg">
<br><br>
Notice the order of operations here that ensures our rotation is correctly calculated. For 278 instances the <b>object CHOP</b> calculation is roughly .27ms — so it's worth noting that there are limits to the number of simultanious objects you'll be able to calculate using this approach. 
<br><br>
Another interesting approach in this example is the mechanism used for providing an ease-in and ease-out to our arrows. A <b>math CHOP</b> is used to derive the normliazed life value by dividing the current life by the total life length. The resulting value here will be from 0-1 representing the birth to death of a particle. Next we can use an <b>s-curve CHOP</b> with a <b>join SOP</b> to create a nice ease-in/out lookup that's then used by the <b>lookup CHOP</b> to give smooth in and out transitions for our arrows.
<br><br>
<img src="../../../assets/imgs/complex-rotation/object-chop-and-feedback/object-and-feedback-02.jpg">  

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  