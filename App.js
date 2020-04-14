import React from 'react';

import {StyleSheet, Text, View, StatusBar, SafeAreaView} from "react-native";

import Row from './components/row';
import Button from './components/button';
import Calculator, {initialState} from "./utility/calculator";


const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            backgroundColor: "#202020",
            justifyContent: "flex-end"
        },
    value:
        {
            color: "#fff",
            fontSize: 40,
            textAlign: "right",
            marginRight: 20,
            marginBottom: 10,
        },
})


export default class App extends React.Component
{
    state = initialState;

    handleTap = (type, value) =>
    {
        this.setState(state => Calculator(type, value, state));
    }
    
    render()
    {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <SafeAreaView>
                    <Text style={styles.value}>{parseFloat(this.state.currentValue).toLocaleString()}</Text>
                    <Row>
                        <Button text="AC" theme="secondary" onPress={() => this.handleTap("clear")}></Button>
                        <Button text="+/-" theme="secondary" onPress={() => this.handleTap("posneg")}></Button>
                        <Button text="%" theme="secondary" onPress={() => this.handleTap("percent")}></Button>
                        <Button text="/" theme="accent" onPress={() => this.handleTap("operator", "/")}></Button>
                    </Row>

                    <Row>
                        <Button text="7" onPress={() => this.handleTap("number", 7)}></Button>
                        <Button text="8" onPress={() => this.handleTap("number", 8)}></Button>
                        <Button text="9" onPress={() => this.handleTap("number", 9)}></Button>
                        <Button text="x" theme="accent" onPress={() => this.handleTap("operator", "*")}></Button>
                    </Row>

                    <Row>
                        <Button text="4" onPress={() => this.handleTap("number", 4)}></Button>
                        <Button text="5" onPress={() => this.handleTap("number", 5)}></Button>
                        <Button text="6" onPress={() => this.handleTap("number", 6)}></Button>
                        <Button text="-" theme="accent" onPress={() => this.handleTap("operator", "-")}></Button>
                    </Row>

                    <Row>
                        <Button text="1" onPress={() => this.handleTap("number", 1)}></Button>
                        <Button text="2" onPress={() => this.handleTap("number", 2)}></Button>
                        <Button text="3" onPress={() => this.handleTap("number", 3)}></Button>
                        <Button text="+" theme="accent" onPress={() => this.handleTap("operator", "+")}></Button>
                    </Row>

                    <Row>
                        <Button text="0" size='double' onPress={() => this.handleTap("number", 0)}></Button>
                        <Button text="." onPress={() => this.handleTap("number", ".")}></Button>
                        <Button text="=" theme="accent" onPress={() => this.handleTap("equals", "=")}></Button>
                    </Row>
                </SafeAreaView>
            </View>
        );
    }
}
