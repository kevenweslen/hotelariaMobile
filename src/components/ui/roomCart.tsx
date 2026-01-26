import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import {Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View} from "react-native";
import { global } from "./styles";

type Infos = { title?: string; text: string; price: number};
type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
type Props = {
  image?: ImageSourcePropType;
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};
const { width, height } = Dimensions.get("window");
const RoomCard = ({ label, description, icon }: Props) => {
  return (
    <View style={global.content}>
      <View><Image style={styles.image}resizeMode="cover"/></View>
      <View>
        {!!label && <Text>{label}</Text>}
        <View>
          <View>
            {!!icon && (
              <View>
                {icon.lib === "MaterialIcons" && (
                  <MaterialIcons name={icon.name} size={23} color="#996300d5" />
                )}

                {icon.lib === "FontAwesome5" && (
                  <FontAwesome5 name={icon.name} size={23} color="#996300d5" />
                )}

                {icon.lib === "FontAwesome6" && (
                  <FontAwesome6 name={icon.name} size={23} color="#996300d5" />
                )}
              </View>
            )}

            {!!description && (
              <View>
                  <View style={styles.description}>
                    {!! description.title && <Text>{description.title}</Text>}
                  </View>
                  

              </View>
            )}
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height * 0.27,
    width: "auto",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  container: {
    padding: width * 0.02,
    marginTop: height * 0.02,
    backgroundColor: "#f6ecffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
  price: {
    fontSize: 17,
    fontWeight: 600,
    color: "purple"
  }
});

export default RoomCard;
