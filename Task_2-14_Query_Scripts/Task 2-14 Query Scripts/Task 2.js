db.companies.aggregate([
{$match: {founded_year: {$gte: 2012}, category_code:  "software"}},
{$group: {_id: "$item",avg_number_of_employees_from_2012_in_software: { $avg: "$number_of_employees"}}}
]).pretty()
