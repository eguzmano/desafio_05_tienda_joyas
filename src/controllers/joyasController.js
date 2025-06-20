import { getAllfiltrosJoyas, getAllJoyas } from '../models/joyasModel.js'
import HATEOAS from '../helpers/hateoas.js'

export const getJoyasHateoas = async (req, res) => {
  try {
    const { order_by, limit, page } = req.query
    const allJoyas = await getAllJoyas({ order_by, limit, page })
    const allJoyasHateoas = await HATEOAS('joyas', allJoyas)
    res.status(200).json({ allJoyasHateoas })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getJoyasHateoasFiltered = async (req, res) => {
  try {
    const filters = req.query
    const allJoyasFilter = await getAllfiltrosJoyas(filters)
    // const allJoyasHateoas = await HATEOAS('joyas', allJoyasFilter)
    res.status(200).json({ allJoyasFilter })
  } catch (error) {
    res.status(500).json({ error })
  }
}
