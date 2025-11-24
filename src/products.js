import HM from './assets/svgs/hm.svg'
import PBear from './assets/svgs/pull-bear.svg'
import Avva from './assets/svgs/avva.svg'
import Mavi from './assets/svgs/mavi.svg'

const products = [
  {
    id: 1,
    name: 'Çift kollu Santa Monica tişört',
    href: '#',
    imageSrc: 'https://image.hm.com/assets/hm/88/18/8818f65c129f64d50d9679bd8458567705eede91.jpg?imwidth=2160',
    hoverImageSrc: 'https://image.hm.com/assets/hm/c1/79/c179dc8a116ffc9f45c9fce5079b3da3f9e01ee9.jpg?imwidth=2160',
    brandSrc: HM,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '1.190,00 ₺',
    discount: '',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Gri suni deri ceket',
    href: '#',
    imageSrc: 'https://static.pullandbear.net/assets/public/931c/3d7e/2739431d897f/9c5ab3e30eeb/07700517802-A6M/07700517802-A6M.jpg?ts=1754260127491&w=1030&f=auto',
    hoverImageSrc: 'https://static.pullandbear.net/assets/public/1eb8/fc33/3fbe4ad2b05d/5628b3a14c04/07700517802-M/07700517802-M.jpg?ts=1761302891446&w=1030&f=auto',
    brandSrc: PBear,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2.490,00 ₺',
    discount: '1.190,00 ₺',
    color: 'Black',
  },  {
    id: 3,
    name: 'Beyaz Klasik Yaka Pamuklu Jersey Gömlek Ceket',
    href: '#',
    imageSrc: 'https://static.ticimax.cloud/4183/uploads/urunresimleri/buyuk/beyaz-klasik-yaka-diyagonel-cift-cep-k-1b-d38.jpg',
    hoverImageSrc: 'https://static.ticimax.cloud/4183/uploads/urunresimleri/buyuk/beyaz-klasik-yaka-diyagonel-cift-cep-k-ce6f7e.jpg',
    brandSrc: Avva,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '2.998,99 ₺',
    discount: '',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Paloma Haki Gabardin Pantolon',
    href: '#',
    imageSrc: 'https://sky-static.mavi.com/mnresize/820/1162/1010114-91195_image_1.jpg',
    hoverImageSrc: 'https://sky-static.mavi.com/mnresize/820/1162/1010114-91195_image_5.jpg',
    brandSrc: Mavi,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '1.399,00 ₺',
    discount: '',
    color: 'Black',
  }
];

export default products;