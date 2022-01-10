import { ApolloError } from "apollo-server"
import Items from '../../../models/Items'
import Collages from '../../../models/Collage'
import Clothes from '../../../models/Clothes'
import Size from '../../../models/Size'

import { SELECTION_PRICES } from '../../../constants/var'

export default async (_, { selectedClothes }) => {
  try {

    let arrayItems = []

    const collages = await Collages.find({ isDeleted: false })

    collages.forEach(collage => {
      Object.entries(SELECTION_PRICES).forEach(selection => {
        const aux = Object.entries(selection[1]).map(size => {
          return {
            collage: collage.name,
            clothes: selection[0],
            size: String(size[0]),
            isDeleted: false,
            price: Number(size[1]),
            createAt: Date.now()
          }
        })

        if (collage.name !== 'Santa Teresa' && collage.name !== 'Pluma de Oro') {
          arrayItems = [...arrayItems, ...aux]
        }
      });
    });

    const items = arrayItems

    // console.log(arrayItems)

    // arrayItems.forEach(oneItem => {
    //   const auxItem = new Items({ ...oneItem })
    //   auxItem.save()
    // });

    // const auxItem = new Items(arrayItems[0])
    // auxItem.save()

    Items.collection.insertMany(items, function(err, docs) {
      if(err){
        throw new Error(err)
      }
      else{
        return {
          inserted: arrayItems.length,
          noInserted: 0,
          detailsNoInserted: []
        }
      }
    })

    return {
      inserted: arrayItems.length,
      noInserted: 0,
      detailsNoInserted: []
    }

  } catch (e) {
    throw new ApolloError(e)
  }
}