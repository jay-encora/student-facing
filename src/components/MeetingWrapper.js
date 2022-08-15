import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Meeting } from './Meeting';


const Welcome = () => {
    return (
        <div>
            <h3>Welcome!</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}


export const MeetingWrapper = () => {
    const [meetingStarted, setMeetingStarted] = useState(false);
    const [meetingId, setMeetingId] = useState('');

    const handleStartMeeting = () => {
        const id = uuidv4();
        setMeetingId(id);
        console.log('Meeting Id: ', id);

        setMeetingStarted(true)
    }

    const handleJoinMeeting = () => {
        console.log('click meeting id ', meetingId);
        if (meetingId && meetingId.length > 5) {
            setMeetingStarted(true)
        }
    }

    return (
        <Paper variant="outlined" >
            {!meetingStarted &&
                < Grid >
                    <br />
                    <Welcome />
                    <br />
                    <br />
                    <Button className='class-btn' disableFocusRipple={true} variant="contained" color="success" onClick={() => handleStartMeeting()}>
                        Start a meeting
                    </Button> &nbsp; &nbsp;
                    <TextField onChange={(e) => {
                        console.log('e.target.value: ', e.target.value)
                        setMeetingId(e.target.value)
                        console.log('meetingId: ', meetingId)
                    }}
                        placeholder="Enter meeting id" label="Meeting Id" variant="outlined" size='small' />
                    &nbsp; &nbsp;
                    <Button className='class-btn'
                        disabled={!(meetingId.length > 5)}
                        disableFocusRipple={true} variant="contained" onClick={() => handleJoinMeeting()}>
                        Join a meeting
                    </Button>
                </Grid>
            }
            <br />

            {meetingStarted && <Meeting meetingId={meetingId} />}
        </Paper >
    );
}

