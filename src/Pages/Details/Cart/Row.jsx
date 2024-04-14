import React from 'react';

const Row = ({booking, handleDeleteCar}) => {
    const {_id, date, img, company, car_id, price } = booking;
    let isRent;
    booking?.days?isRent=true:isRent=false;
    return (
        <tr className=' border-4 bg-[#b8d8ff] '>
            <th>
                <label>
                    <button onClick={()=>handleDeleteCar(car_id, _id, isRent)}  className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="">
                    <div className="mask mask-squircle w-24 h-24">
                        <img src={`http://localhost:5000/${img}`}  className='w-24 h-24' alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{company}</td>
            {
                booking?.days&&<td>{booking.days}</td>
            }
            <td>{price}</td>
            <td>{date}</td>
            <th>
                {booking?.status=='Accepted'?<p className='text-[green]'>Accepted</p>:<p>Pending</p>}
            </th> 
        </tr>
    );
};

export default Row;