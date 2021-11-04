import React from 'react';
import { View } from 'react-native';
import { Block } from '..';

const Days = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Block>Su</Block>
            <Block></Block>
            <Block>M</Block>
            <Block></Block>
            <Block>Tu</Block>
            <Block></Block>
            <Block>We</Block>
            <Block></Block>
            <Block>Th</Block>
            <Block></Block>
            <Block>Fr</Block>
            <Block></Block>
            <Block>Sa</Block>
        </View>
    )
}

const Row = ({week}) =>{
    // console.log(weeks)
    return(
        <View style={{flexDirection: 'row'}}>
            {/* <Block>{
                week[0].day === 0? week[0].date:null
                }</Block>
            <Block></Block>
            <Block>{
                week[1].day === 1? week[1].date:null
                }</Block>
            <Block></Block>
            <Block>{
                week[2].day === 2? week[2].date:null
                }</Block>
            <Block></Block>
            <Block>{
                week[3].day === 3? week[3].date:null
                }</Block>
            <Block></Block>
            <Block>{
                week[4].day === 4? week[4].date:null
                }</Block>
            <Block></Block>
            <Block>{
                week[5].day === 5? week[5].date:null
                }</Block>
            <Block></Block>
            <Block>{
                week[6].day === 6? week[6].date:null
                }</Block> */}
        </View>
    )
}

const Grid = ({set}) =>{

    return(
        <>
            {set.map(item=>(
                <Row week={item}/>
            ))}
        </>
    )
}

export {Days, Grid}