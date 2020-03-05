import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, ScrollView, TextInput, Picker, Button } from 'react-native';
import SubjectItem from './subject-item';

export default function App() {

  const [nameLogin, setNameLogin] = useState("");
  const [yearOld, setYearOld] = useState();

  const userProfile = [
    {
      thumbnail: 'http://image.phimmoi.net/film/4019/poster.medium.jpg',
      name: 'Tru tiên - Thanh Vân Chí',
      category: 'Tiên hiệp',
      total_chapters: 50,
      is_full: true,
    },
    {
      thumbnail: 'http://image.phimmoi.net/film/7688/poster.medium.jpg',
      name: 'Tương Dạ',
      category: 'Huyền huyễn',
      total_chapters: 45,
      is_full: false,
    },
    {
      thumbnail: 'http://image.phimmoi.net/film/7074/poster.medium.jpg',
      name: 'Sát thủ nhân tạo',
      category: 'Kinh dị',
      total_chapters: 1,
      is_full: true,
    },
    {
      thumbnail: 'http://image.phimmoi.net/film/10537/poster.medium.jpg',
      name: 'Tìm lại tình yêu',
      category: 'Tình cảm lãng mạn',
      total_chapters: 16,
      is_full: false,
    }
    ,
    {
      thumbnail: 'http://image.phimmoi.net/film/10352/poster.medium.jpg',
      name: 'Minions-sự trỗi dậy của gru',
      category: 'Hoạt hình',
      total_chapters: 1,
      is_full: true,
    }
    ,
    {
      thumbnail: 'http://image.phimmoi.net/film/10323/poster.medium.jpg',
      name: 'Tầng lớp itaewon',
      category: 'Tình cảm',
      total_chapters: 16,
      is_full: true,
    }
    ,
    {
      thumbnail: 'http://image.phimmoi.net/film/9249/poster.medium.jpg',
      name: 'Siêu nhân',
      category: 'Viễn tưởng',
      total_chapters: 49,
      is_full: false,
    }
  ];

  const [user, setUser] = useState(userProfile);
  const [showModal, setShowModal] = useState(true);
  const [login, setLogin] = useState(false);

  const handleDeleteSubject = (name) => {
    // su dung let de co the gan gia tri moi
    let newUser = user;
    // filter ((item) => tra ve dieu kien ma item do se duoc xu ly)
    // sau khi filter xong (chay het vong lap voi dieu kien dua ra) -> tra ve mang moi co cac item thoa man dk
    newUser = newUser.filter((userProfile) => userProfile.name != name);
    setUser(newUser);
  }

  const checkLogin = () => {
    if (user !== "" && yearOld > 18) {
      setLogin(true);
      setShowModal(false)
    } else {
      setLogin(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textNameLogin}>Chào: {nameLogin}</Text>
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <SubjectItem item={item} handleDelete={handleDeleteSubject} />
        )}
        keyExtractor={(item, index) => index}

      />
      <Modal visible={showModal} >
        <ScrollView>


          <View style={styles.modal}>
            <Text style={styles.text} >Nhập thông tin</Text>
            <Text style={styles.textModal} >Tên</Text>
            <TextInput style={styles.input} onChangeText={(valueName) => setNameLogin(valueName)} />

            <Text style={styles.textModal} >Tuổi</Text>
            <TextInput style={styles.input} onChangeText={(yearOld) => setYearOld(yearOld)} />

            <Button
              title="Go"
              onPress={() =>checkLogin()}
            />
          </View>
        </ScrollView>

      </Modal>
    </View>
  );



}

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
