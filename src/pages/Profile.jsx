import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';


class Profile extends Component {
  state = {
    user: '',
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    getUser().then((response) => this.setState(({
      user: response.name,
    })));
  }
  render() {
    const { user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <main className='bg-violet-100'>
          <p data-testid="header-user-name" className='my-2.5 text-indigo-800 bg-violet-100 font-bold'>
          {' '}
          {`Boas-vindas, ${user}`}
          </p>
        </main>
      </div>
    );
  }
}
export default Profile;
