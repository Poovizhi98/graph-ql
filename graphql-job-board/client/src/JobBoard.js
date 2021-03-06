import React, { Component } from 'react';
import { JobList } from './JobList';
// const { jobs } = require('./fake-data');
import { loadJobs } from './requests';

export class JobBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] }
  }

  async componentDidMount() {
    const jobs = await loadJobs();
    this.setState({jobs: jobs});
  }

  render() {
    const {jobs} = this.state;
    console.log(jobs, 'jobs')

    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    );
  }
}
