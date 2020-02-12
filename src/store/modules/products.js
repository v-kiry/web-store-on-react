import bags from '../../pages/Bags/listBags';
import hats from '../../pages/Hats/listHats';
import shoes from '../../pages/Shoes/listShoes';

export default store => {
  store.on('@init', () => ({ products: [bags, hats, shoes] }))
}