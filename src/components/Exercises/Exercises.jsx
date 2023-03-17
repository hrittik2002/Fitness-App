import React, { useState } from 'react'
import { Pagination } from '@mui/material';
import { Box , Stack , Typography } from "@mui/material";
import { ExerciseOptions , fetchData } from '../../utils/fetchData';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9; // per page we want to show 9 exercise 

  const indexOfLastExercise = currentPage * exercisesPerPage; // index of last exercise in a page
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; // index of first exercise in a page
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise); // storing exercise to be shown in that page in a array

  const paginate = (e , value) => {
    setCurrentPage(value);
    window.scrollTo({ top : 1800 , behavior : "smooth" })
  }

  return (
    <Box
      id="exercises"
      sx={{mt : { lg : "109px" }}}
      mt="50px"
      p="20px"
      width="100vw"
    >
      <Typography 
        variant='h3'
        mb="46px"
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap : { lg : '107px' , xs : '50px'}}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise , index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      
      <Stack
        mt="100px"
        alignItems="center"
      >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}

      </Stack>
    </Box> 
  )
}

export default Exercises