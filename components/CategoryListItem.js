import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import IdePNG from '../assets/idea.png';
export default function CategoryListItem(props){
    const {category} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
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
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 6,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16,
        elevation:5,
        marginLeft:5,
        marginRight: 5,
      }    
})