import { ScreenT, useNavigator } from "../hooks/useNavigator";
import {Search} from "../screens";

const screens: ScreenT[] = [
    {name: 'Search', component: Search, options: {title: 'Поиск трека'} },
]

const SearchNavigation = () => {
    return useNavigator(screens)
}

export default SearchNavigation
