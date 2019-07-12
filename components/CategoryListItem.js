import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import IdePNG from '../assets/idea.png';
export default function CategoryListItem(props){
    const {title} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.categoryImage} source={IdePNG}/>
        </View>
    )
}

const styles = StyleSheet.create({
    categoryImage:{
        width:64,
        height:64
    },
    title:{
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 25,
        marginBottom: 10,
    },
    container:{
        alignItems: "center",
        padding:16,
        borderRadius:4,
        backgroundColor: 'rgba(0,0,0,0.15)',
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.8,
        marginBottom:10,
        
        
    }
})