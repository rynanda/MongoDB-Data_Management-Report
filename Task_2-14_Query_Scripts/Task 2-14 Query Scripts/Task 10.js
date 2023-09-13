db.companies.aggregate( [ { $match: { acquisitions: { "$exists": true, "$not": { $size: 0 } }, category_code: "software" } }, 
{ $project: { name: 1, _id : 0, acquisitionCostPerYear: { $divide: [ { $arrayElemAt: [ "$acquisitions.price_amount", 0 ] }, 
{ $subtract: [ 2021, { $arrayElemAt: [ "$acquisitions.acquired_year", 0 ] } ] } ] } } } ] )
