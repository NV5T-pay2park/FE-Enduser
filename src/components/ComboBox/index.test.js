import React from "react";
import {render, screen} from '@testing-library/react';
import ComboBox from ".";
import userEvent from '@testing-library/user-event'

const listName = []


describe("test render Combobox", () => {
    test("test render Combobox", () => {
        const handleChoose = jest.fn()
        render(<ComboBox listName={listName} handleChoose={handleChoose}/>);
        userEvent.type(screen.getByLabelText('Tìm kiếm nhà xe'), 'SomeThing{enter}');
        // expect(handleChoose).toHaveBeenCalledTimes(0);
    })
})