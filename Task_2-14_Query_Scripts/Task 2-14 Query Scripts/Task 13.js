db.companies.aggregate([
{ $match: { category_code : "software", "offices":{"$elemMatch": {"country_code": "AUS"}}}},
{ "$project": { offices: { $filter: { input: "$offices", as:"office", cond: { $eq: [ "$$office.country_code", "AUS" ] },}},
_id:0, name:1,}}]).pretty()
