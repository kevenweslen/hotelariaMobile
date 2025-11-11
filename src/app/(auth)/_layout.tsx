/*
A responsabilidade/função deste arquivo é definir o fluxo de navegação entre as treças de autenticação:
1- Login
2- Register
3- Reset pasword

Empilhamento de telas: 

Stak Navigator
    Funções para manipular a sobreposição de teals{
        push(); //Empilha/pucha/sobrepoem uma tela sobre outra.
        back(); //Função "contraria à push" volta para a tela enterior, seguindo a ordem de empilhamento. 
        replace(); // substitui uma tela por outra. Está substituição retira uma tela do empilhamento e substitui, após a execução do replace se torna impossivel voltar para a tela substituida
    }
*/
import { Stack } from "expo-router";

export default function AuthLayout(){

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name = "index" options = {{title: "Login"}}/>
        </Stack>
    )
}