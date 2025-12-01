import { FontAwesome6, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
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

const AuthContainer = ({ title, subtitle, iconReturn, icon, bgImage, children}: Props) => {
  const { width, height} = Dimensions.get("window");
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
                    name={iconReturn}
                    size={23}
                    color="#fff"
                    style={{ marginLeft: width * 0.04,
                             backgroundColor: "#4169E1",
                             borderRadius: 100,
                             height: height * 0.03,
                             width: width * 0.06,
 
                    }}
                  />
                </TouchableOpacity>
              )}
              <View style={global.header}>
                {!!title && <Text style={global.title}>{title}</Text>}
                {!!subtitle && (
                  <FontAwesome6
                    name={icon}
                    size={23}
                    color="#000"
                    marginTop={10}
                  />
                )}
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
