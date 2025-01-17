import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { CartContext } from "./cartContext";

interface Product {
  name: string;
  price: string;
  quantity: number;
  image: string;
  description: string;
}

type RootStackParamList = {
  ProductDetail: { product: Product };
};

const ProductDetail: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ProductDetail">>();
  const { product } = route.params;
  const { addToCart } = useContext(CartContext); // Sử dụng CartContext

  const handleAddToCart = () => {
    addToCart(product); // Thêm sản phẩm vào giỏ hàng thông qua CartContext
    Alert.alert(
      "Added to Cart",
      `${product.name} has been added to your cart.`
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
      <View style={{ display: "flex", flexDirection: "row", width: "60%" }}>
        <Text style={styles.productQuantity}>Đang có: {product.quantity}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>

      <ScrollView>
        <Text style={styles.productDescription}>{product.description}</Text>
      </ScrollView>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 7,
  },
  productDescription: {
    margin: "auto",
    fontSize: 15,
    alignItems: "center",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: "green",
    marginBottom: 10,
    marginLeft: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "auto",
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "ffff",
  },
  productQuantity: {
    fontSize: 16,
    color: "gray",
    marginBottom: 6,
    flex: 1,
  },
});

export default ProductDetail;
