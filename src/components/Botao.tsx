"use client";

import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';


export const Botao = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#4B8A89'),
    backgroundColor: '#4B8A89',
    '&:hover': {
      backgroundColor: '#137472',
    },
}));
