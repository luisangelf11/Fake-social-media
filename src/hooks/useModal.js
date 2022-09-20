import { useState } from 'react';

export const useModal =()=>{
    const [openId, setOpenId] = useState(null);
    const openModalId =(id) => setOpenId(id);
    const closeModal =()=> setOpenId(null);

    return{
        openId,
        openModalId,
        closeModal
    }
}