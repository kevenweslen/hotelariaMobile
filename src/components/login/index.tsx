import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/textField";

const RenderLogin = () => {
    return(
            <AuthContainer
                title="Bem vindo"
                subtitle="Faça seu login para continuar"
                icon="hotel">
            
            <TextField  
                label="Email"
                icon="email">
            </TextField>

            </AuthContainer>
    )

}
export default RenderLogin;

