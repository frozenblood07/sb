# Forex

## Problem
In ShopBack, we deal with commissions and cashbacks in a mix of currencies on a daily basis. The following scenario is a common occurrence.

ShopBack Customer pays merchant for products in currency X
ShopBack receives commission of purchase in currency Y
ShopBack awards cashback to Customer in currency Z

Due to the highly volatile nature of exchange rates and how it now makes a significant difference in revenue due to the volume of transactions ShopBack is tracking, the management has decided that we now need to automate the updating of exchange rates.

An existing engine that tracks and update all customer transactions within the past 6 months will be using this.


## Solution

I will create the **ExchangeRate** module and install it in the customer transaction engine or any other service for that matter as a third party library.



### ExchangeRate module
![Diagram](https://github.com/frozenblood07/sb/blob/master/forex/forex_solution_dia.png)




This module will have 2 functionalities 
- Fetch rate from any external exchange rate provider and populate the redis database. 
  Example To populate the current SGD to INR exchange rate it will create 2 keys
  ```
  set('SGD|INR|2018-03-17',49.39);
  set('INR|SGD|2018-03-17',0.020);
  
  ```
  This will be a service which will run everyday at 12:00 AM and the keys will have an ttl of 6 Months by default. All the     transactions which occur during any day will use the exchange rate generated during that day. This satisfies fresh rate       updated criteria.
  
  There will be a backup service which runs every 30 secs after 12:00 AM and checks if the rate service ran properly if not     then will run the service again and after 2 unsuccessfull attempts will generate an P1 Priority alert.
  
  
 - Get the 'nth date' 'currency x to currency y' exchange rate. The module will expose functions from getting the exchange      rate
   ```
   exchangeRate.getExchangeRate('CurrencyFrom','CurrencyTo','Date');
   exchangeRate.getExchangeRate('SGD','INR','2018-03-17'); //returns 49.39
   ```
   Since the system is fetching the data directly from redis and there is no network overhead so the performance impact          negligible.
   The Module is connected to a Redis ELB hence the system is fault tolerant even in the case of a redis node failure the        system will not go down.
   
   ### Configurations
   To make the service generic we will expose a set configuration files where the service which is integrating this service      can provide its infrastructure details. 
   
   ## Thoughts behind the solution
   Reason I decided to create this engine as a installable library and not expose it as a service(REST,Apache Thrift etc..)      is to make the performance impact as low as possible and there is no buisness logic in this service what so ever in          essence this is a exchange rate fetch call from a database so I decided to keep it that way. Since we are not dealing with    the network overhead we can be sure the installing the service will not impact the performance of any existing engine.
   
