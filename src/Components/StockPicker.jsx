import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useContext, useState } from 'react';
import { StockList } from '../resource/StockList';
import { AppContext } from '../contexts/AppContext';

export function StockPicker() {
    const { state, setState } = useContext(AppContext);

    return (
        <View>
            <Picker
                selectedValue={state.selectedStock}
                onValueChange={(itemValue, itemIndex) =>
                    setState((prevContext) => ({
                        ...prevContext,
                        selectedStock: itemValue,
                    }))
                }>
                {StockList.map((element, id) => <Picker.Item key={id} label={element} value={element} />)}
            </Picker>
        </View>
    )
}