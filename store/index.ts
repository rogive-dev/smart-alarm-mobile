import { configureStore } from '@reduxjs/toolkit';

import alarmSlice from './alarm-slice';

export default configureStore({
  reducer: {
    alarm: alarmSlice,
  },
});
