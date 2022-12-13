import React, { PureComponent } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

export default class ClassComponent extends PureComponent {
  state = {
    data: [
      {
        userId: '01a',
        comId: '012',
        fullName: 'Riya Negi',
        avatarUrl: 'https://ui-avatars.com/api/name=Riya&background=random',
        userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
        text: 'Hey, Loved your blog! ',
        replies: []
      },
      {
        userId: '02b',
        comId: '017',
        fullName: 'Lily',
        userProfile: 'https://www.linkedin.com/in/riya-negi-8879631a9/',
        text: 'I have a doubt about the 4th point🤔',
        avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
        replies: []
      }
    ]
  }

  onSubmitAction = (data:any) => {
    console.log('this comment was posted!',data)
  }

  customNoComment = () => <div className='no-com'>No comments wohoooo!</div>

  render() {
    return 
        <CommentSection
          currentUser={{
            currentUserId: '01a',
            currentUserImg:
              'https://ui-avatars.com/api/name=Riya&background=random',
            currentUserProfile:
              'https://www.linkedin.com/in/riya-negi-8879631a9/',
            currentUserFullName: 'Riya Negi'
          }}
          commentData={this.state.data}
          onSubmitAction={(data:any) => this.onSubmitAction(data)}
          customNoComment={() => this.customNoComment()}
          logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
          }}
        />
  }
}

