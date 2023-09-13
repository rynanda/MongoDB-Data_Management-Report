db.companies.aggregate([
{$unwind: {path:"$relationships"}},
{$match: 
{number_of_employees: {$gte: 300}, 
category_code:  "software",
"relationships.is_past": true, 
"relationships.title": {$regex:/software.*manager/i}
}},
{$skip:1},
{$project: {_id: 0, name: 1, "relationships.title": 1, "relationships.person": 1}},
{$sort: {"number_of_employees": -1}}
]).pretty()
