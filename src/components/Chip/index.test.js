import React from "react";
import { render, screen } from '@testing-library/react';
import FilterChip from '.';
import userEvent from '@testing-library/user-event';

const mockFunction = () => {
}

describe("test chips", () => {
    test("test chips", () => {
        const onChange = jest.fn()
        render(<FilterChip handleChoose={onChange}></FilterChip>)
        userEvent.click(screen.getByText("Xe máy"));
        userEvent.click(screen.getByText("Xe máy"));
        userEvent.click(screen.getByText("Xe ô tô"));
        userEvent.click(screen.getByText("Xe ô tô"));
        expect(onChange).toHaveBeenCalledTimes(5);
    })
})