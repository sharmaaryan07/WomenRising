import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Yourcard(props) {

    const { blog } = props;





    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={blog.image}
                    alt="green iguana"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <div dangerouslySetInnerHTML={{ __html: blog.description ? blog.description.slice(0, 60) : "" }} />
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}