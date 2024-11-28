import { Box, styled, Typography } from '@mui/material';



const Dialog = styled(Box)`
    width : 450px;
    height : 450px;
    margin : 100px;
    
    border : 10px;
    border-radius : 8px;
    align-items : center;
    background: linear-gradient(135deg, #f5a9b8, #e34d82);
`


const Bio = () => {
    return (
        <Dialog>
            <Typography variant='h5' color="whitesmoke" fontWeight="bold" sx={{ margin: '20px', }} >DEEPAK KUMAR</Typography>

            <Typography variant='body2' color="whitesmoke" align="justify" sx={{ margin: '20px' }}>Hi there 👋 <br />
                🎓 I’m a student at VIT Bhopal University, pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) with a specialization in Cloud Computing and Automation. <br />

                <br />

                💻 I’m passionate about exploring the latest technologies, building innovative projects, and contributing to the tech community. <br />

                <br />
                📚 My interests include: <br />

                * Cloud Computing <br />
                * Web Development <br />
                * Java Developer <br />
                * Open Source Contribution <br />
                <br />
                📫 Feel free to connect with me or explore my repositories to see what I’ve been working on!</Typography>


        </Dialog>

    )
}


export default Bio;