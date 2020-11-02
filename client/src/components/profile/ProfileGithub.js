import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class ProfileGithub extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            clientId: '4b0ecd222d4ab51eb4d2',
            clientSecret: 'dc0531a2885db274b070a69c092727491ad3accc',
            count: 5,
            sort: 'created: asc',
            repos: []
        }
    }

    componentDidMount () {
        this._isMounted = true;
        const { username } = this.props;
        const { count, sort, clientId, clientSecret } = this.state;

        fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}
        &client_id=${clientId}&client_secret=${clientSecret}`)
            .then(res => res.json())
            .then(data => {
                if(this._isMounted){
                    this.setState({repos: data});
                }
                
            })
            .catch(err => console.log(err));
    };

    componentWillUnmount() {
        this._isMounted = false;
    };
    

    render() {
        const { repos } = this.state;
        
        const repoItems = repos.map(repo => (
            <div key={repo.id} className="card card-body mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <a className="text-info" href={repo.html_url} rel="noreferrer" target="_blank">
                                {repo.name}
                            </a>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div className="col-md-6">
                        <span className="badge badge-info mr-1">
                            Stars: {repo.stargazers_count}
                        </span>
                        <span className="badge badge-secondary mr-1">
                            Stars: {repo.watchers_count}
                        </span>
                        <span className="badge badge-success">
                            Stars: {repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
        ));

        return (
            <div>
                <hr />
                <h3 className="mb-4">Latest Github Repos</h3>
                {repoItems}
            </div>
        )
    }
}

ProfileGithub.propTypes = {
    username: PropTypes.string.isRequired
};

export default ProfileGithub;