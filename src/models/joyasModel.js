import pool from '../../db/config.js'
import pgformat from 'pg-format'

export const getAllJoyas = async ({ orderBy = 'id_ASC', limit = 5, page = 1 }) => {
  const [field, direction] = orderBy.split('_')
  const offset = (page - 1) * limit
  const pgformatQuery = pgformat(
    'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
    field,
    direction,
    limit,
    offset
  )
  const response = await pool.query(pgformatQuery)
  return response.rows
}

export const getAllfiltrosJoyas = async ({ precio_min, precio_max, categoria, metal }) => {
  const filtros = []
  const valores = []
  if (precio_min) {
    filtros.push(pgformat('precio >= %s', precio_min))
  }
  if (precio_max) {
    filtros.push(pgformat('precio <= %s', precio_max))
  }
  if (categoria) {
    filtros.push(pgformat('categoria = %L', categoria))
  }
  if (metal) {
    filtros.push(pgformat('metal = %L', metal))
  }

  let consulta = 'SELECT * FROM inventario'

  if (filtros.length > 0) {
    consulta += ' WHERE ' + filtros.join(' AND ')
  }

  const result = await pool.query(consulta)
  return result.rows
}
