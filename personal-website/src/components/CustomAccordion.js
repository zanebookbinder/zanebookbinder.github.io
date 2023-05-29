import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />))(({ expanded }) => ({
	// backgroundColor: !expanded ? 'var(--background-color)' : 'var(--expanded-background)',
	backgroundColor: 'var(--expanded-background)',
	'&:not(:last-child)': {
	  borderBottom: 0,
	},
	'&:before': {
	  display: 'none',
	},
	// paddingBlock: '10px',
	// paddingInline: '15px',
	padding: '10px 15px',
	'@media (max-width: 800px)': {
		padding: '5px 10px',
	},
	borderRadius: '15px',
}));

export const AccordionSummary = styled((props) => (
	<MuiAccordionSummary
	  expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
	  {...props}
	/>
  ))(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	fontSize: '18px',
	padding: '0px',
	height: 'fit-content',
	minHeight: '33.5px',
	marginBlock: '5px',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
	  transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
	  marginLeft: theme.spacing(1),
	  marginTop: '0px',
	  marginBottom: '0px',
	},
}));

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
	padding: "8px",
	paddingBottom: '0px',
	borderTop: '1px solid var(--primary-text)',
	'& .MuiCollapse-wrapperInner': {
		marginBottom: '0px',
	},
  }));