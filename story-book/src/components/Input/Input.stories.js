import React from 'react';
import Input from './Input';

export default{
    title: 'Form/Input',
    component : Input
}

export const Small = () => <Input size="small" placeholder="Small Input"></Input>
export const Medium = () => <Input size="medium" placeholder="Medium Input"></Input>
export const Large = () => <Input size="large" placeholder="Large Input"></Input>