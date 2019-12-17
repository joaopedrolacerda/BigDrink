import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import api from '../../../services/api'
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

export default function Dashboard({ navigation }) {
    const [Categories, SetCategories] = useState([])
    const data = ['1', '2', '3']
    useEffect(() => {
        async function loadDetails() {
            const response = await api.get("list.php?c=list")
            SetCategories(response.data.drinks)
        }
        loadDetails();

    }, [])

    return (
        <Container>
            <ContainerCards>
                <List
                    data={Categories}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Drinks', { categorie: item.strCategory }) }}
                        >
                            <Card>
                                <Left>
                                    <Icon name={'cocktail'} size={50} />
                                </Left>

                                <Info>
                                    <Name>{item.strCategory}</Name>
                                </Info>
                            </Card>
                        </TouchableOpacity>


                    }
                />


            </ContainerCards>
        </Container>
    );
}
Dashboard.navigationOptions = {
    title: 'Categories',
}