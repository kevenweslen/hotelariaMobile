import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/textField";
import { global } from "../ui/styles";
import { Text, TouchableOpacity } from "react-native";



const RenderLogin = () => {
    return(
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
            <TouchableOpacity style={[global.primaryButton]}>
                <Text style={global.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>
            </AuthContainer>
    )

}
export default RenderLogin;

