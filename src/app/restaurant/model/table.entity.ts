export class Table {
  id: number;
  chairs: number;
  state: string;

  constructor(mesa: {id?: number, chairs?: number, state?: string}) {
    this.id = mesa.id || 0;
    this.chairs = mesa.chairs || 0;
    this.state = mesa.state || '';
  }
}
