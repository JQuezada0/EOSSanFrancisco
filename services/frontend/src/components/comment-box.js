import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Button } from '@material-ui/core'

const styles = theme => ({
  commentBox: {
    padding: 10,
    marginTop: 20
  }
})

const assetStyle = {
  width: '100%'
}

const CommentBox = ({ classes, body, city, hour, title, subtitle, imgSrc }) => (
  <Paper elevation={1} className={classes.commentBox}>
    <Typography variant='title'>{title}</Typography>
    <Typography variant='subheading'>{subtitle}</Typography>
    <img src={imgSrc} style={assetStyle} />
  </Paper>
)

CommentBox.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string,
  city: PropTypes.string,
  hour: PropTypes.string
}

export default withStyles(styles)(CommentBox)
