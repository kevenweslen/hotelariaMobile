import { TextField } from "../ui/textField";
import { AuthContainer } from "../ui/AuthContainer";

export function RenderLogin() {
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