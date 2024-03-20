import {  Text, TextInput, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/Participant';
import Button from '../../components/Button';
import { useState } from 'react';

export default function Home() {

   const [participants, setParticipants] = useState<string[]>([])
   const [name, setName] = useState<string>("")

    function handleParticipantAdd(){
      if(participants.includes(name)){
        return Alert.alert("Participante ja existe", "este participante ja existe", [{text: "Cancelar"}])
      }
      setParticipants(prev => [...prev, name])
      setName("")
    }

    function handleParticipantRemove(participantName: string){
      return Alert.alert("Remover participante",`Deseja mesmo remover ${participantName}?`, [
        {
          text: "Sim",
          onPress: () => setParticipants(prev => prev.filter(participant => participant !== participantName))
        },
        {
          text: "Nao"
        }
      ])   
    }


  return (
    <View style={styles.container}>
          <View>
              <Text style={styles.event}>Nome do evento</Text>
              <Text>Nome do evento</Text>
          </View>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder='Digite seu nome' id="name" value={name} onChangeText={(e) => setName(e)} placeholderTextColor={"#fff"} />
          <Button onPress={handleParticipantAdd} add/>
        </View>
        <View style={styles.participants}>
        <FlatList  data={participants} keyExtractor={item => item} ListEmptyComponent={() => (<Text>Nao temos nada ainda</Text>)} renderItem={({item}) => {
          return <Participant name={item} key={item} removeParticipant={() =>handleParticipantRemove(item)}/>
        }}/>
        </View>
    </View>
  );
}