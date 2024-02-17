import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import JobListItem from './JobListItem';

describe('JobListItem SubComponent', () => {
    render(<JobListItem title='Test' subjobs={[
        {title: "Sub Test 1", progress: 0},
        {title: "Sub Test 2", progress: 80},
        {title: "Sub Test 3", progress: 100}
    ]}/>);

    const accordionButton = screen.getByTestId("Accordion_Button");

    it('Title is Visible', () => {
        expect(screen.getByText(/^Test$/)).toBeVisible();
    });

    it('Creates clickable Accordion button', () => {
        expect(accordionButton).toBeInTheDocument();
        expect(accordionButton).not.toBeDisabled();
    });

    const subJobItem1 = screen.getByTestId("Accordion_List").children[0];
    const subJobItem2 = screen.getByTestId("Accordion_List").children[1];
    const subJobItem3 = screen.getByTestId("Accordion_List").children[2];

    it('Accordion has as many children as sub jobs', () => {
        expect(subJobItem1).toBeInTheDocument();
        expect(subJobItem2).toBeInTheDocument();
        expect(subJobItem3).toBeInTheDocument();
    });

    it('Before clicking, Accordion is not visible', () => {
        expect(subJobItem1).not.toBeVisible();
        expect(subJobItem2).not.toBeVisible();
        expect(subJobItem3).not.toBeVisible();
    });

    fireEvent.click(accordionButton)

    it('After clicking, Accordion is now visible', () => {
        expect(subJobItem1).toBeVisible();
        expect(subJobItem2).toBeVisible();
        expect(subJobItem3).toBeVisible();
    });

    it('Accordion displays titles of sub jobs', () => {
        expect(subJobItem1).toHaveTextContent("Sub Test 1");
        expect(subJobItem2).toHaveTextContent("Sub Test 2");
        expect(subJobItem3).toHaveTextContent("Sub Test 3");
    });

    it('Accordion displays progress of sub jobs', () => {
        expect(subJobItem1).toHaveTextContent("0%");
        expect(subJobItem2).toHaveTextContent("80%");
        expect(subJobItem3).toHaveTextContent("100%");
    });

    it('Sub jobs have correct classes based on progress', () => {
        expect(subJobItem1.classList.contains('InQueue'))
        expect(subJobItem2.classList.contains('InProgress'))
        expect(subJobItem3.classList.contains('Completed'))
    });

    it('Displays correct overall progress', () => {
        expect(accordionButton).toHaveTextContent("60%");
    });

    it('Displays correct status', () => {
        expect(accordionButton).toHaveTextContent("In Progress");
    });

    fireEvent.click(accordionButton)

    it('After clicking again, Accordion is no longer visible', () => {
        expect(subJobItem1).not.toBeVisible();
        expect(subJobItem2).not.toBeVisible();
        expect(subJobItem3).not.toBeVisible();
    });
});