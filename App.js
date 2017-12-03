import React, {Component,PureComponent}from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight ,TextInput,Image} from 'react-native';
import styles from './src/front-end/style';
import {FontAwesome} from '@expo/vector-icons';


// this.setState(prevState=>({pressStatus: !prevState.pressStatus}));
class Square extends Component{
  constructor(props){
    super(props);
    this.state={
      pressStatus: false,
    };
  }
  render(){
    return(
      <TouchableHighlight
        onPress={()=>{
          this.props.onClick();
          this.setState(prevState=>({pressStatus: !prevState.pressStatus}));
        }}
        style={this.state.pressStatus? styles.buttonStyleY :styles.buttonStyleX}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>
            {this.props.value}
          </Text>
      </TouchableHighlight>
    );
  }
}

class Board extends Component{
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
    this.renderItem = this.renderItem.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
  }

  handleTouch(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }


  renderItem(i){
    return (
        <Square
        value={this.state.squares[i]}
        onClick={()=>this.handleTouch(i)}
      />
    );
  }


  render(){
      const winner = Judge(this.state.squares);
      let Status;
      if(winner){
         Status = ()=>{
                return(
                <View style={{flexDirection:"row",backgroundColor:'transparent'}}>
                  <FontAwesome style={{marginRight:5}} name="smile-o" size={18} color="white"/>
                    <Text style={{color:"white"}}>
                        Winner is {winner} & OCTAPUS IS THE ONLY ONE!
                    </Text>
                  <FontAwesome style={{marginLeft:5}} name="smile-o" size={18} color="white"/>
                </View>
                );
              };
      }else{
        Status = ()=>{
               return(
                 <Text style={{backgroundColor:'transparent',color:"white"}}>
                   next player: {this.state.xIsNext ? "X" : "O"}
                 </Text>
               );
             };
           }

    return(
      <View >

        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          {this.renderItem(0)}
          {this.renderItem(1)}
          {this.renderItem(2)}
        </View>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          {this.renderItem(3)}
          {this.renderItem(4)}
          {this.renderItem(5)}
        </View>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          {this.renderItem(6)}
          {this.renderItem(7)}
          {this.renderItem(8)}
        </View>
        <View style={{alignItems:"center",justifyContent:"center",marginTop:40}}>
          <Status />
        </View>

        <View style={{justifyContent:"center",alignItems:"center"}}>
          <TouchableHighlight
            onPress={()=>this.setState({squares: this.state.squares.fill(null)})}
            style={{width:200,height:50,justifyContent:"center",alignItems:"center",marginTop:40,backgroundColor:"white"}}>
            <Text>Play again</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image
          source={require("./src/front-end/octapus.jpg")}
          style={styles.backgroundImage}
        />
        <Board />
      </View>
    );
  }
}

function Judge(squares){
  const Declare = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < Declare.length; i++) {
    const [a, b, c] = Declare[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
