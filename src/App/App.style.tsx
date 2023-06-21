import { Dialog, styled } from '@mui/material';
import Confetti  from 'react-dom-confetti';

export const MainLayout = styled('div')({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    alignItems: 'center',
    backgroundColor: '#a8bce759',
    fontFamily: 'revert'
});

export const MainHeader = styled('div')({
   marginTop: '2%',
   color:  "rgb(11 25 51)",
   fontSize: '110px',
   fontWeight: 'bold'

});

export const SeconderyHeader = styled('div')({
    color:  "rgb(11 25 51)",
    fontSize: '60px',
    fontWeight: 'bold'
 
 });

export const RoulleteDiv = styled('div')({
    marginBottom: '0.5%',
    marginTop:'1%',
});

export const SpinButton = styled('div')({
    color:"rgb(11 25 51)",
    fontFamily: 'sans-serif',
    fontSize: '27px',
    fontWeight: 'bold',
});

export const Popup = styled(Dialog)({
    '& .MuiDialog-paper': {
        width: '70%',
    },
});
export const ConfettiParty = styled(Confetti)({
   position: 'absolute',
   justifyContent: 'center',
   height: '100vh',
   zIndex: 1000
});






