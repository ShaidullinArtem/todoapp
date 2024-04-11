import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './app/store/store'
import Navigation from './app/navigation/Navigation'

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider className='bg-light-gray' style={{ flex: 1 }}>
					<Navigation />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	)
}
