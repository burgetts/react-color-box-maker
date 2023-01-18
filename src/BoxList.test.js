import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import BoxList from './BoxList'

it('renders without crashing', function () {
    render(<BoxList  />)
})

it('matches snapshot', function () {
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

it('should add new box', function() {
    const {queryByText, getByLabelText, getByTestId} = render(<BoxList />)
    const widthInput = getByLabelText("Width")
    const heightInput = getByLabelText("Height")
    const colorInput = getByLabelText("Background Color")
    const btn = queryByText("Add Box")
    
    fireEvent.change(widthInput, {value: '200px'})
    fireEvent.change(heightInput, {value: '200px'})
    fireEvent.change(colorInput, {value: 'red'})
    fireEvent.click(btn)

    expect(getByTestId('rendered-box')).toBeInTheDocument()
})

it('should delete box', function() {
    const {queryByText, getByLabelText, queryByTestId} = render(<BoxList />)
    const widthInput = getByLabelText("Width")
    const heightInput = getByLabelText("Height")
    const colorInput = getByLabelText("Background Color")
    const addBtn = queryByText("Add Box")
    
    fireEvent.change(widthInput, {value: '200px'})
    fireEvent.change(heightInput, {value: '200px'})
    fireEvent.change(colorInput, {value: 'red'})
    fireEvent.click(addBtn)

    expect(queryByTestId('rendered-box')).toBeInTheDocument()

    const deleteBtn = queryByText('❌')
    fireEvent.click(deleteBtn)
    expect(queryByTestId('rendered-box')).not.toBeInTheDocument()
    

})