import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  //the first point start
  origin: null,
  //where you want to go
  destination: null,
  //the time you'll take from the origin to the destination
  travelTimeInformation: null,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload
    }
  }
})

export const {
  setOrigin,
  setDestination,
  setTravelTimeInformation,
} = navSlice.actions

export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer