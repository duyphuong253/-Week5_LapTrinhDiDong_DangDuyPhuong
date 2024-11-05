import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ColorSelectionModal from './colorSelection';
const productData = [
  {
    id: 1,

    title: 'Điện Thoại Vsmart Joy 1',

    reviews: '(Xem 828 đánh giá)',

    price: '1.790.000 ₫',

    discountPrice: '1.790.000 ₫',

    imageUrl: require('./do.png'), // Thay bằng đường dẫn thực tế của ảnh

    color: 'Đỏ',
    supplier: 'Amazon Tradding',
  },

  {
    id: 2,

    title: 'Điện Thoại Vsmart Joy 2',

    reviews: '(Xem 828 đánh giá)',

    price: '1.790.000 ₫',

    discountPrice: '1.790.000 ₫',

    imageUrl: require('./xanh.png'), // Thay bằng đường dẫn thực tế của ảnh

    color: 'Xanh',

    supplier: 'Tiki Tradding',
  },

  {
    id: 3,

    title: 'Điện Thoại Vsmart Joy 3',

    reviews: '(Xem 828 đánh giá)',

    price: '1.790.000 ₫',

    discountPrice: '1.790.000 ₫',

    imageUrl: require('./bac.png'), // Thay bằng đường dẫn thực tế của ảnh

    color: 'Bạc',
    supplier: 'Shopee Tradding',
  },

  {
    id: 4,

    title: 'Điện Thoại Vsmart Joy 4',

    reviews: '(Xem 828 đánh giá)',

    price: '1.790.000 ₫',

    discountPrice: '1.790.000 ₫',

    imageUrl: require('./den.png'), // Thay bằng đường dẫn thực tế của ảnh

    color: 'Đen',
    supplier: 'Lazada Tradding',
  },
];
const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState(productData[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderProductItem = () => (
    <View style={styles.productContainer}>
      <Image source={selectedColor.imageUrl} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productTitle}>{selectedColor.title}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.productRating}>
            ⭐⭐⭐⭐⭐ {selectedColor.reviews}
          </Text>
        </View>
        <Text style={styles.productPrice}>{selectedColor.price}</Text>
        <View style={styles.refundContainer}>
          <Text style={styles.refundPolicy}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <TouchableOpacity>
            <Text style={styles.questionMark}>?</Text>
          </TouchableOpacity>
        </View>

        {/* Color selection button */}
        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => setIsModalVisible(true)}>
          <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
          <Text style={styles.arrowIcon}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderProductItem()}

      {/* Buy button at bottom */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>

      <ColorSelectionModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectColor={(color) => {
          const selectedProduct = productData.find(
            (product) => product.color === color.name
          );
          if (selectedProduct) {
            setSelectedColor(selectedProduct);
          }
        }}
        selectedProduct={selectedColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productContainer: {
    padding: 15,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 10,
  },
  productTitle: {
    fontSize: 15,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  productRating: {
    fontSize: 14,
    color: '#000',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EE0A0A',
    marginBottom: 5,
  },
  refundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  refundPolicy: {
    fontSize: 12,
    color: '#FA0000',
    marginRight: 5,
  },
  questionMark: {
    fontSize: 12,
    color: '#FA0000',
    borderWidth: 1,
    borderColor: '#FA0000',
    width: 15,
    height: 15,
    borderRadius: 8,
    textAlign: 'center',
    lineHeight: 15,
  },
  colorButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  colorButtonText: {
    fontSize: 15,
  },
  arrowIcon: {
    fontSize: 20,
  },
  buyButton: {
    backgroundColor: '#EE0A0A',
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  buyButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ProductList;
