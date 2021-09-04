import { Grid, CircularProgress } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from "./styles"

const Posts = ({ setCurrentId }) => {
  // Fetching in the posts
  const { posts, isLoading } = useSelector(state => state.posts)
  const classes = useStyles();

  if (!posts.length && !isLoading) return 'No posts'

  return (
    isLoading ? <div style={{ alignItems: "center", display: 'flex', justifyContent: 'center'}}><CircularProgress /> </div> :(
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post = {post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts
