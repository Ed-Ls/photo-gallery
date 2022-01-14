const photos = [
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",

  "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg",

  "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg",

  "https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_1280.jpg",

  "https://cdn.pixabay.com/photo/2021/10/27/03/37/road-6745746_1280.jpg",
];

const photos1 = [
  "https://cdn.pixabay.com/photo/2018/10/02/16/12/nature-3719233__480.jpg",

  "https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196__480.jpg",

  "https://cdn.pixabay.com/photo/2021/11/08/23/29/nature-6780354__480.jpg",

  "https://cdn.pixabay.com/photo/2021/11/08/11/19/buildings-6778915__480.jpg",

  "https://cdn.pixabay.com/photo/2021/10/19/17/51/road-6724201__480.jpg",
];

const photos2 = [
  "https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716__480.jpg",

  "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__480.jpg",

  "https://cdn.pixabay.com/photo/2018/01/31/12/16/architecture-3121009__340.jpg",

  "https://cdn.pixabay.com/photo/2020/02/05/09/57/namibia-4820682__480.jpg",

  "https://cdn.pixabay.com/photo/2020/05/04/16/05/mckenzie-river-5129717__480.jpg",
];

const photos3 = [
  "https://cdn.pixabay.com/photo/2018/07/18/20/25/channel-3547224__480.jpg",

  "https://cdn.pixabay.com/photo/2019/11/23/03/08/valley-4646114__480.jpg",

  "https://cdn.pixabay.com/photo/2020/04/25/01/36/road-5089188__480.jpg",

  "https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236__340.jpg",

  "https://cdn.pixabay.com/photo/2020/06/15/17/10/ancient-5302623__480.jpg",
];

//array of
const imageData = [photos, photos1, photos2, photos3];

//For each photo, point on the grid: 1: what row it starts, 2: how many row it spends, 3: column it starts, 4: how many column it takes
const points = [
  [10, 2, 12, 2],
  [16, 6, 7, 1],
  [29, 5, 12, 3],
  [14, 10, 13, 3],
  [40, 14, 5, 2],
];
export { imageData, points };
