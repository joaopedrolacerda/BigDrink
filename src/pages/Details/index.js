import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import YouTube from 'react-native-youtube';
import {
    Container,
    ImageContainer,
    ContainerDetails,
    Description,
    Title,
    Scroll
} from './styles';

import api from '../../../services/api';


export default function Details({ navigation }) {
    const apiKey = "AIzaSyCa7hhY0HKUW-s2TSI87GAsYREOWLHZ9tE";
    const [Drink, SetDrink] = useState('')
    const DrinkId = navigation.state.params.DrinkId;

    useEffect(() => {
        async function loadDrink() {
            const response = await api.get("lookup.php?i=" + DrinkId)
            SetDrink(response.data.drinks[0])
        }
        loadDrink();
    }, [])
    return (

        <Container>

            <ImageContainer
                source={{ uri: Drink.strDrinkThumb }}
            />

            <ContainerDetails>
                <Scroll>
                    <Title>Instructions:</Title>
                    <Description>{Drink.strInstructionsDE}</Description>
                    <Title>preparation:</Title>

                    <YouTube
                        apiKey={'AIzaSyCa7hhY0HKUW-s2TSI87GAsYREOWLHZ9tE'}
                        //AIzaSyCa7hhY0HKUW-s2TSI87GAsYREOWLHZ9tE
                        videoId="bez9THENCTw" // The YouTube video ID
                        play={true}
                        style={{ height: 300 }}
                    />
                </Scroll>

            </ContainerDetails>

        </Container>
    );
}
Details.navigationOptions = {
    title: 'Details',
}