export interface SearchData {
  _id?: string; 
}

export class Search {
  _id: string;
 

  constructor(data: SearchData) {
    this._id = data._id;   
  }

}
