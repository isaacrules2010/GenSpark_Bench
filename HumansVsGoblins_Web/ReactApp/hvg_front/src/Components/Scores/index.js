import React, { Component } from 'react';
import Service from '../../Services/ScoreService';

export default class ScoreDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            scores:[]
        }
    }

    componentDidMount(){
        Service.getAllScores().then(res => {
            this.setState({scores: res.data})
        });
    }

  render() {
    return (
      <form>
        <div className='container-fluid text-center'>
            <h1 className='text-center'>Scores</h1>
            <div className='table-responsive'>
                <table className='table table-striped table-dark mx-auto w-auto'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Score</th>
                        </tr>
                    </thead>
                    <tbody className='thead'>
                        {this.state.scores.map(
                            score => 
                            <tr key={score.score_id}>
                                <th scope='row'>{score.name}</th>
                                <td>{score.score}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
      </form>
    )
  }
}
