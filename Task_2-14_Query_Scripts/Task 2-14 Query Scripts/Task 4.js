db.companies.aggregate([
{$match: {founded_year: {$gte: 2000}, category_code: "software"}},
{$group: {_id: {founded_year: "$founded_year"},
total_companies: {$sum: 1}}},
{$sort: {"_id": 1}}
]).pretty()
