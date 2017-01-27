import {
    observable
} from 'mobx'
import {
    getInitialState
} from '../helper/getIntitalState';

export default class AppState {
    @observable day;
    @observable slot;
    constructor() {
        this.day = 0;
        this.slot = getInitialState() || []
    }
    updateAvalibleSlot(id){
      this.slot.appointmentdays[id].avalible -= 1;
    }
}
