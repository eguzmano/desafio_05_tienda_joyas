const HATEOAS = async (entity, data) => {
  const results = data.map((joya) => ({
    name: joya.nombre,
    href: `http://localhost:5000/${entity}/${joya.id}`
  }))

  const totalJoyas = data.length
  const stockTotal = data.reduce((acc, joya) => acc + joya.stock, 0)

  return {
    totalJoyas,
    stockTotal,
    results
  }
}

export default HATEOAS
