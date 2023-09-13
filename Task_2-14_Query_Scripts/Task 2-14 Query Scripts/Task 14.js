var mf1 = function() { for (var idx = 0; idx < this.funding_rounds.length; idx++) {
/* The IF statement ensures only funding tranches in USD are captured */
if(this.funding_rounds[idx].raised_currency_code == "USD"){ var key = this.funding_rounds[idx].funded_year;  
var value = { qty: this.funding_rounds[idx].raised_amount }; emit(key, value); } } };
var rf1 = function(keyITEM, countObjVals) { reducedVal = { qty: 0 };
for (var idx = 0; idx < countObjVals.length; idx++) { reducedVal.qty += countObjVals[idx].qty; } 
return reducedVal; };
db.companies.mapReduce( mf1,rf1, { out: { merge: "software_industry_raisings_usd" }, query:{"category_code":"software"} } )
db.software_industry_raisings_usd.aggregate([ { $match : {"_id" : {$gt : 1900, $lt : 2014 }}} , { "$project": { "_id" : 0, "Year": "$_id", "Raised_USD" : "$value.qty"  } } ])
