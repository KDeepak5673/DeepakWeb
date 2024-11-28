import { Box, styled } from '@mui/material';

import { ProfilePhoto } from '../../public/data';


const Dialog = styled(Box)`
    width : 450px;
    height : 450px;
    margin : 100px;
    border : 10px;
    border-radius : 5px;
    display : flex;
    justify-content : center;
    align-content : center;
    align-items : center;
    background-image: url(${ProfilePhoto});
    background-size: cover; 
  background-repeat: no-repeat;
  background-position: center;
`


const Profile = () => {
    return (
        <Dialog>
        </Dialog>

    )
}

export default Profile;