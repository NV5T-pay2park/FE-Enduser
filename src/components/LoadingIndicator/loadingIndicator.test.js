import React from "react"
import { render } from '@testing-library/react';
import LoadingIndicator from './index'


test("Body render without crashing", () => {

    render(<LoadingIndicator/>);
  });
  