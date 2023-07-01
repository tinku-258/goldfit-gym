import React from 'react'
import {Box,Stack,Typography} from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
         <Typography variant='h4' mb={2}>
            Exercises that target the same muscle group
         </Typography>
         <Stack direction="row" sx={{p:'2',position:'relative'}}>
         {targetMuscleExercises.length?<HorizontalScrollbar data={targetMuscleExercises}/>:<Loader/>
         }
         </Stack>

         <Typography variant='h4' mb={2}>
            Exercises that target the same equipment group
         </Typography>
         <Stack direction="row" sx={{p:'2',position:'relative'}}>
         {equipmentExercises.length?<HorizontalScrollbar data={equipmentExercises}/>:<Loader/>
         }
         </Stack>
    
    </Box>
  )
}

export default SimilarExercises