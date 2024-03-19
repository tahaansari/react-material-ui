import { Typography, Button, Card, CardMedia, CardContent, CardActions, Stack } from "@mui/material";
import React from "react";

const CakeSection = () => {
  return (
    <div>
      <Typography variant="h4" mt={3} mb={3}>
        Cakes
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        <Card sx={{ maxWidth: 300, mb: 2 }}>
          <CardMedia component="img" alt="green iguana" height="200" image="https://unsplash.it/500" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, mb: 2 }}>
          <CardMedia component="img" alt="green iguana" height="200" image="https://unsplash.it/500" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300, mb: 2 }}>
          <CardMedia component="img" alt="green iguana" height="200" image="https://unsplash.it/500" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
};

export default CakeSection;
