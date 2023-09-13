db.companies.aggregate([
{$match: {number_of_employees: {$gt: 20}, founded_year: {$lt: 2010}, category_code:  "software"}}, 
{$project: {_id:0, name:1, total_money_raised:1, founded_year:1}}
]).pretty()
