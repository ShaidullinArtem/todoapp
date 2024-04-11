import AsyncStorage from '@react-native-community/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducers'
import { persistReducer, persistStore } from 'redux-persist'


const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['todo']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false
	})
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof store.getState>
