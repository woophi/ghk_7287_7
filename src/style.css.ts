import { globalStyle, style } from '@vanilla-extract/css';

const page = style({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '0 16px',
  '@media': {
    'screen and (max-width: 420px)': {
      padding: 0,
    },
  },
});

const questionScreen = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 24px',
  position: 'relative',
  marginTop: '-74px',
  zIndex: 2,
});

const questionText = style({
  textAlign: 'center',
  color: '#25262b',
  fontSize: '54px',
  lineHeight: 1.02,
  fontWeight: 700,
  letterSpacing: '-0.025em',
  maxWidth: '100%',
  textWrap: 'balance',
  wordBreak: 'break-word',
  '@media': {
    'screen and (max-width: 420px)': {
      fontSize: '48px',
    },
  },
});

const answerPanel = style({
  width: '100%',
  padding: '12px 16px 22px',
  position: 'relative',
  zIndex: 2,
});

const answerRow = style({
  display: 'flex',
  gap: '12px',
});

const answerButton = style({
  minHeight: '50px',
  borderRadius: '16px',
  border: '1px solid transparent',
  boxShadow: 'none',
  padding: '4px 12px 6px',
});

const answerButtonNo = style({
  backgroundColor: 'rgba(255, 87, 84, 0.16)',
  color: '#ff4339',
  borderColor: '#ff5b55',
});

const answerButtonYes = style({
  backgroundColor: 'rgba(111, 185, 126, 0.3)',
  color: '#159442',
  borderColor: '#2f9c4d',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
});

globalStyle(`${answerButton}:active`, {
  transform: 'scale(0.99)',
});

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

export const appSt = {
  page,
  questionScreen,
  questionText,
  answerPanel,
  answerRow,
  answerButton,
  answerButtonNo,
  answerButtonYes,
  container,
  box,
  bottomBtn,
};
