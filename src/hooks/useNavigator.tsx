import React, { ComponentClass, FunctionComponent } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();


export type ScreenT = {
    name: string,
    component: ComponentClass<any, any> | FunctionComponent<any>,
    options: StackNavigationOptions
}

export const useNavigator = (screens: ScreenT[]) => {
    return (
        <Navigator>
            {screens.map( screen => (
                <Screen name={screen.name} component={screen.component} options={screen.options}/>
            ) )}
        </Navigator>
    )
}