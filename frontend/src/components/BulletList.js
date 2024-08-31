import { List, ListItem, Typography } from "@mui/material"

const BulletList = ({ points, title }) => {
  return (
    <>
      <Typography variant='h6' fontSize='30px'>{title}</Typography>
      <List sx={{ listStyleType: 'disc' }}>
        {points.map((point, index) => (
          <ListItem key={index} sx={{ padding: '4px 0', display: 'list-item' }}>
            <Typography variant='h6' fontSize='18px' fontWeight='normal' style={{ color: 'gray'}}>{point}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default BulletList;