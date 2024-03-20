import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 48,
      gap: 10
    },
    event: {
      color: "#fff",
      marginTop:98,
      fontWeight:"bold",
      fontSize: 22
    },
    input: {
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        flex: 1,
        color: "#fff"
    },
   
    form: {
        flexDirection: "row",
        marginTop: 30,
    },
    participants: {
      gap: 5,
      flex: 1,
    }
  });
  