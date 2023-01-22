//@ts-nocheck
import React, {useEffect} from 'react';
import {
  AppBar,
  Box,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetch, selectTodo} from "../../features/todo/todoSlice";



function Todo(props) {

  const todos = useAppSelector(selectTodo)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetch())
  }, [])

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            所有
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 0}}
          >
            <MoreHorizIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{px: 2}}>
        <TextField id="outlined-search" label="添加任务至收集箱" type="search" size="medium" margin="normal" fullWidth/>
      </Box>
      <Box sx={{px: 2, mt: 1}}>
        <Typography variant="body2" component="div">
          无日期
        </Typography>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
          {todos.map((value) => {
            const labelId = `checkbox-list-label-${value.id}`;

            return (
              <ListItem
                key={value.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <MoreHorizIcon/>
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick = {() => {}} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={value.completed}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{'aria-labelledby': labelId}}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value.todo}/>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Container>
      </Container></>
  );
}

export default Todo;