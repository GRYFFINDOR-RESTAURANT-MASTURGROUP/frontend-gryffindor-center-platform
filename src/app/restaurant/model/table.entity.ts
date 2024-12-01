export class Table {
  id: number;
  chairs: number;
  state: boolean;

  constructor(mesa: {id?: number, chairs?: number, state?: boolean}) {
    this.id = mesa.id || 0;
    this.chairs = mesa.chairs || 0;
    this.state = mesa.state || false;
  }
}
