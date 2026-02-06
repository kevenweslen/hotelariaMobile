import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";

type Props = {
  title?: String;
  subtitle?: String;
  iconReturn?: keyof typeof Ionicons.glyphMap;
  icon?: keyof typeof FontAwesome6.glyphMap;
  bgImage?: React.ReactNode;
  children: React.ReactNode;
};

const AuthContainer = ({
  title,
  subtitle,
  iconReturn,
  icon,
  bgImage,
  children,
}: Props) => {
  const { width, height } = Dimensions.get("window");
  const router = useRouter();

  return (
    <SafeAreaView style={global.safeArea}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={global.keyBoardAvoiding}
        >
          <View style={global.container}>
            {!!iconReturn && (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons
                  name={"arrow-back-outline"}
                  size={23}
                  color="#fff"
                  style={{
                    marginLeft: width * 0.05,
                    backgroundColor: "#4169E1",
                    borderRadius: 100,
                    height: height * 0.04,
                    width: width * 0.12,
                    textAlign: "center",
                    textAlignVertical:"center",
                  }}
                />
              </TouchableOpacity>
            )}
            <View style={global.header}>
              <FontAwesome6 name={icon} size={23} color="#000" marginTop={10} />
              {!!title && <Text style={global.title}>{title}</Text>}
              {!!subtitle}

              {!!subtitle && <Text style={global.subTitle}>{subtitle}</Text>}
            </View>
          </View>
          <View>{children}</View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthContainer;
