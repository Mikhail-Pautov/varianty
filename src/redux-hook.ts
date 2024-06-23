import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "redux/store";


export const useAppDispatch = () => useDispatch<AppDispatch>();


//эта штука не нужна если пишим по другому урок 11.4 типизация селекторов 0-02-58
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;











