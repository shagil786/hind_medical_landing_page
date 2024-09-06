export type ActionType = {
  'label': string,
  'name':string,
  'style': number,
};

export type HeroType = {
  'data':{
    'title': string,
    'description' : string,
    'actions': ActionType[],
  }
};
