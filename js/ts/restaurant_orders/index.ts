import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(priceBracket: PriceBracket): number {
  switch (priceBracket) {
    case PriceBracket.Low:
      return 10;
    case PriceBracket.Medium:
      return 20;
    case PriceBracket.High:
      return 30;
    default:
      throw new Error('Invalid PriceBracket');
  }
}

// Add your getOrders() function below:
function getOrders(priceBracket: PriceBracket, orders: Order[][]): Order[][] {
  const maxPrice = getMaxPrice(priceBracket);
  return orders.map((restaurantOrders) =>
    restaurantOrders.filter((order) => order.price <= maxPrice)
  );
}

// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], orders: Order[][]): void {
  if (!orders || orders.length === 0 || !orders.some(restaurantOrders => restaurantOrders.length > 0)) {
    console.log("No eligible orders to display.");
    return;
  }
  orders.forEach((restaurantOrders, i) => {
    if (restaurantOrders.length > 0) {
      console.log(restaurants[i].name);
      restaurantOrders.forEach((order) => {
        console.log(`- ${order.name}: $${order.price.toFixed(2)}`);
      });
    }
  });
}

// Main
envokeMain();

function envokeMain() {
  if (orders && orders.length > 0) {
    const eligibleOrders = getOrders(PriceBracket.Low, orders);
    printOrders(restaurants, eligibleOrders);
  } else {
    console.log("No orders available.");
  }
}
