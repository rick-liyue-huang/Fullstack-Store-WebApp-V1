import React, { useState } from 'react'
import { CounterState, decrement, increment } from './counterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/store/store';

export const ContactPage = () => {

  const { data } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <Box>
      <Typography variant='h3'>{data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(increment(6))}>+</Button>
        <Button onClick={() => dispatch(decrement(5))}>-</Button>
        <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
      </ButtonGroup>
    </Box>

  )
}
