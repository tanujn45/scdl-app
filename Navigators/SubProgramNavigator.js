import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={OverScreen} />
      <Tab.Screen name="Eligibility" component={EliScreen} />
      <Tab.Screen name="Duration and Validity" component={DVScreen} />
      <Tab.Screen name="Program Structure" component={ProStructScreen} />
      <Tab.Screen name="Fee" component={FeeScreen} />
      <Tab.Screen name="Curriculum" component={CurrScreen} />
    </Tab.Navigator>
  );
}