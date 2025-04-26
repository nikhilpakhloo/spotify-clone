import { configureStore } from '@reduxjs/toolkit'
import onboardingReducer from './slices/onboardingSlice'
import dataReducer from './slices/dataSlice'

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    data: dataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
