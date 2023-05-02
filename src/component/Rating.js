import React, { useState, useEffect } from 'react';

import {
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Image,
  
} from 'react-native';

const starSelected = require('../assets/icons8-star-filled-64.png');
const starNotSelected =require('../assets/icons8-star-filled-64(1).png')
   const Rating  = ({
  starSize = 30,
  defaultRating = 0,
  count = 5,
  readonly = false,
  onRatingFinished = () => {},
}) => {

  const [currentRating, setCurrentRating] = useState(0);

  const [animation] = useState(new Animated.Value(1));

  useEffect(() => {
    setCurrentRating(defaultRating);
  }, [defaultRating]);

  const animate = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(1);
    });
  };

  const animationScale = animation.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.2, 1],
  });

  const animationStyle = {
    transform: [{ scale: animationScale }],
  };

  const setRating = (rating: Number) => {
    if (readonly) {
      return;
    }
    onRatingFinished(rating);
    setCurrentRating(rating);
    animate();
  };

  return (
    <View style={[{ flexDirection: 'row'}]}>
       {[...Array.from({length:count})].map((value, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => setRating(index + 1)}>
          {currentRating >= index + 1 ? (
                <Animated.View style={animationStyle}>
          
      
              <Image
                source={starSelected}
                style={[{ width: starSize, height: starSize }]}
              />
              
            </Animated.View>
          ) : (
            
            <Image
              source={starNotSelected}
              style={[{ width: starSize, height: starSize }]}
            />
          
          )}
        </TouchableWithoutFeedback> 
      ))}
    </View>
  );
};
export default Rating;