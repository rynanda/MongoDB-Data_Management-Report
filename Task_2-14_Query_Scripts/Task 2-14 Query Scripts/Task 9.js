db.companies.aggregate([ {$match: { category_code: "software" }}, 
{ $project: { name: { $toUpper: "$name" }, _id : 0, dateTimeSubstring: { $substr: [ "$updated_at", 0, 23 ] }, yearSubstring: { $substr: [ "$updated_at", 24, -1 ] } } } ] )
