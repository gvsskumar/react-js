import {configureStore} from "@reduxjs/toolkit";

import reducer from "./slice/todoSlice";

const store = configureStore({reducer});

export default store;