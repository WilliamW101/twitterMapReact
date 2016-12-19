import React, { Component } from 'react';
import Tweet from './Tweet';

class Tweets extends Component {
  constructor(props) {
    super(props);

    this.state = { tweets: [] };
    this.tweet = this.tweet.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/home_timeline',
      type: 'GET',
      dataType: 'JSON'
    }).done( tweets => {
      this.setState({ tweets });
    }).fail( data => {
      console.log(data);
    });
  }

  tweet(e) {
    // figure out how to send a tweet to the api
    e.preventDefault();

    $.ajax({
      url: '/api/tweet',
      type: 'POST',
      data: { message: this.refs.message.value },
      dataType: 'JSON'
    }).done( tweet => {
      // need to reset state and add the new tweet to it
      this.refs.tweetForm.reset();
      this.setState({ tweets: [tweet, ...this.state.tweets] });
    }).fail( data => {
      console.log(data);
    });
  }

  displayTweets() {
    // figure out how to grab home timeline  tweets and diaplsy them
    let tweets = this.state.tweets;

    if(tweets.length) {
      return tweets.map( tweet => {
        return(<Tweet key={tweet.id} tweet={tweet} />);
      });
    }else{
      return(<h3> No Home Timline Tweets</h3>);
    }
  }

  render() {
    return(
      <div>
        <h3> All Tweets </h3>
        <hr />

        <form ref='tweetForm' onSubmit={this.tweet}>
          <textarea className='form-control'
                    ref='message'
                    placeholder='Your Tweet Here.'
                    required>
                    </textarea>
          <input type='submit' className='btn btn-success' value='Send Tweet' />
        </form>
        <hr />
        { this.displayTweets() }
      </div>
    );
  }
}

// dont need to bind displayTweets becuase its called directly in the render (line 34)

export default Tweets;
