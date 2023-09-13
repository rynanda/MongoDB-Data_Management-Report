db.companies.aggregate([ { $match: { acquisition: null, category_code : "software" } }, 
{ $redact: { $cond: { if: { $eq: [ { $arrayElemAt: [ "$offices.city", 0 ] }, "Sydney" ] }, then: "$$DESCEND", else: "$$PRUNE" } } }, 
{ $project : { name : 1, _id : 0 } } ] )
