import { TextInput, StyleSheet } from "react-native";

interface ITextInputAddProps{
    placeholder: string
    onChangeText: (text: string) => void;
}

function TextInputAdd(props: ITextInputAddProps) {
    const {placeholder, onChangeText} = props;
    return (
        <TextInput
              style={{ borderWidth: 1, width: 200 }}
              placeholder={placeholder}
              onChangeText={onChangeText}
        />)
    
}

export default TextInputAdd;