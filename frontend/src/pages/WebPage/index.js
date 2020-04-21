import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

export default function WebPage(){
    const route = useRoute();
    
    const favorite = route.params.favorite;

    return <WebView source={{ uri: favorite.url }} style= {{ marginTop:20 }} />;
}