db.companies.aggregate([
{$project: {num_competitions: {"$size": "$competitions"}, "_id": 0,  "name": 1, "category_code": 1}},
{$sort: {num_competitions: -1}},
{$limit: 10}
]).pretty()
