# Forex

## Problem
In ShopBack, we deal with commissions and cashbacks in a mix of currencies on a daily basis. The following scenario is a common occurrence.

ShopBack Customer pays merchant for products in currency X
ShopBack receives commission of purchase in currency Y
ShopBack awards cashback to Customer in currency Z

Due to the highly volatile nature of exchange rates and how it now makes a significant difference in revenue due to the volume of transactions ShopBack is tracking, the management has decided that we now need to automate the updating of exchange rates.

An existing engine that tracks and update all customer transactions within the past 6 months will be using this.


## Solution
