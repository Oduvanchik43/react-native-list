import { Platform, StyleSheet, Text, View } from 'react-native';
import Utility from './components/Utility';


export default function App() {
	return (
		<View style={styles.container}>
			<Utility></Utility>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingTop: Platform.OS === 'ios' ? 20 : 45,
	},
});
