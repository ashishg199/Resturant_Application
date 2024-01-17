## Page 1

From Mongodb---

  list of locations/city

http://localhost:8989/locations

list of mealtype/quickSearch

http://localhost:8989/quickSearch

list of Restaurants
http://localhost:8989/restaurants

access the data from stateId:

http://localhost:8989/restaurants?mealId=1

## Page2
-------------------

access the data from mealId:

http://localhost:8989/restaurants?stateId=1

access the data from cuisine and meal:

http://localhost:8989/filter/2?cuisineId=1


access the data from cost and meal:

http://localhost:8989/filter/2?lcost=200&hcost=500


access the data from sorting:

http://localhost:8989/filter/2?lcost=200&hcost=500&sort=1


## page3
-------------------
Details of restaurants:
http://localhost:8989/details/4


menu of restaurant:
http://localhost:8989/menu/1


## page4

------------------

Menu Details -- Post
http://localhost:8989/menuItem


place order:


## page5
------------------
list of orders:
http://localhost:8989/orders



list of order wrt email
http://localhost:8989/orders?email=jack@gmail.com

update payment detail
http://localhost:8989/updateOrders/1

delete  orders
http://localhost:8989/deleteOrder/4
