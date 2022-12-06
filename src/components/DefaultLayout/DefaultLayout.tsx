import React, { FunctionComponent } from 'react';
import { View,StyleSheet,Image} from 'react-native';

type DefaultLayoutProps = {
    children: React.ReactNode
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({children}:DefaultLayoutProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default DefaultLayout;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
      },
      header: {
        marginBottom:15,
        justifyContent: 'space-around',
        flexDirection: "row"
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      },
      logo: {
        marginLeft: 50,

      },
      iconHeaderRight: {
        flexDirection: "row",
        justifyContent: 'space-between',
      },
      iconRight: {
        marginLeft: 10,
      },
})
