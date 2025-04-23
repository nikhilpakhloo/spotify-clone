
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OnboardingState {
  email: string;
  uid: string;
  step: number;
}

const initialState: OnboardingState = {
  email: '',
  uid: '',
  step: 1,
}

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setUid: (state, action: PayloadAction<string>) => {
      state.uid = action.payload
    },
    nextStep: (state) => {
      state.step += 1
    },
  },
})

export const { setEmail, setUid, nextStep } = onboardingSlice.actions
export default onboardingSlice.reducer
