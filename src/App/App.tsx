import React, { useEffect, useState } from 'react';
import { Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { ConfettiParty, MainHeader, MainLayout, Popup, RoulleteDiv, SeconderyHeader, SpinButton } from './App.style';
import { sprinkleEmojis } from 'emoji-sprinkle';
import services from '../data';
import { Wheel } from 'react-custom-roulette';


const MainPage: React.FC = () => {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [rolledOption, setRolledOption] = useState<string>('');
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [buttonsDisabled, setButtonsDisabled] = useState<boolean>(false);


  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * services.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

    const dialogOpenRef = React.useRef(dialogOpen)
    dialogOpenRef.current = dialogOpen;

  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(dialogOpenRef);
    if (event.key === 'Enter'  && !dialogOpenRef.current) {
     
      
      handleSpinClick();
    }
  };

  const onStopSpinning = () => {
    setMustSpin(false);
    const rolledOptionName = services[prizeNumber].option;
    setRolledOption(rolledOptionName);
    setDialogOpen(true);
    const optionQuestions = services[prizeNumber].questions;
    const randomQuestion = optionQuestions[Math.floor(Math.random() * optionQuestions.length)];
    setSelectedQuestion(randomQuestion);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedAnswer(null);
    setButtonsDisabled(false);
    setShowConfetti(false);
  };

  const handleAnswerClick = (isCorrect: boolean) => {
    setSelectedAnswer(isCorrect);
    setButtonsDisabled(true);
    if (isCorrect) setShowConfetti(true);
     else sprinkleEmojis({ emoji: '😈', count: 100, fade: 3, fontSize: 50 });
  };

  const confettiConfig = {
    angle: 360,
    spread: 360,
    startVelocity: 70,
    elementCount: 1700,
    dragFriction: 0.09,
    duration: 4000,
    stagger: 0,
    width: "10px",
    height: "10px",
    perspective: "250px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <MainLayout>
    <MainHeader>רולטת המערכות</MainHeader>
    <SeconderyHeader>ענף יסודות</SeconderyHeader>
    <RoulleteDiv>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={services.map((item) => ({
          option: item.option,
          style: { backgroundColor: item.color, fontFamily: 'sans-serif', maxHeight: ' 600px !important',maxWidth: '600px !important',color: "pink" },
          customIcon: <img src={item.icon} alt={item.option} />,
        }))}
        onStopSpinning={onStopSpinning}
        outerBorderColor={'#f2f2f2'}
        outerBorderWidth={5}
        innerBorderColor={'#f2f2f2'}
        radiusLineColor={'#dedede'}
        radiusLineWidth={0.2}
        fontSize={15}
        
        />
    </RoulleteDiv>
    <SpinButton>
     Press ENTER
    </SpinButton>
    <Popup open={dialogOpen} onClose={handleCloseDialog}>
  <DialogTitle style={{ alignSelf: 'center', fontSize: '60px',
    fontFamily: 'revert',
    fontWeight: 'bold',
    color: services[prizeNumber].color }}>{rolledOption}</DialogTitle>
  <DialogContent
    style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '32px'}}
  >
    
    {selectedQuestion && (
      <>
        <DialogContentText style={{fontSize: '23px', fontFamily: 'revert'}}>{selectedQuestion.question}</DialogContentText>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          {selectedQuestion.answerOptions.map((answer: any, index: number) => (
            <Button
              key={index}
              variant="contained"
              style={{
                fontSize: '18px',
                fontWeight: 500,
                backgroundColor:
                  selectedAnswer === null
                    ? 'rgb(11 25 51)'
                    : selectedAnswer === answer.isCorrect
                    ? answer.isCorrect
                      ? '#AFE1AF'
                      : '#F88379'
                    : '#AFE1AF',
              }}
              onClick={() => handleAnswerClick(answer.isCorrect)}
              disabled={buttonsDisabled}
              data-correct-answer={answer.isCorrect} 
            >
              {answer.text}
            </Button>
          ))}
        </div>
      </>
    )}
  </DialogContent>
  <DialogActions></DialogActions>
</Popup>
    <ConfettiParty active={showConfetti} config={confettiConfig} />
  </MainLayout>
);
};

export default MainPage;