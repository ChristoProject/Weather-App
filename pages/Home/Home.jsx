import { Text, View, TextInput } from 'react-native';
import { s } from './Home.style';

function Home() {
    return (
            <View style={s.container}>

                // Sezione di ricerca della città
                <View style={s.search}>
                    <TextInput placeholder="Cerca città" />
                </View>

                // Sezione delle informazioni sulla location
                <View style={s.location}>
                    <Text style={{fontSize: 45, fontWeight: 'bold'}}>Londra</Text>
                    <Text style={{fontSize: 16, fontWeight: '400'}}>Ora locale: 14:25</Text>
                </View>

                <View style={s.meteoInfo}>
                    <Text style={{fontSize: 95, fontWeight: 'bold'}}>23°</Text>
                    <Text>Icona Meteo</Text>
                </View>

                //Sezione Informazioni Bonus
                <View style={s.bonusInfo}>
                    <View style={s.bonusContent}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Tramonto</Text>
                        <Text>19:45</Text>
                    </View>
                    <View style={s.bonusContent}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Vento</Text>
                        <Text>24 knt</Text>
                    </View>
                    <View style={s.bonusContent}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Qualità dell'aria</Text>
                        <Text>Buona</Text>
                    </View>
                </View>

            // Sezione del forecast Meteo
                <View style={s.forecast}>

                </View>
            </View>
    );
}

export default Home;