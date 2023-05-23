
import {View,StyleSheet, Image,} from "react-native"
import { headerImages } from "../assets/headerImages/headerImages";
import { Sizes } from "../res/Sizes";
const Header=(props)=>{
    const letterWidth = ( Sizes.width / (props.title.length)) - props.title.length ; 
    const renderHeaderImage = () => {
        const title = props.title?.toLocaleLowerCase().split("");
        console.log(title);
       let images = title?.map(letter => {
        return <Image source={headerImages[letter]}style={styles.headerLetters(letterWidth)} />
       })
       return images;
    }
        return( 
        
         <View style={styles.lettersContaner}>
            {renderHeaderImage()}
         </View>
    )
}
const radius=30
const styles=StyleSheet.create({
    
    headerLetters: (width) => ({
        width:width,
        height:130,
        marginLeft:3,
        marginRight:3 , 
        resizeMode:'contain'
        
    }), 
    lettersContaner:{
        width:'100%', 
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:15 , 
        backgroundColor:'#ffff' , 
        borderBottomWidth:0.7 , 
        borderColor:'gray',
       backgroundColor:"white"
    }
   
   
})
export default Header;