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
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Max</Text>
                        <Text>25°</Text>
                    </View>
                    <View style={s.bonusContent}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Min</Text>
                        <Text>13°</Text>
                    </View>
                    <View style={s.bonusContent}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Umidità</Text>
                        <Text>30%</Text>
                    </View>
                    <View style={s.bonusContent}>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Qualità dell'aria</Text>
                        <Text>Buona</Text>
                    </View>
                </View>

                <View>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>Prossimi 5 giorni</Text>
                </View>
            // Sezione del forecast Meteo
                <View style={s.forecast}>
                    <View style={s.forecastContent}>
                        <Text>Icona</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>12°</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold'}}>25°</Text>
                        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 10}}>22/03/2025</Text>
                    </View>
                </View>
            </View>
    );
}

export default Home;