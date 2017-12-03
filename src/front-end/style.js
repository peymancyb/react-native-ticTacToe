import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  },
  backgroundImage: {
    flex:1,
    backgroundColor: 'transparent',
    resizeMode: 'stretch',
    position: 'absolute',
  },
  inputStyle:{
    borderBottomWidth:1,
    width:220,
    height:40,
    padding:10,
    borderRadius:5,
    borderColor:"lightblue",
  },
  touchableStyle:{
    width:100,
    height:40,
    backgroundColor:"lightblue",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
  },
  textStyle:{
    color:"white",
    fontSize:16,
  },
  rowView:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    margin:10,
  },
  headerStyle:{
    alignItems:"center",
    justifyContent:"center",
  },
  HeaderText:{
    color:"black",
    fontSize:18,
  },
  listView:{
    marginLeft:10,
    marginRight:10,
    borderWidth:1,
    height:600,
    borderColor:"lightblue",
  },
  buttonStyleX:{
    alignItems:"center",
    justifyContent:"center",
    width:100,
    height:100,
    borderWidth:1,
    borderColor:"white",

  },
  buttonStyleY:{
    alignItems:"center",
    justifyContent:"center",
    width:100,
    height:100,
    borderWidth:1,
    borderColor:"white",
    backgroundColor:"white",
  },
});

export default styles;
