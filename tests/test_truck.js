myTruck.createOrder({
  emailAddress: 'm@bond.com',
  coffee: 'earl grey'
});
myTruck.createOrder({
  emailAddress: 'dr@no.com',
  coffee: 'decaf'
});
myTruck.createOrder({
  emailAddress: 'm@goldfinger.com',
  coffee: 'double mocha'
});
myTruck.printOrders();
myTruck.deliverOrder('dr@no.com');
myTruck.deliverOrder('m@bond.com');
myTruck.printOrders();