import axios from 'axios'

const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1'

const ProductServices = async () => {
  await axios.get(BASE_URL + '/item')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export default ProductServices
