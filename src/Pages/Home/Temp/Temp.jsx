import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Temp = () => {
    const { user, logout, cartCnt, setCartCnt} = useContext(AuthContext);
    return (
        <div>
            {cartCnt}
        </div>
    );
};

export default Temp;