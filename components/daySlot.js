import React,{ Component, PropTypes} from 'react';
import { observer } from 'mobx-react'
@observer
 export default class DaySlot extends Component {

 showNextSlot= (event) => {
    event.preventDefault();
    console.log(this.props)
    this.props.days.avalible -= 1;
    this.props.onClick(this.props.id);
}
  render(){
      return(
        <span className="appointment-button-wraper">
          <button disabled= {!this.props.days.avalible} onClick={(event) => this.showNextSlot(event)} >
            <div> {this.props.days.day} </div>
            <div> {this.props.days.date} </div>
            <div> {this.props.days.avalible} <span>Avalible</span>
            </div>
        </button>
        </span>
      );
    }

}
