import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Input } from '..';
import { Searcher } from '../../Functions';

export const Search = () => {

    const [filter, setFilter] = useState(null),
        [list, setList] = useState(['Hello', 'Hi', 'Good day', 'Welcome', 'Hey', 'Molo', 'Bye', 'How are you', 'How you doing', 'Howdy', 'How goes it', 'Top of the morning to ya']),
        [items, setItems] = useState(null)

    useEffect(() => {
        setItems(Searcher(list, filter))
    }, [filter])

    useEffect(() => {
        filter === "" ? setFilter(null) : null
    }, [filter])

    console.log(filter)

    return (
        <>
            <Input proxy="Search" Note={setFilter} />
            {
                filter ? (
                    items.map((item, index) => {
                        if(index === items.length - 1){
                            return (
                                <TouchableOpacity style={styles.itemsEnd} key={index}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )
                        }
                        else if (index === 0) {
                            return (
                                <TouchableOpacity style={styles.itemsStart} key={index}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )
                        }
                        else{
                            return (
                                <TouchableOpacity style={styles.itemBox} key={index}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )
                        }

                    })
                ) : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
        fontSize: 18,
        height: 45,
        width: '90%',
        paddingLeft: 30,
        top: -11,
        borderTopColor: '#fff',
        justifyContent: 'center'
    },
    itemsStart: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
        fontSize: 18,
        height: 45,
        width: '90%',
        paddingLeft: 30,
        borderTopColor: '#fff',
        top: -11,
        justifyContent: 'center',
        zIndex: -1
    },
    itemsEnd: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        color: '#000',
        fontSize: 18,
        height: 45,
        width: '90%',
        paddingLeft: 30,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopColor: '#fff',
        top: -11,
        justifyContent: 'center',
        zIndex: -1
    }
})