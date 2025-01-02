import { Box, styled, Typography, Button } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';

const Dialog = styled(Box)(({ theme }) => ({
    width: '90%',
    maxWidth: '450px',
    height: 'auto',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #f5a9b8, #e34d82)',
    [theme.breakpoints.down('sm')]: {
        margin: '20px',
        padding: '15px',
    },
}));

const Bio = () => {
    return (
        <Dialog>
            <Typography variant="h5" color="whitesmoke" fontWeight="bold" sx={{ margin: '20px' }}>
                DEEPAK KUMAR
            </Typography>

            <Typography
                variant="body2"
                color="whitesmoke"
                align="justify"
                sx={{ margin: '20px', lineHeight: '1.6' }}
            >
                Hi there 👋 <br />
                🎓 I’m a student at VIT Bhopal University, pursuing a Bachelor of Technology (B.Tech) in
                Computer Science and Engineering (CSE) with a specialization in Cloud Computing and
                Automation. <br />
                <br />
                💻 I’m passionate about exploring the latest technologies, building innovative projects, and
                contributing to the tech community. <br />
                <br />
                📚 My interests include:
                <ul>
                    <li><CloudIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} /> Cloud Computing</li>
                    <li><WebIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} /> Web Development</li>
                    <li><CodeIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} /> Java Developer</li>
                    <li>Open Source Contribution</li>
                </ul>
            </Typography>

            <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: '20px' }}
                href="https://www.linkedin.com/in/your-profile/"
                target="_blank"
            >
                Connect on LinkedIn
            </Button>
        </Dialog>
    );
};

export default Bio;
