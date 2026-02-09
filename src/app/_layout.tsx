/*slot65489*/
import AuthProvider from "@/constexts/AuthContext";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {

    return (
        return(
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}/>
            
        </AuthProvider>);
    );
}
export default RootLayout;