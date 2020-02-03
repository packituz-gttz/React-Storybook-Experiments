import React from "react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";

export default {
    title: 'Button',
    parameters: {
        componentSubtitle: 'Simple Button',
        component: Button,
        notes: 'some notes here'
    },
};


export const Story1 = () => <Button onClick={action('button-click')} disabled>Button</Button>;
Story1.story = {name: 'default disabled'};

export const Story2 = () => <Button onClick={action('button-click')} variant="primary">Button</Button>;
Story2.story = {name: 'primary'};

export const Story3 = () => <Button onClick={action('button-click')} variant="primary" disabled>Button</Button>;
Story3.story = {name: 'primary disabled'};

export const Story4 = () => <Button onClick={action('button-click')} variant="secondary">Button</Button>;
Story4.story = {name: 'secondary'};

export const Story5 = () => <Button onClick={action('button-click')} variant="secondary" disabled>Button</Button>;
Story5.story = {name: 'secondary disabled'};