import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"


type BtnProps = {
    add: boolean
    onPress: () => void
}

export default function Button({add, onPress} : BtnProps){
    return (
        <>
             <TouchableOpacity onPress={onPress} style={styles.btn}><Text style={styles.btnText}>+</Text></TouchableOpacity>
        </>
    )
}