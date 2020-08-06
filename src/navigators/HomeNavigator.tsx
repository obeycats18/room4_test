import { ScreenT, useNavigator } from "../hooks/useNavigator";
import {Home, ArtistDetail} from "../screens";

const screens: ScreenT[] = [
    {name: 'Home', component: Home, options: {title: 'Главная'} },
    {name: 'ArtistDetail', component: ArtistDetail, options: {title: 'Исполнитель'} },
]

const HomeNavigator = () => {
    return useNavigator(screens)
}

export default HomeNavigator
