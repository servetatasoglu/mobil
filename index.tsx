import React, {useState} from 'react';
import { Text, View , Button, StyleSheet, TextInput} from "react-native";

const Ders = () => {
  const[sehir, sehirAyarla] = useState("antalya")
return (
<View style= {{flex:1, justifyContent:'center',alignItems:'center'}}>
  <Text>Lütfen bir şeyler yazın :</Text>
  
  <TextInput 
  defaultValue={sehir}
  onChangeText={metin=>sehirAyarla(metin)} 
  style={{
    height:40,
    padding:4,
    borderWidth :1,
  }}/>
  <Text>İşte Sizin Yazdıgınız metin:{sehir}</Text>
</View>


)
}


/*const[rakam, rakam2] =useState(0);
const Sayac =() =>{
  return(
    <View style={stil.kapsayici}>
      <Text style={stil.metin}>Sayac :  {rakam}</Text>
      <Button title="Arttır" onPress={()=>{ rakam2(rakam+1);}}/>
      <Button title="Azalt"  onPress={()=>{rakam2(rakam-1)}} />
      </View>
  )
}
const stil =StyleSheet.create({
kapsayici :{
  flex :1,
  justifyContent: 'center',
  alignItems: 'center',
  gap:20,

},
metin:{
  fontSize: 24,
  fontWeight:'bold',
},

}) 
export default Sayac;
*/











/*const Kedi =() =>{
const [degisken, degiskeniGuncelle] =useState();
  return(
    <>
    <View>
      <Text>degiskenin içinde yazam metin : {degisken }</text>
      <Button title="içeriği değiştir" onPress={()=>{
        degiskeniGuncelle("Mobil programlama dersine hoş geldiniz!");
      }}/>
       <Button title="Eski Haline Döndür" onPress={()=>{
        degiskeniGuncelle("merhaba dünya");
       }} />
    </View>
    </>
  )
}
export default Kedi;*/

