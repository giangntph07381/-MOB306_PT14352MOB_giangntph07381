import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Image, Modal, ScrollView, TextInput } from 'react-native';


export default function subjectItem({ item, handleDelete }) {

    const [showModal, setShowModal] = useState(false);

    const alertDelete = (name, handleDelete) => {
        return Alert.alert(
            'Delete Subject', // tham so dau tien: title
            `Ban co muon xoa ${name} khong?`, // tham so t2: content
            [
                {
                    text: 'Co',
                    onPress: () => { handleDelete(name) }
                },
                {
                    text: 'Khong',
                    onPress: () => { }
                }
            ],
            { cancleable: false } // cho click ra ben ngoai alert hay khong (true -> disable)
        )
    };

    return (
        <View>
            <View style={style.row}>
                <View>
                    <Image style={style.image} source={{ uri: item.thumbnail }} />
                    <Text>{`Tên phim: ${item.name}`}</Text>
                    <Text>{`Thể loại: ${item.category}`}</Text>
                    <Text>{`Số tập: ${item.total_chapters}`}</Text>

                    <Text>{`Tình trạng: ${item.is_full ? 'Full' : 'Chưa full'}`}</Text>
                </View>

            </View>
            <View >
                <Button title='DETAIL' onPress={() => setShowModal(true)} />
                <Button color="#ff5c5c" title='DELETE' onPress={() => { alertDelete(item.name, handleDelete) }} />
            </View>

            <Modal visible={showModal} >
                <ScrollView>

                <View style={style.row}>
                <View>
                    <Image style={style.image} source={{ uri: item.thumbnail }} />
                    <Text>{`Tên phim: ${item.name}`}</Text>
                    <Text>{`Thể loại: ${item.category}`}</Text>
                    <Text>{`Số tập: ${item.total_chapters}`}</Text>

                    <Text>{`Tình trạng: ${item.is_full ? 'Full' : 'Chưa full'}`}</Text>
                    <Button
                            title="Back"
                            onPress= {() => setShowModal(false)}
                            
                        />
                </View>

            </View>
                
                </ScrollView>

            </Modal>


        </View>
    )
}

const style = StyleSheet.create({
    row: {
        padding: 8,
        flex: 1,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 200
    },




});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 30
    },
    textNameLogin: {
        fontSize: 23,
        fontStyle: 'italic'
    },
    textModal: {
        padding: 8,
        margin: 10,
    },
    modal: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,

    },

});
