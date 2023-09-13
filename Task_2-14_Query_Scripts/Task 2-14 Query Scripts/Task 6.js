db.companies.aggregate([
{$match: {founded_year: {$gte: 2005}, category_code: "software"}},
{$project: {_id:0,  "name":1, "number_of_employees": 1, "num_offices": {$size: "$offices"}}},
{$sort: {"num_offices": -1}}
]).pretty()
