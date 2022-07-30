import React from "react";
import { render } from '@testing-library/react';
import TablePrice from "./TablePrice";

test("Body render without crashing", () => {

    render(
        <TablePrice/>
        )
})
  