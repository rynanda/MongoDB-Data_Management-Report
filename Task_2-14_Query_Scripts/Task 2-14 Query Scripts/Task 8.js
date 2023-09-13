db.companies.aggregate( [ {$match: { category_code: "software" }},
{ $project: { contact_details: { $concat: [ "$email_address", " - ", "$phone_number" ] }, name: 1, _id: 0 } } ] )
