import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from "..";
import { Check, Translate_Month } from './Calender.functions';

const thisMonth = new Date().getMonth()
const thisYear = new Date().getFullYear()
const limit = 12

export const Head = ({Grab}) => {

    const [month, setMonth] = useState(thisMonth),
        [year, setYear] = useState(thisYear),
        [count, setCount] = useState(0);

    const checkMonth = (mon) =>{
        if(mon < 0){
            mon = 11
            setYear(year-1)
        }else if(mon > 11){
            mon = 0
            setYear(year+1)
        }
        return mon
    }

    const Forward = () =>{
        setMonth(checkMonth(month+1))
        // setCount(count+1)
    }
    const Back = () =>{
        setMonth(checkMonth(month-1))
        // setCount(count-1)
    }

    useEffect(()=>{
        Grab({month:month, year:year})
    },[month, year])

    return (
        <View style={styles.head}>
            <IconButton type="back" Func={Back}/>
            <Text> {Translate_Month(month)}</Text>
            <Text> </Text>
            <Text>{year} </Text>
            <IconButton type="forward" Func={Forward} />
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row'
    }
})