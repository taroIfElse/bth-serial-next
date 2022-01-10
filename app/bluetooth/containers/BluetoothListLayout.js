import React,{useState,useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import BluetoothLayout from '../components/BluetoothLayout'
import Empty from '../components/Empty'
import Togle from '../components/Togle'
import Subtitle from '../components/Subtitle'
//libreria bth serial next (descartada)
//import BluetoothSerial from 'react-native-bluetooth-serial-next'
//libreria bth serial (semi-descartada)
import BluetoothSerial from 'react-native-bluetooth-serial'

import Device from '../components/Device'
export default function BluetoothListLayout() {
    
    const [lista, setLista] = useState([]);
    const [bolEnable, setBolEnable] = useState(false);
    useEffect(() => {
        async function init(){
        const enable = await BluetoothSerial.requestEnable();
            const lista = await BluetoothSerial.list();
            setLista(lista)
       console.log(lista)
    }
    init();
        return () => {
            async function remove(){
                await BluetoothSerial.stopScanning();
                console.log('Scanner Finalizado')
            }
            remove();
    }
},[])
    const renderEmpty = () => <Empty text='No hay dispositivos' />
    const renderItem = ({ item }) => {
        return <Device {...item} />
     } 

    return (
        <BluetoothLayout title='BLUETOOTH'>
            <Togle />
            <Subtitle title='Lista' />
            <FlatList data={lista}
                ListEmptyComponent={renderEmpty}
            renderItem={renderItem}
            />
            
        </BluetoothLayout>
       
    )
}
