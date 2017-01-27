import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react'
import DaySlot from './daySlot';
import Slot from './slot';

@observer
export default class App extends Component {
  selectedDay(day){
    this.props.store.slot.showSlot = day;
  }
  render() {
     let i =0, k =0;
    const { store } = this.props;
    const selectedDay = store.slot.appointmentdays[store.slot.showSlot];

      return (
        <div>
            {
            store.slot.appointmentdays.map((item) => {
            return  (<DaySlot days = {item} id={i} onClick={ (id) => this.selectedDay(id)} key={i++}/>);
            })
          }
          {
            selectedDay.avalible && selectedDay.slot.map((item) => {
            return (<Slot data = {item}  key= {k++} /> );
          })
          }
          </div>
        );
    }

}
