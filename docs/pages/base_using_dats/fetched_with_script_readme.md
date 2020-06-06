---
layout: content-page
title: Fetched from Storage with a Script CHOP
---

## Using DATs For Instancing
# Fetched from Storage with a Script CHOP

This example follows from the previous with a variation in considering how you might approach smooth animation as data changes over time. Operators like the **filter CHOP** or **lag CHOP** are good candidates for creating smooth motion in these circumstances. Both of those operators, however, require that the data is already formatted in CHOPs. To avoid updating a table, and then converting that data to CHOPs, this example instead uses a **script CHOP** to pull the contents of storage directly into multi-sample CHOP format. The motivation for this style of approach again stems from the original discussion condition that the data would likely be formatted / ingested as a JOSN blob. 

This example uses the same principles of data updating as we've previously seen. The primary difference in this example is the use of a **script CHOP** to move data from storage directly into CHOP format. A closer look at the **script CHOP's** callback reveals what's happening:

```python
def onCook(scriptOp):
    # clear out the old data
    scriptOp.clear()

    # copy over the incomming data
    scriptOp.copy(scriptOp.inputs[0])

    # fetch our updated data from storage - we do that 
    # here rather than in the loop to make sure we're only
    # doing this once 
    data = parent().fetch('data')

    # add a channel called 'sy' to our CHOP
    scriptOp.appendChan('sy')

    # loop through all of our samples in the channel 'index'
    for each_sample in scriptOp['index'].vals:
        # CHOP values are always float vals, so to use our
        # 'index' as a look up in our dict we need to convert
        # to an integer 
        sample_id = int(each_sample)

        # the syntax here is operator[channel][sample index]
        # in this case scriptOp is the CHOP operator connected
        # to this callback. Then we want to target the 'sy'
        # channel, and the sample at the sample_id index.
        # That sample, the data from storage we want to use
        # is in data[sample_id]['sy']
        scriptOp['sy'][sample_id] = data[sample_id]['sy']
    return
```

After being converted to a CHOP format a **filter CHOP** is used to smoothly blend between positions.

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  