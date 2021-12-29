import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";

export interface FeaturesStateModel {

}

@State<FeaturesStateModel>({
  name: 'features',
  defaults: {

  }, children: [

  ],
})
@Injectable()
export class FeatureState { }