import homeView from '../view/homeView.js';
import shopService from '../service/shopsService.js';

export function init() {
    homeView.render(shopService.getShop);
}
