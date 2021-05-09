import React from 'react';
import {CssBaseline, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';

//Styles for the components
const useStyle = makeStyles((theme) => ({
    root:{
        width: '300px',
        backgroundColor: "#EBECF0",
        marginLeft: theme.spacing(1),
    }
}))

export default function List({list}){
    const classes = useStyle();
    return(
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                {/* from imported Title function */}
                <Title title={list.title}/>
                {list.cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
                <InputContainer listId={list.id}/>
            </Paper>
        </div>
    )
}