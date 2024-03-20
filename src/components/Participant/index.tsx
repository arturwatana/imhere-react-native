import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Participant = {
    name: string
    removeParticipant: () => void
}


export default function Participant({name, removeParticipant}: Participant){
    return (
            <>
                <View style={styles.participant}>
                    <Text style={styles.participantName}>{name}</Text>
                    <TouchableOpacity onPress={removeParticipant} style={styles.btn}><Text >-</Text></TouchableOpacity>
                </View>
            </>
    )
}