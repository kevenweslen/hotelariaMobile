import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { global } from "./styles";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
type Infos = { title?: string; text: string; price: number };
type Props = {
  image?: ImageSourcePropType;
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};
const { width, height } = Dimensions.get("window");

const RoomCart = ({ image, label, description, icon }: Props) => {
  return (
    <View style={[global.content, styles.cardContainer]}>
      {/* Imagem */}
      {!!image && (
        <Image style={styles.image} source={image} resizeMode="cover" />
      )}

      {/* Label */}
      {!!label && <Text style={styles.label}>{label}</Text>}

      {/* Container de descrição */}
      {!!description && (
        <View style={styles.container}>
          {/* Título da descrição */}
          {!!description.title && (
            <Text style={[global.label, styles.descriptionTitle]}>
              {description.title}
            </Text>
          )}

          {/* Conteúdo da descrição com ícone */}
          <View style={styles.descriptionContent}>
            {/* Ícone */}
            {!!icon && (
              <View style={styles.iconContainer}>
                {icon.lib === "MaterialIcons" && (
                  <MaterialIcons name={icon.name} size={23} color="#FFD700" />
                )}
                {icon.lib === "FontAwesome5" && (
                  <FontAwesome5 name={icon.name} size={23} color="#FFD700" />
                )}
                {icon.lib === "FontAwesome6" && (
                  <FontAwesome6 name={icon.name} size={23} color="#FFD700" />
                )}
              </View>
            )}

            {/* Texto e preço */}
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.text}>{description.text}</Text>
              <Text style={styles.price}>R$ {description.price}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: height * 0.2,
    height: height * 0.5,
    width: width * 0.95,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  image: {
    height: height * 0.27,
    width: "90%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    elevation: 2,
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
  },
  label: {
    fontSize: 23,
    fontWeight: "600", // Use string em vez de número para fontWeight
    marginTop: height * 0.02,
    marginBottom: height * 0.01,
  },
  container: {
    padding: width * 0.02,
    height: height * 0.5,
    width: width * 0.95,
  },
  descriptionTitle: {
    marginBottom: height * 0.01,
    fontSize: 16,
    fontWeight: "500",
  },
  descriptionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: width * 0.03,
    justifyContent: "center",
  },
  descriptionTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    flex: 1,
  },
  price: {
    fontSize: 17,
    fontWeight: "600",
    color: "#2a7018",
    marginLeft: width * 0.02,
  },
});

export default RoomCart;
