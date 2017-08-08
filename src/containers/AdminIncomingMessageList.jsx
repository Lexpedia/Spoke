import React, { Component } from 'react'
// import { CampaignList } from '../components/campaign_list'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

// import SimpleTable from './Table.jsx'
import axios from 'axios'


export default class AdminIncomingMessageList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      incomingmessages: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/allmessages')
      .then(response => this.setState({ incomingmessages: response.data }))
  }

  render() {
    return (
      <div>
        <h3> All Incoming Messages </h3>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn> Date Sent: </TableHeaderColumn>
                <TableHeaderColumn> From: </TableHeaderColumn>
                <TableHeaderColumn> To: </TableHeaderColumn>
                <TableHeaderColumn style={{ width: '40%' }}> Message Body </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.incomingmessages.map(message => {
                if (message.direction === 'inbound') {
                  return (
                    <TableRow key={message.id}>
                      <TableRowColumn> {message.date_sent}</TableRowColumn>
                      <TableRowColumn>{message.from}</TableRowColumn>
                      <TableRowColumn>{message.to}</TableRowColumn>
                      <TableRowColumn style={{ width: '40%' }}>{message.body}</TableRowColumn>
                    </TableRow>
                    )
                }
                return ''
              }
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}