import React, { useState, useLayoutEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import { isNumber } from '../../utils/NumberUtils';
export interface IItem {
    name: string;
    quantity: number;
}
interface Props {
    addHandler: (item: IItem) => void,
}
const DEFAULT_ITEM = Object.freeze({
    name: "",
    quantity: 1
})
const AddItem: React.FC<Props> = ({ addHandler }) => {
    const [item, setItem] = useState<{name: string, quantity: any}>(DEFAULT_ITEM)
    
    // const
    const addItem = () => {
        if (!isNumber(item.quantity)) {
            return Alert.alert("Data type error!")
        }
        if (!item.name || !item.quantity) {
            Alert.alert('No Item!', 'You need to enter an item');
        } else {
            addHandler({name: item.name, quantity: item.quantity as number})
            setItem(DEFAULT_ITEM)
        }
    };


    return (
        <View>
            <Text style={styles.heading}>Add Shopping Item</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter item"
                    value={item.name}
                    onChangeText={text => setItem({...item, name: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter quantity"
                    value={String(item.quantity)}
                    onChangeText={text => {
                        setItem({...item, quantity: text})
                    }}
                />
                {!isNumber(item.quantity) && <Text style={{color: "red", alignItems: "center", justifyContent: "center"}}>Quantity must be a number</Text>}
                <TouchableOpacity style={styles.addItemButton} onPress={addItem}>
                    <Text style={styles.buttonText}>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: '700',
    },
    form: {
        marginTop: 30,
    },
    input: {
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
    },
    addItemButton: {
        marginTop:20,
        backgroundColor: '#eb8634',
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontWeight: '500' },
});
export default AddItem;