import React, { ReactNode } from "react";
import {
  Dimensions,
  ImageSourcePropType,
  Pressable,
  Modal as RNModal,
  ModalProps as RNModalProps,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const { width, height } = Dimensions.get("window");

export interface ModalProps extends Partial<RNModalProps> {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  overlayStyle?: ViewStyle;
  animationType?: "none" | "slide" | "fade";
  closeOnOverlayPress?: boolean;
  imageModal?: ImageSourcePropType;
}

const componenteModal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  containerStyle,
  contentStyle,
  overlayStyle,
  animationType = "fade",
  closeOnOverlayPress = true,
  ...modalProps
}) => {
  return (
    <RNModal
      transparent
      animationType={animationType}
      visible={visible}
      onRequestClose={onClose}
      {...modalProps}
    >
      <Pressable
        style={[styles.overlay, overlayStyle]}
        onPress={closeOnOverlayPress ? onClose : undefined}
      >
        <Pressable
          style={[styles.content, contentStyle]}
          onPress={(e) => e.stopPropagation()}
        >
          <View style={[styles.container, containerStyle]}>{children}</View>
        </Pressable>
      </Pressable>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    width: width * 0.85,
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    alignContent: "center",
    alignItems: "center",
  },
});

export default componenteModal;
