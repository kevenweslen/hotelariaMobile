import { useRouter } from "expo-router";
import { Dimensions, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from "../ui/textField";




const RenderLogin = () => {
    const router = useRouter()
 
    const {height} = Dimensions.get("window");
    
    return(
        <ImageBackground source={require('../Image/mala.png')} style={global.ImageBackground}>
            <AuthContainer
                title="Bem vindo"
                subtitle="Faça seu login para continuar"
                icon="hotel">
            
            <TextField  
                
                label="Email"
                icon="email"
                placeholder="name@Email.com">
                
            </TextField>

            <PasswordField
                label="Senha"
                icon="lock"
                placeholder="*********"
            />

            <View style={{alignItems: "center"}}>
 
                <TouchableOpacity onPress={() => router.push("/(auth)/resetPassword")}>
                    <Text style={{color: "#000", fontWeight: 600, fontSize: 17, }}>Esqueceu sua senha? Clique aqui</Text>
                </TouchableOpacity>
        
                <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                    <Text style={{color: "#000", fontWeight: 600, fontSize: 17, marginTop: height * 0.01}}>Cadastre-se aqui</Text>
                </TouchableOpacity>
 
            </View>

            <TouchableOpacity style={[global.primaryButton]} onPress={() => router.push("/(tabs)/home")}>
                <Text style={global.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>

            </AuthContainer>
        </ImageBackground>
    )

}
export default RenderLogin;

