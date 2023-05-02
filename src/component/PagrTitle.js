import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { headerImages } from "../assets/headerImages/headerImages";

const PagrTitle = (props) => {
    const renderHeaderImage = () => {
        const title = props.title.toLocaleLowerCase().split("");
        console.log(title);
        let images = title.map(letter => {
            return <Image source={headerImages[letter]} style={styles.headerLetters} />
        })
        return images;
        
    }

    return (
        <View style={styles.card}>
            {renderHeaderImage()}
        </View>
    );
}
const styles = StyleSheet.create({

    headerLetters: {
        width: 74,
        height: 100,
        marginLeft: 3,
        marginRight: 3,
        resizeMode: 'contain'

    },
    card: {
        width: '100%',
        flexDirection: 'row',
        paddingTop: 15,
    },
   
})

export default PagrTitle;
