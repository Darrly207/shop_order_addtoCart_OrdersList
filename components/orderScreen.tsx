import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OrderContext } from "./orderContext";

const OrdersScreen = () => {
  const { orders } = useContext(OrderContext);
  const navigation = useNavigation();
  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.orderItem}
      onPress={() => navigation.navigate("OrderDetails", { orderId: item.id })}
    >
      <Text style={styles.orderDate}>
        {new Date(item.date).toLocaleDateString()}
      </Text>
      <Text style={styles.orderTotal}>Tổng: {item.total.toFixed(2)}đ</Text>
      <Text
        style={[styles.orderStatus, { color: item.isPaid ? "green" : "red" }]}
      >
        {item.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đơn hàng của bạn</Text>
      {orders.length === 0 ? (
        <Text style={styles.emptyMessage}>Bạn chưa có đơn hàng nào.</Text>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderTotal: {
    fontSize: 14,
    marginTop: 5,
  },
  orderStatus: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "bold",
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default OrdersScreen;
