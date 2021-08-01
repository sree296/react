import React from 'react';
import Button from './Button';
import Center from '../Center/Center'

export default {
    title: 'Form/Button',
    component : Button
}
export const Primary = () => <Center><Button variant="primary">Primary</Button></Center>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>