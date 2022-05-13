import React from "react";
import { View, Text, StyleSheet, Pressable, Image, StatusBar } from "react-native";

import foto from "./src/images/foto2.jpg";
import whatsIcon from "./src/images/whatsapp.png";

export default function App(){

    return(
        <>
            <StatusBar barStyle='default'/>
            <View style={style.view1}>
                <Image style={style.avatar} source={foto} />
                <Text style={style.texto}> Ricardo Gomes Brito</Text>
                <Pressable style={style.botao} onPress={() => {alert("Isto é uma mensagem.")} }>
                    <Text style={style.texto2}>Título da Mensagem</Text>
                </Pressable>
            </View>
            <View style={style.view2}>
                <Image style={style.whats} source={whatsIcon} />
                <Text style={style.texto3}> (71) 98856-1511</Text>

            </View>
        </>
    )
}

const style = StyleSheet.create({
    view1:{
        flex:1,
        backgroundColor:'#e7e7e7',
        justifyContent: 'center',
        alignItems: 'center',

    },
    view2:{
        height:"10%",
        backgroundColor:'#e7e7e7',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        width:100,
        height:100,
        marginBottom:50,
    },
    texto: {
        fontSize:20,
        fontWeight:'bold',
        color:'#333333',
        lineHeight:32
    },
    texto2: {
        fontSize:15,
        color:'#841584'
    },
    texto3: {
        fontSize:20,
        fontWeight:'bold',
        color:'#333333',
        lineHeight:22
    },
    whats:{
        width:24,
        height:24,
        marginRight:8
    },
    botao:{
        marginTop:20,
        padding:10,
        borderRadius:15,
        borderWidth: 2,
        borderColor:'#841584'
    }


})