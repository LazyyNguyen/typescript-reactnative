import React, { useRef, useState, useEffect, FunctionComponent } from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    Animated,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import { User } from '../../modules/FollowUs'
import { UsersServices } from '../../services/UsersServices';
import GlobalStyles from '../../styles/GlobalStyles'

interface IState {
    loading: boolean,
    users: User[],
    errorMsg: string
}
const { width, height } = Dimensions.get('screen');
const FollowUs: FunctionComponent = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as User[],
        errorMsg: ''
    });

    useEffect(() => {

        setState({ ...state, loading: true })
        UsersServices.getAllUsers()
            .then(res => setState({
                ...state,
                loading: false,
                users: res.data
            }))
            .catch(err => setState({
                ...state, loading: false, errorMsg: err.message
            }))
    }, []);
    // console.log('state', { ...state });

    // const {loading,users,errorMsg} = state


    return (
        <>


            <View style={style.container}>
                {state.errorMsg && <Text>Error</Text>}
                <Text style={GlobalStyles.title}>Follow Us</Text>
                <Image
                style={{marginTop:10}}
                source={require('../../../assets/images/fashion/icons/Instagram.png')}
                />

                <Animated.FlatList
                    style={style.flatList}
                    data={state.users}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    decelerationRate={'fast'}
                    keyExtractor={(_, index) => index.toString()}
                    
                    renderItem={({ item, index }) => {
                
                        return (
                            <View style={style.imageContainer}>
                                <FastImage
                                 source={{uri:item?.image}} style={{height: 350, width: 350}} />
                                <Text style={style.name}>@{item.name}</Text>
                            </View>

                        );
                    }}
                />

            </View>
        </>
    );

}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatList: { flexGrow: 0 },
    imageContainer: {
        position: 'relative',
        width,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        position: 'absolute',
        color: '#FFFF',
        textAlign: 'left',
        left: 40,
        bottom: 40,
        fontWeight:'700'

    }

});

export default FollowUs;