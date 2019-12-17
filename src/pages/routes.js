import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from './Dashboard';
import Drinks from './Drinks';
import Details from './Details'

const Routes = createAppContainer(
    createStackNavigator({
        Dashboard: Dashboard,
        Drinks: Drinks,
        Details: Details
    })
)

export default Routes;