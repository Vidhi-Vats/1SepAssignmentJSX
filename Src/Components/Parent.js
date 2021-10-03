import React from "react";
import  { Component} from "react";
import {Button,Text,View} from "react-native";

export default class Home extends Component{
    
    state = {
        counter:this.props.value,
        
    }

    
    componentDidMount()
    {
        console.log("parent component did mount");
    }
    componentDidUpdate()
    {
        console.log("parent component did update");
    }
    shouldComponentUpdate()
    {
        console.log("parent should component update");
        return true;
    }
    componentWillUnmount()
    {
        console.log("component will unmount");
    }

   
    
    render()
    {
        
        return(
            <View>
                <Text style={{fontSize:20,paddingTop:30}}>Child component:{this.state.counter}</Text>
                <Button onPress = {()=>this.setState({counter:this.state.counter+1})}title="Increment counter"></Button>
            </View>
        );
        
    }
    
}


