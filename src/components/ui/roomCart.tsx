import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
type Infos = { title?: string; text: string; price: number};
type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
type Props = {
  image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};
const RoomCard = ({ label, description, icon }: Props) => {
  return (
    <View>
      <View></View>
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
                    <Text>  {description.text}</Text>
                    <Text>R$: {description.price}</Text>
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
    description: {
        backgroundColor: "#9963003a",
        borderRadius: 10,
    }
});

export default RoomCard;
