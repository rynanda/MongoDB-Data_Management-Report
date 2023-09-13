db.companies.aggregate([ { $match : { $and: [ {category_code : "software"},{acquisition: {"$ne": null}}]}},
{ $graphLookup: { from: "companies", startWith: "$acquisition.acquiring_company.name", connectFromField: "acquisition.acquiring_company.name",
connectToField: "name", as: "Acquiring Company" }}, { $limit: 20 },{$project: {_id:0, name:1, acquisition:{acquired_year:1, acquired_month:1}, "Acquiring Company": {name:1, homepage_url:1} }}]).pretty()
