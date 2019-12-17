import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import api from "../../../services/api";

import {
    Container,
    Card,
    ContainerCards,
    Banner,
    Left,
    Info,
    Name,
    List,
    Title
} from './styles';

export default function Drinks({ navigation }) {
    const [Drinks, SetDrinks] = useState([])
    const Categorie = navigation.state.params.categorie
    useEffect(() => {
        async function loadDrinks() {
            const response = await api.get("filter.php?c=" + Categorie)
            SetDrinks(response.data.drinks)

        }
        loadDrinks();
    }, [])
    return (
        <Container>
            <ContainerCards>
                <List
                    data={Drinks}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Details', { DrinkId: item.idDrink }) }}>
                            <Card>
                                <Left>
                                    <Banner source={{ uri: item.strDrinkThumb }} />
                                </Left>

                                <Info>
                                    <Name>{item.strDrink}</Name>
                                </Info>
                            </Card>
                        </TouchableOpacity>
                    }
                />
            </ContainerCards>
        </Container>
    );
};

Drinks.navigationOptions = {
    title: 'Drinks',
}