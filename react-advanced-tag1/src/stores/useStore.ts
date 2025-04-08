import {create} from 'zustand'

interface CounterStore {
    initValue: number,
    inc:()=> void,
    dec: ()=>void
}

export const useCounterStore = create<CounterStore>((set)=>({
    initValue: 2,
    inc: ()=> set((state:{initValue: number})=> ({initValue: state.initValue +1 }) ),
    dec: () => set((state: { initValue: number }) => ({ initValue: state.initValue - 1 }))
    
}))