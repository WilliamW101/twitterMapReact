import React from 'react';

const Tweet = ({ tweet }) => (
  <div style={styles.well} className='well well-sm col-sm-12 col-md-6 blacktext'>
    <img src={tweet.user.profile_image_url} />
    <br />
    <i> Author: {tweet.user.name} </i>
    <br />
    <i> Author Location: {tweet.user.location} </i>
    <br />
    <blockquote>
      {tweet.text}
    </blockquote>
    <i> Favorites: {tweet.favorite_count} </i>
    <br />
    <i> Retweet Count: {tweet.retweet_count} </i>
  </div>
)

const styles = {
  well: {
    height: '300px'
  }
}

export default Tweet;
