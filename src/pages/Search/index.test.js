import { fireEvent, render, screen } from '@testing-library/react';
import React from "react";
import Search from  '.';
import userEvent from '@testing-library/user-event';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ComboBox from '../../components/ComboBox/index';
import FilterChip from '../../components/Chip/index';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
configure({adapter: new Adapter()});

const mockedUsedNavigate = jest.fn();



jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("test search", () => {
    it("search render", () => {
        render(<Search></Search>)

        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation((initialState) => [initialState, setState]);
        const wrapper = shallow(<Search></Search>);

        fireEvent.click(screen.getByText("Bản đồ"));
        fireEvent.click(screen.getByText("Xe máy"));
        fireEvent.click(screen.getByText("Xe ô tô"));
        // fireEvent.type(screen.getByRole('textbox'), 'SomeThing {enter}');
        
        const mockFunc = jest.fn()
        wrapper.find(ComboBox).props().handleChoose(mockFunc);
        wrapper.find(FilterChip).props().handleChoose(mockFunc);
        wrapper.find(Select).props().onChange(mockFunc);     
        wrapper.find(Button).props().onClick();
        
       

    })
});