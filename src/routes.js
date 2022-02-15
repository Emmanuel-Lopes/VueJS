import Home from "./components/home/Home.vue"
import Cadastro from "./components/cadastro/Cadastro.vue"

export const routes = [
    {path: '', component: Home, titulo: "Home"}, //deixar o path em branco é o mesmo localhost:3000/#/
    {path: '/cadastro', component: Cadastro, titulo: "Cadastro"}
];