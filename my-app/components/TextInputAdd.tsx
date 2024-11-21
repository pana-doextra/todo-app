import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface ITextInputAddProps{
    value?: string
    placeholder: string
    onChangeText: (text: string) => void;
}

function TextInputAdd(props: ITextInputAddProps) {
    const {placeholder, onChangeText, value} = props;
    return (
        <TextInput
              style={{ borderWidth: 1, width: 200 }}
              placeholder={placeholder}
              onChangeText={onChangeText}
              value ={value}
              
        />)
    
}

export default TextInputAdd;