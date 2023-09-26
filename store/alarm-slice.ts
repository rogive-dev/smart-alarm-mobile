import { createSlice } from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import { v4 as uuidV4 } from 'uuid';

export const alarmSlice = createSlice({
  name: 'alarm',
  initialState: {
    alarms: [
      {
        id: 'c4b232d0-dfa5-455d-96f9-35e2f3d61a52',
        active: true,
        type: 'normal',
        name: 'Despertar',
        hour: '07',
        minute: '00',
        noon: 'A.M.',
        daysOfWeek: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi'],
      },
    ],
    alternatives: [
      {
        id: '49f25b2d-811a-495e-a15f-dd5432847998',
        name: 'Motocicleta',
        icon: 'motorbike',
        estimated: 45,
        hour: '08',
        minute: '15',
        noon: 'A.M.',
      },
      {
        id: 'd8e904df-56cf-4a14-9e5c-cf6374607bdd',
        name: 'Automóvil',
        icon: 'car',
        estimated: 50,
        hour: '08',
        minute: '10',
        noon: 'A.M.',
      },
      {
        id: '87fc6fdb-8b26-488f-9f4c-c53050c22b81',
        name: 'Transmilenio',
        icon: 'bus',
        estimated: 58,
        hour: '08',
        minute: '02',
        noon: 'A.M.',
      },
    ],
    name: '',
    daysOfWeek: [],
    target: '',
    alternative: null,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateTarget: (state, action) => {
      state.target = action.payload;
    },
    toggleDay: (state, action) => {
      const day = action.payload as never;
      if (state.daysOfWeek.includes(day)) {
        state.daysOfWeek = state.daysOfWeek.filter((item) => item !== action.payload);
      } else {
        state.daysOfWeek.push(day);
      }
    },
    selectAlternative: (state, action) => {
      state.alternative = action.payload;
    },
    toggleAlarm: (state, action) => {
      const index = state.alarms.findIndex((item) => item.id === action.payload);
      const alarm = state.alarms[index];
      const nextActive = !alarm.active;
      alarm.active = nextActive;
      state.alarms[index] = alarm;
    },
    addAlarm: (state) => {
      const alternative = state.alternatives.find((item) => item.id === state.alternative);
      const newAlarm: any = {
        id: uuidV4(),
        active: true,
        type: 'smart',
        name: state.name,
        hour: alternative?.hour,
        minute: alternative?.minute,
        noon: alternative?.noon,
        daysOfWeek: state.daysOfWeek,
      }
      state.alarms.push(newAlarm);
      state.name = '';
      state.daysOfWeek = [];
      state.target = '';
      state.alternative = null;
    },
  },
});

export const { 
  updateName,
  updateTarget,
  toggleDay,
  selectAlternative,
  toggleAlarm,
  addAlarm,
} = alarmSlice.actions;

export default alarmSlice.reducer;
