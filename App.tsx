import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Shop from "./components/shop";
import ProductDetail from "./components/productDetail";
import Cart from "./components/Cart";
import Order from "./components/Order";
import OrdersScreen from "./components/orderScreen";
import { CartProvider } from "./components/cartContext";
import { OrderProvider } from "./components/orderContext";
import { ProductProvider } from "./components/productContext";

export type RootStackParamList = {
  Shop: undefined;
  ProductDetail: { product: any };
  Cart: undefined;
  Order: undefined;
  Orders: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <OrderProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Shop">
              <Stack.Screen name="Shop" component={Shop} />
              <Stack.Screen name="ProductDetail" component={ProductDetail} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Order" component={Order} />
              <Stack.Screen name="Orders" component={OrdersScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </OrderProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
