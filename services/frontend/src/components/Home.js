import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Button } from '@material-ui/core'
import { default as client, getCollection, getFeed } from '../services/graphql'
import Sidebar from 'react-sidebar'
import { state } from '../config/store'
import ReactLoading from 'react-loading'

import CommentBox from './comment-box'

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  container: {
    backgroundColor: '#E0E0E0',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    height: '100vh'
  }
})

const sidebarStyle = page => {
  const base = { width: '50%' }
  if (page === 1) {
    return {
      ...base,
      background: 'linear-gradient(white, blue)'
    }
  }

  if (page === 3) {
    console.log('RETURNING STYLES')
    return {
      ...base,
      background: 'linear-gradient(white, green)'
    }
  }
}

const tabStyle = tab => {
  const base = { 'text-align': 'center', variant: 'text', color: 'secondary' }
  if (tab === 'DROPS') {
    return {
      ...base
    }
  }

  if (tab === 'COLLECTION') {
    return {
      ...base
    }
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      currentTab: 1,
      feed: []
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.onSetTab = this.onSetTab.bind(this)
    this.onSetFeed = this.onSetFeed.bind(this)

    getFeed().then(feed => {
      const items = []
      feed.data.allAssets.nodes.forEach(asset => {
        items.push(
          <Paper>
            <CommentBox
              title={asset.displayName}
              subtitle={asset.subtitle}
              imgSrc={asset.imageSource}
              body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
              city='New York'
              hour='3H'
            />
          </Paper>
        )
      })

      console.dir(items)
      this.onSetFeed(items)
    })
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }

  onSetTab (tab) {
    this.setState({ currentTab: tab })
  }

  onSetFeed (feed) {
    this.setState({ feed })
    this.forceUpdate()
    this.setState({ state: this.state })
    console.log('SET FEED', feed)
  }

  render () {
    return (
      <Sidebar
        sidebar={renderSidebarContent()}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight
        styles={{ sidebar: sidebarStyle(this.state.currentTab) }}
      >
        {pickPage.bind(this)()}
        {renderTabs.bind(this)()}
      </Sidebar>
    )
  }
}

const renderTabs = function () {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Button onClick={() => this.onSetTab(1)} style={tabStyle('DROPS')} fullWidth variant='outlined'>
          Drops
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={() => this.onSetTab(2)} style={tabStyle('COLLECTION')} variant='outlined' fullWidth>
          Collection
        </Button>
      </Grid>
    </Grid>
  )
}

const pickPage = function () {
  if (this.state.currentTab === 1) {
    return renderDropsFeed.bind(this)()
  }

  if (this.state.currentTab === 2) {
    return renderCollection.bind(this)()
  }

  if (this.state.currentTab === 3) {
    return renderDetail.bind(this)()
  }
}

const renderSpinner = function () {
  return (
    <Grid container>
      <Grid item xs={12} style={{ height: '100%' }}>
        <ReactLoading height={667} width={375} />
      </Grid>
    </Grid>
  )
}

const renderDropsFeed = function () {
  console.log('render items', this.items)
  return (
    <Grid container>
      <Grid item xs={12}>
        {this.feed}
      </Grid>
    </Grid>
  )
}

const renderCollection = function () {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper>
          <CommentBox
            title='12 LETTERNAME'
            body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
            city='New York'
            hour='3H'
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <CommentBox
            title='12 LETTERNAME'
            body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
            city='New York'
            hour='3H'
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <CommentBox
            title='12 LETTERNAME'
            body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
            city='New York'
            hour='3H'
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <CommentBox
            title='12 LETTERNAME'
            body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
            city='New York'
            hour='3H'
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <CommentBox
            title='12 LETTERNAME'
            body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
            city='New York'
            hour='3H'
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <CommentBox
            title='12 LETTERNAME'
            body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
            city='New York'
            hour='3H'
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

const renderDetail = function () {
  return (
    <Grid container>
      <Grid item xs={12}>
        <p>Nike</p>
        <p>Blazer Mid</p>
        <p>x Off White</p>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <CommentBox
            title='12 LETTERNAME'
            body='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in'
            city='New York'
            hour='3H'
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Button>Redeem</Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={() => this.onSetSidebarOpen(true)}>Trade</Button>
      </Grid>
    </Grid>
  )
}

const renderSidebarContent = function () {
  return (
    <Grid container style={{ padding: '25px' }}>
      <Grid item xs={12}>
        <img
          src='https://dsw.scene7.com/is/image/DSWShoes/409312_100_ss_01?$pdp-image$'
          style={{ width: '100%', textAlign: 'middle' }}
        />
      </Grid>
      <Grid item xs={12}>
        <h2>FOR</h2>
      </Grid>
      <Grid item xs={12}>
        <img
          src='https://dsw.scene7.com/is/image/DSWShoes/409312_100_ss_01?$pdp-image$'
          style={{ width: '100%', textAlign: 'middle' }}
        />
      </Grid>
      <Grid item xs={12}>
        <h3>+</h3>
      </Grid>
      <Grid item xs={12}>
        <h3>$250</h3>
      </Grid>
      <Grid item xs={6}>
        <Button>X</Button>
      </Grid>
      <Grid item xs={6}>
        <Button>✔</Button>
      </Grid>
    </Grid>
  )
}

/* { <button onClick={() => this.onSetSidebarOpen(true)}>Open sidebar</button> } */

export default App

// Home.propTypes = {
//   classes: PropTypes.object
// }

// export default withStyles(styles)(Home)
