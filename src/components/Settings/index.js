import React from 'react';
import {
    Container,
    Content,
    Text,
    Toast,
    Button,
} from 'native-base';
import { Auth } from 'aws-amplify';
import { DataStore } from "@aws-amplify/datastore";
import styles from './styles';
import loadProducts from '../../scripts/loadProducts';

const Settings = (props) => {

    async function signOut() {
        await DataStore.clear();
        try {
            await Auth.signOut({ global: true });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    async function createProducts() {
        try {
            await loadProducts();
            Toast.show({
                text: 'Products loaded, pull to refresh',
                buttonText: "Ok",
                duration: 3000
            });
            props.navigation.navigate('Checkout');
        } catch(error) {
            Toast.show({
                text: error,
                buttonText: "Ok",
                duration: 3000
            });   
        }
    }

    async function clearDataStore() {
        await DataStore.clear();
        Toast.show({
            text: 'Storage cleared, pull to refresh',
            buttonText: "Ok",
            duration: 3000
        });
        props.navigation.navigate('Checkout');
    }

    return (
        <Container>
            <Content>
            <Button block info style={styles.settingsBtn} onPress={signOut}>
                    <Text>Sign Out</Text>
                </Button>
                <Button block info style={styles.settingsBtn} onPress={createProducts}>
                    <Text>Create dummy products</Text>
                </Button>
                <Button block info style={styles.settingsBtn} onPress={clearDataStore}>
                    <Text>Clear local storage</Text>
                </Button>
            </Content>
        </Container>
    );
};

export default Settings;