import { MAX_INITIAL_VALUE_FILTER, MIN_INITIAL_VALUE_FILTER } from '@/lib/constants';
import { create } from 'zustand';
type TFilterStore = {
 active: string;
 setActive: (value: string) => void;
 minValue: number;
 maxValue: number;
 setMinValue: (value: number) => void;
 setMaxValue: (value: number) => void;

}
export const useFilterStore = create<TFilterStore>((set, get) => ({
    active: new Date().toLocaleDateString("en-us",{
        month: "long"
    }),
    setActive: (value) => set(()=>({active: value})),
    minValue: MIN_INITIAL_VALUE_FILTER,
    maxValue: MAX_INITIAL_VALUE_FILTER,
    setMinValue: (value) => set(()=>({minValue: value})),
    setMaxValue: (value) => set(()=>({maxValue: value}))
}))