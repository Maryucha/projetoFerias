import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";

export interface DatabaseStateModel {}
@State<DatabaseStateModel>({
  name: 'database',
  defaults: {},
  children: [

  ],
})
@Injectable()
export class DatabaseState {}