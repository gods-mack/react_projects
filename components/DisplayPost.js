import React from 'react';
import {Image } from 'react-native';
//import Video from 'react-native-video';
import { Video } from 'expo-av';

const base_url_s3 = 'https://godsmack.s3.amazonaws.com'
const DisplayPost = ({str}) => {
    const video_extensions = ['mp4', '3gp', 'mkv']
    const image_extensions = ['jpg', 'png', 'gif', 'jpeg']
    const lst = str.split('.')
    const extension = lst[lst.length -1]
    if (extension === 'mp4') {
        //console.log("VIDEO IS RUNNING###########")
        return (
        <Video source={{uri:(str)}}   // Can be a URL or a localfile.
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            useNativeControls={true}
            shouldPlay={false}
            isMuted={false}
            isLooping           // Callback when video cannot be loaded
            style={{height:500, width:'97%'}} />
        )
    }
    return ( <Image style={{height:500, width:'97%'}} source={{uri:(str)}} /> )
}

export default DisplayPost;