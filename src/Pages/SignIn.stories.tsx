import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './SignIn'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
    title: 'Page/Sign in',
    component: SignIn,
    args: {
        children: 'Create account',


    },
    argTypes: {}
} as Meta

export const Default: StoryObj = {
    play: ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'benedictosara@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('********'), 'Poder@10')

        userEvent.click(canvas.getByRole('button'))
    }
}
