import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import BookingData from './Booking';
import { Provider } from 'react-redux';
import store from '../../../store';

test("should be render booking componet tablerow",()=>{
    render(<Provider store={store}><BookingData/></Provider>)
    // const table=screen.getByRole("table");
    // const tablehead=screen.getByRole("tablehead");
    // const tablerow=screen.getByRole("tablerow");
    // const tablecell=screen.getByRole("tablecell");

    // expect(tablecell).toBeTruthy();
    // expect(tablerow).toBeTruthy();
    // expect(tablehead).toBeTruthy();
    // expect(table).toBeTruthy();
})
