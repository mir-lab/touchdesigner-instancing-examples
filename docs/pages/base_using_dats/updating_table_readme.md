---
layout: content-page
title: An Updating Table
---

## Using DATs For Instancing
# An Updating Table

The original forum conversation for this set of examples exported the possibility of working with a data set that was delivered as a JSON blob. For this reason, the obvious target for working with the data seemed to be DATs. That data set was expected to change over time, and part of the conversation was aimed at understanding how to approach that challenge.

In this example we simulate the presence of a changing JSON blob with a small random function below. Here we do a few small operations, we first generate a new random set of scale values that are stored in a JSON blob, which we then loop through and update in our table. A central question for this kind of approach would be how efficient / inefficient it might be to use DATs. DATs are generally the least efficient approach for working with instances, so this kind of simulation allows us begin to explore potential challenges before working with our actual data set. 

``` python
# this is our simple random data sim
# we start by creating an empty dictionary / json blob
# then fill in our blob based on how many rows are in 
# our target table - just for the sake of completeness.
# if your json blobs were different sizes each time you'd
# need some extra data handling to make sure you had a
# matching number of rows in your table.
# this sim only updates the scale y value (sy) though you
# could adapt this to meet many needs
def data_sim():

    new_dict = {}
    # create random vals for entry
    for each in range(op('table1').numRows)[1:]:
        new_dict[each] = {
            'sy' : tdu.rand(absTime.frame + each) 
        }

    return new_dict

# run the sim, and assign it to the variable data
data = data_sim()

# loop through each item in the dictioary 
for each_key, each_val in data.items():

    # loop through all the keys
    for each_sub_key, each_sub_val in each_val.items():
        
        # here our key has acted as an ID which we're
        # using to match as a row identifier
        # the sub_key matches a column
        # the value of the sub_key is the value we
        # want to update
        op('table1')[each_key, each_sub_key] = each_sub_val    
```

---

#### Tested in TouchDesigner099 2020.23680 
>*Updated 06.03.20*  
Matthew Ragan  
Zoe Sandoval  