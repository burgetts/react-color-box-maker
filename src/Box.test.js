import React from 'react';
import {render} from '@testing-library/react'
import Box from './Box'

it('renders without crashing', function () {
    render(<Box width="200px" height="200px" backgroundColor="red" />)
})

it('matches snapshot', function () {
    const {asFragment} = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
})