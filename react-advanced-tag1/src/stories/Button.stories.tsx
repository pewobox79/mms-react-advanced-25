import Button from "../components/globals/Button";
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button> & {
    buttonText: string;
};


const meta: Meta<StoryProps> = {
    component: Button,
    title: "ButtonVariants",
    tags: ["autodocs"],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: {
                type: "select"
            }
        },
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "select"
            }
        }
    },
    args: {
        onClick: fn()
    }
}

export default meta;

type Story = StoryObj<StoryProps>


/**
 * hallo primary
 */
export const ButtonElement: Story={
    args:{
        buttonText: "Haallo",
        variant: "primary",
        size: "md"
    },

    render: ({buttonText, ...args})=>{
        return <Button {...args}>{buttonText}</Button>
    }
}

export const ButtonSecondary: Story = {
    args: {
        buttonText: "secondary",
        variant: "secondary",
        size: "lg"
    },

    render: ({ buttonText, ...args }) => {
        return <Button {...args}>{buttonText}</Button>
    }
}

