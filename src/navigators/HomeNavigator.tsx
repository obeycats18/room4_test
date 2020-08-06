import { ScreenT, useNavigator } from "../hooks/useNavigator";
import Home from "../screens/Home/container";

const screens: ScreenT[] = [
    {name: 'Home', component: Home, options: {title: 'Главная'} }
]

export const HomeNavigator = () => {
    return useNavigator(screens)
}
