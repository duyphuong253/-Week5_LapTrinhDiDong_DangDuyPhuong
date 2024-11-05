import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';

const ColorSelectionModal = ({ visible, onClose, onSelectColor, selectedProduct }) => {
  const [selectedColorId, setSelectedColorId] = useState(null);

  const colors = [
    { id: 1, name: 'Bạc', code: '#C0C0C0' },
    { id: 2, name: 'Đỏ', code: '#FF0000' },
    { id: 3, name: 'Đen', code: '#000000' },
    { id: 4, name: 'Xanh', code: '#0000FF' },
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.productHeader}>
            <Image 
              source={selectedProduct?.imageUrl} 
              style={styles.productImage} 
            />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{selectedProduct?.title}</Text>
              <Text style={styles.productSubtitle}>Hàng chính hãng</Text>
              <Text style={styles.productSubtitle}>Màu: <Text style={{fontWeight:'bold'}}>{selectedProduct?.color}</Text></Text>
              <Text style={styles.productSubtitle}>Cung cấp bởi: <Text style={{fontWeight:'bold'}}>{selectedProduct?.supplier}</Text></Text>
            </View>
           
          </View>
        </View>

        {/* Color Selection Area */}
        <View style={styles.colorSelectionArea}>
          <Text style={styles.colorSelectionTitle}>
            Chọn một màu bên dưới:
          </Text>
          
          <View style={styles.colorGrid}>
            {colors.map((color) => (
              <TouchableOpacity
                key={color.id}
                onPress={() => onSelectColor(color)}
                style={[
                  styles.colorBox,
                  { backgroundColor: color.code }
                ]}
              />
            ))}
          </View>
        </View>

        {/* Done Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.doneButton}
            onPress={onClose}
          >
            <Text style={styles.doneButtonText}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  productInfo: {
    marginLeft: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
  productSubtitle: {
    fontSize: 14,
  },
  colorSelectionArea: {
    padding: 15,
  },
  colorSelectionTitle: {
    fontSize: 18,
    marginBottom: 30,
    marginTop: 20,
  },
  colorGrid: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 4,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  doneButton: {
    backgroundColor: '#4D6DC1',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ColorSelectionModal;