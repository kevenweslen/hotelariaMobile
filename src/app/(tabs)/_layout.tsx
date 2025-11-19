/*Definir o fluxo de navegação entre as telas disponiveis em Tab Navgator.
"Normalmente são apenas 4 telas, mais que isso fica fora da norma kk"
Telas:
1- Home/pesquisar
2- Reservas
3- Perfil
4- 
*/
import { FontAwesome6 } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

const homeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
        <Tabs.Screen
          name="reservations"
          options={{
            title: "reservas",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="calendar-check" size={16} />
            ),
          }}
        />

        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="house-chimney" size={16} />
            ),
          }}
        />

        <Tabs.Screen
          name="acount"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="circle-user" size={16} />
            ),
          }}
        />
      </Tabs>
    </Stack>
  );
};

export default homeLayout;
