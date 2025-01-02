import { Box, styled } from '@mui/material';
import { ProfilePhoto } from '../../public/data';

const Dialog = styled(Box)(({ theme }) => ({
    width: '90%',
    maxWidth: '450px',
    height: 'auto',
    aspectRatio: '1', // Ensures a square shape
    margin: '50px auto',
    borderRadius: '8px',
    border: '5px solid white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${ProfilePhoto || 'default-profile.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        margin: '20px',
    },
}));

const Overlay = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4); // Semi-transparent overlay
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s;

    &:hover {
        opacity: 1;
    }
`;

const Profile = () => {
    return (
        <Dialog>
            <Overlay>Deepak Kumar</Overlay>
        </Dialog>
    );
};

export default Profile;
