import { Box, Button, Container, Grid,  Typography } from "@mui/material"
import BulletList from "../../components/BulletList";
import PageTitle from "../../components/PageTitle";

const Registration = () => {
  const research_areas = [
    "Smart Grid and Smart Building Technologies",
    "Internet of Things and Industrial Networks",
    "Wireless Sensor and Actuator Networks",
    "Data Analytics and Management",
    "Optimization Methods and Applications",
  ];

  const requirements = [
    'Students should have passion and have commitment to spend time for conducting research works (≥12h/week)',
    'CPA ≥ 2.8; no course need to be retaken',
    'Good English skills (preferable 6.0 IELTS or equivalent)',
    'Good at programming thinking and problem solving skills'
  ];

  const benefits = [
    'Being well supported to develop technical skills with regular tutorials and discussions',
    'Being provided essential equipment and consumables (upto specific projects)',
    'Getting chance to have publications',
  ];

  const contact_detail = [
    'Supervisor: Dr. Hoang Duc Chinh',
    'Email: chinh.hoangduc@hust.edu.vn',
    'HUST Webpage: https://seee.hust.edu.vn/hoangducchinh'
  ];

  return (
    <Container 
      maxWidth='false'
      sx={{ maxWidth: '1296px'}}
      style={{ paddingLeft: 24, paddingRight: 24}}
    >
      <Container 
        maxWidth='false'
        sx={{ maxWidth: '616px'}}
      >
        <Box my={15} />
        <PageTitle title='Application' header='MEMBER' />
        <Box sx={{paddingTop: {xs: '64px', md: '80px'}}} />
        <Typography variant='h6' fontSize='18px' my={2} fontWeight='normal' style={{ color: 'gray'}} lineHeight={1.5}>
        At IPAC lab, we are dedicated to fostering an inclusive and collaborative environment where diverse perspectives and expertise come together to drive groundbreaking research and innovation. We welcome applications from individuals of all backgrounds and encourage those who require accommodations to reach out to us so we can support their needs. Join us in our mission to push the boundaries of knowledge and create impactful solutions for the future.
        </Typography>
        <BulletList title='Research Interests' points={research_areas} />
        <BulletList title='Requirements' points={requirements} />
        <BulletList title='Benefits' points={benefits} />
        <BulletList title='Contact for detail' points={contact_detail} />
        <Grid container justifyContent='center' mt={3} mb={7}>
          <Button color='primary' variant='contained' sx={{
            display: 'flex',
            fontSize: '17px',
            lineHeight: 1.5,
            minHeight: '48px',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#1a73e8',
            backgroundImage: 'none',
            color: 'white',
            padding: '12px 24px',
            textTransform: 'none',
            boxShadow: 'none',
            borderRadius: '48px',
            fontWeight: 500,
            border: '1px solid transparent',
            ':hover': {
              backgroundColor: '#2975CA',
              boxShadow: '0px 1px 1px #888888',
            },
          }}
          >
            Go to application
          </Button>
        </Grid>
      </Container>
    </Container>
  )
}

export default Registration;