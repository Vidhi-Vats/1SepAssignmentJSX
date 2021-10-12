import React, { useState } from "react";
import {View,Text, Button}from "react-native";

const Parentfunctionalcomponent = ()=>
{

    const [value,newvalue] = useState(0);
    
    return(
        <View style = {{paddingTop:30}}>
            <Text>value is {value}</Text>
            <Button onPress={()=>newvalue(value+1)} title="IncrementCounter"></Button>
            <ChildFunctionalComponent countervalue = {value}/>
        </View>
    );
}


const ChildFunctionalComponent = (props) =>
{
    return(
           <View style = {{paddingTop:30}}>
               <Text>{props.countervalue}</Text>
           </View>
    );
}
export default Parentfunctionalcomponent;
