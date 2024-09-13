import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { colors, fontSize, sizes } from '../../services'
import { images } from '../../services/utilities/images'
import {useNavigation} from '@react-navigation/native';

const Drawer = ({open, close}) => {
    const navigation = useNavigation();


        const arr = [
            {id:1, name: "Baitul Muslim", img: images.cameraIcon},
            {id:2, name: "Seneral Calon", img: images.cameraIcon},
            {id:3, name: "Notificaton", img: images.cameraIcon},
            {id:4, name: "Profile Saya", img: images.cameraIcon},
            {id:5, name: "Calon Kegemaran", img: images.cameraIcon},
            {id:6, name: "Seneral Mesej", img: images.cameraIcon},
            {id:7, name: "Seneral Pakej", img: images.cameraIcon},
            {id:8, name: "Peringatan", img: images.cameraIcon},
            {id:9, name: "Hubungi kami", img: images.cameraIcon},
            {id:10, name: "Calon Dihalang", img: images.cameraIcon},
            {id:11, name: "Settings", img: images.cameraIcon},
            {id:12, name: "Log Keluar", img: images.cameraIcon},
        ]

        const closeDrawer =(item)=>{
            close(false)

            console.log("item", item)

            setTimeout(() => {
                if(item.name == "Seneral Calon"){
                    navigation.navigate("CandidatesList")
                }else if(item.name == "Notificaton"){
                    navigation.navigate("CandidateProfile")
                }
                
            }, 1000);
        }

  return (

        <Modal animationIn={"slideInRight"} animationOut={"slideOutRight"} isVisible={open} style={{margin:0, justifyContent:'flex-end', alignItems:'flex-end'}} onBackdropPress={()=> close(false)} >
            <View style={{width: sizes.screenWidth * 0.7, flex:1, backgroundColor:"#C0EFBA"}}>
                    <FlatList
                    
                    data={arr}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity onPress={()=>closeDrawer(item)} style={{flexDirection:'row', padding:20, justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row'}}>

                                    <Image source={item.img} style={{height:30, width:30, resizeMode:'contain'}}/>
                                    <Text style={{fontSize: fontSize.h6, color:colors.white, marginLeft:20}}>{item.name}</Text>
                                </View>

                                <Image source={images.backIcon} style={{height:30, width:30, resizeMode:'contain'}}/>
                            </TouchableOpacity>
                        )
                    }}
                    />
            </View>
        </Modal>

  )
}

export default Drawer