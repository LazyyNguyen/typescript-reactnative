import { Image, StyleSheet,Dimensions,} from "react-native"

type ImageFollowUsProps = {
    image: string,
}
const {width, height} = Dimensions.get('screen');
export const ImageFollowUs = (props: ImageFollowUsProps) => {
    return <Image
        style={style.image}
        source={{ uri: props.image }} />
}
const style = StyleSheet.create({

    image: {
        height: 350,
        width: width - 50,
        borderRadius: 5,
        // resizeMode: 'cover',
    },

})