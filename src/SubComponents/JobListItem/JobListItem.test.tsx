import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest'
import JobListItem from './JobListItem';

describe('JobListItem SubComponent', () => {
    //Checking job information displayed correctly

    it('Displays correct title', () => {
        render(<JobListItem title='Test' subjobs={[]}/>);
        expect(screen.getByText(/^Test$/)).toBeVisible();
    });

    it('Displays correct overall progress', () => {
        const {container:container1} = render(
        <JobListItem title='Test' subjobs={[
            {title: "Sub Test 1", progress: 0},
            {title: "Sub Test 2", progress: 80},
            {title: "Sub Test 3", progress: 100}
        ]}/>);
        expect(container1.querySelector(".JobListItem__Progress"))
        .toHaveTextContent("60.0%");

        const {container:container2} = render(
        <JobListItem title='Test' subjobs={[
            {title: "Sub Test 1", progress: 0},
            {title: "Sub Test 2", progress: 30},
            {title: "Sub Test 3", progress: 50}
        ]}/>);
        expect(container2.querySelector(".JobListItem__Progress"))
        .toHaveTextContent("26.7%");
    });

    it('Displays correct status', () => {
        const {container:container1} = render(
        <JobListItem title='Test' subjobs={[
            {title: "Sub Test 1", progress: 0},
            {title: "Sub Test 2", progress: 0}
        ]}/>);
        expect(container1.querySelector(".JobListItem__Status"))
        .toHaveTextContent("In Queue");

        const {container:container2} = render(
        <JobListItem title='Test' subjobs={[
            {title: "Sub Test 1", progress: 20},
            {title: "Sub Test 2", progress: 80}
        ]}/>);
        expect(container2.querySelector(".JobListItem__Status"))
        .toHaveTextContent("In Progress");

        const {container:container3} = render(
        <JobListItem title='Test' subjobs={[
            {title: "Sub Test 1", progress: 100},
            {title: "Sub Test 2", progress: 100}
        ]}/>);
        expect(container3.querySelector(".JobListItem__Status"))
        .toHaveTextContent("Completed");
    });

    it('Has as many children as sub jobs', () => {
        const {container:container1} = render(
        <JobListItem title='Test' subjobs={[
            {title: "Sub Test 1", progress: 0},
            {title: "Sub Test 2", progress: 0}
        ]}/>);
        expect(container1.querySelector(".JobListItem__SubJobList")?.children.length).toBe(2)

        const {container:container2} = render(
        <JobListItem title='Test' subjobs={[
            {title: "Sub Test 1", progress: 0},
            {title: "Sub Test 2", progress: 0},
            {title: "Sub Test 3", progress: 0},
            {title: "Sub Test 4", progress: 0}
        ]}/>);
        expect(container2.querySelector(".JobListItem__SubJobList")?.children.length).toBe(4)
    });
});