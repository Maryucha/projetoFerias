import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { DatabaseState, DatabaseStateModel } from "../database/database.state";
import { FeaturesStateModel, FeatureState } from "../features/features.state";

export interface AppStateModel {
  database: DatabaseStateModel;
  features: FeaturesStateModel;
}
@State<AppStateModel>({
  name: 'application',
  defaults: {
      database: null,
      features: null,
  },
  children: [
      DatabaseState,
      FeatureState
  ]
})
@Injectable()
export class AppState {}
