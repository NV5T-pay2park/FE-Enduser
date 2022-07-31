import { render, screen } from '@testing-library/react';
import React from "react";
import Search from  '.';
import userEvent from '@testing-library/user-event';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ComboBox from '../../components/ComboBox/index';
import FilterChip from '../../components/Chip/index';
configure({adapter: new Adapter()});

const mockedUsedNavigate = jest.fn();
const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState) => [initialState, setState]);
const wrapper = shallow(<Search></Search>);


jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("test search", () => {
    it("search render", () => {
        render(<Search></Search>)
        userEvent.click(screen.getByText("Bản đồ"));
        userEvent.click(screen.getByText("Xe máy"));
        userEvent.click(screen.getByText("Xe ô tô"));
        userEvent.type(screen.getByRole('textbox'), 'SomeThing {enter}');
        
        // const newSearchString = "test";
        // wrapper.find(ComboBox).simulate('change', {target: {value: newSearchString}});
        // expect(setState).toHaveBeenCalledWith(newSearchString);

        // wrapper.find(FilterChip).simulate('click');
        // wrapper.find()


    })
});