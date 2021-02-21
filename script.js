const us_state_abbrev = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands':'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
    'AL': 'AL',
    'AK': 'AK',
    'AS': 'AS',
    'AZ': 'AZ',
    'AR': 'AR',
    'CA': 'CA',
    'CO': 'CO',
    'CT': 'CT',
    'DE': 'DE',
    'DC': 'DC',
    'FL': 'FL',
    'GA': 'GA',
    'GU': 'GU',
    'HI': 'HI',
    'ID': 'ID',
    'IL': 'IL',
    'IN': 'IN',
    'IA': 'IA',
    'KS': 'KS',
    'KY': 'KY',
    'LA': 'LA',
    'ME': 'ME',
    'MD': 'MD',
    'MA': 'MA',
    'MI': 'MI',
    'MN': 'MN',
    'MS': 'MS',
    'MO': 'MO',
    'MT': 'MT',
    'NE': 'NE',
    'NV': 'NV',
    'NH': 'NH',
    'NJ': 'NJ',
    'NM': 'NM',
    'NY': 'NY',
    'NC': 'NC',
    'ND': 'ND',
    'MP':'MP',
    'OH': 'OH',
    'OK': 'OK',
    'OR': 'OR',
    'PA': 'PA',
    'PR': 'PR',
    'RI': 'RI',
    'SC': 'SC',
    'SD': 'SD',
    'TN': 'TN',
    'TX': 'TX',
    'UT': 'UT',
    'VT': 'VT',
    'VI': 'VI',
    'VA': 'VA',
    'WA': 'WA',
    'WV': 'WV',
    'WI': 'WI',
    'WY': 'WY',
    'al': 'AL',
    'ak': 'AK',
    'as': 'AS',
    'az': 'AZ',
    'ar': 'AR',
    'ca': 'CA',
    'co': 'CO',
    'ct': 'CT',
    'de': 'DE',
    'dc': 'DC',
    'fl': 'FL',
    'ga': 'GA',
    'gu': 'GU',
    'hi': 'HI',
    'id': 'ID',
    'il': 'IL',
    'in': 'IN',
    'ia': 'IA',
    'ks': 'KS',
    'ky': 'KY',
    'la': 'LA',
    'me': 'ME',
    'md': 'MD',
    'ma': 'MA',
    'mi': 'MI',
    'mn': 'MN',
    'ms': 'MS',
    'mo': 'MO',
    'mt': 'MT',
    'ne': 'NE',
    'nv': 'NV',
    'nh': 'NH',
    'nj': 'NJ',
    'nm': 'NM',
    'ny': 'NY',
    'nc': 'NC',
    'nd': 'ND',
    'mp':'MP',
    'oh': 'OH',
    'ok': 'OK',
    'or': 'OR',
    'pa': 'PA',
    'pr': 'PR',
    'ri': 'RI',
    'sc': 'SC',
    'sd': 'SD',
    'tn': 'TN',
    'tx': 'TX',
    'ut': 'UT',
    'vt': 'VT',
    'vi': 'VI',
    'va': 'VA',
    'wa': 'WA',
    'wv': 'WV',
    'wi': 'WI',
    'wy': 'WY',
    'alabama': 'AL',
    'alaska': 'AK',
    'american samoa': 'AS',
    'arizona': 'AZ',
    'arkansas': 'AR',
    'california': 'CA',
    'colorado': 'CO',
    'connecticut': 'CT',
    'delaware': 'DE',
    'district of columbia': 'DC',
    'florida': 'FL',
    'georgia': 'GA',
    'guam': 'GU',
    'hawaii': 'HI',
    'idaho': 'ID',
    'illinois': 'IL',
    'indiana': 'IN',
    'iowa': 'IA',
    'kansas': 'KS',
    'kentucky': 'KY',
    'louisiana': 'LA',
    'maine': 'ME',
    'maryland': 'MD',
    'massachusetts': 'MA',
    'michigan': 'MI',
    'minnesota': 'MN',
    'mississippi': 'MS',
    'missouri': 'MO',
    'montana': 'MT',
    'nebraska': 'NE',
    'nevada': 'NV',
    'new hampshire': 'NH',
    'new jersey': 'NJ',
    'new mexico': 'NM',
    'new york': 'NY',
    'north carolina': 'NC',
    'north dakota': 'ND',
    'northern mariana islands':'MP',
    'ohio': 'OH',
    'oklahoma': 'OK',
    'oregon': 'OR',
    'pennsylvania': 'PA',
    'puerto rico': 'PR',
    'rhode island': 'RI',
    'south carolina': 'SC',
    'south dakota': 'SD',
    'tennessee': 'TN',
    'texas': 'TX',
    'utah': 'UT',
    'vermont': 'VT',
    'virgin islands': 'VI',
    'virginia': 'VA',
    'washington': 'WA',
    'west virginia': 'WV',
    'wisconsin': 'WI',
    'wyoming': 'WY'
};


function getWorldCases() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(data => document.getElementById("worldtotalcases").innerHTML = numberWithCommas( data[0]["cases"]) + " Cases");
}

function getWorldTodayCases() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(data => document.getElementById("worldtodaycases").innerHTML = numberWithCommas( data[0]["todayCases"]) + " Cases");
}

function getWorldDeaths() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(data => document.getElementById("worldtotaldeaths").innerHTML = numberWithCommas( data[0]["deaths"]) + " Deaths");
}


function getWorldTodayDeaths() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(data => document.getElementById("worldtodaydeaths").innerHTML = numberWithCommas( data[0]["todayDeaths"]) + " Deaths");
}

function getStatePositives() {
    let name = document.querySelector("#state-symbol").value;
    let abbreviation = us_state_abbrev[name]
    console.log(abbreviation)
    fetch(`https://api.covidtracking.com/v1/states/${abbreviation}/current.json`)
    .then(res => res.json())
    .then(function(res) {
        if (res["positive"] === undefined) {
            alert("Sorry, state invalid, Please try again!")
        }
        else if (res["statepositives"] === null){
            document.getElementById("statepositives").innerHTML = "Not Available";
        
        }
        else {
            document.getElementById("statepositives").innerHTML = numberWithCommas( res["positive"] + " Positive Tests");
        }
    });
    
}

function getStateHospital() {
    let name = document.querySelector("#state-symbol").value;
    let abbreviation = us_state_abbrev[name]
    console.log(abbreviation)
    fetch(`https://api.covidtracking.com/v1/states/${abbreviation}/current.json`)
    .then(res => res.json())
    .then(function(res) {
        if (res["hospitalizedCumulative"] === undefined) {
            // alert("Sorry, state invalid, Please try again!")
        }
        else if (res["hospitalizedCumulative"] === null){
            document.getElementById("statehospital").innerHTML = "Not Available";
        }
        else {
            document.getElementById("statehospital").innerHTML = numberWithCommas( res["hospitalizedCumulative"] + " People");
        }
    });
    
}



function getStateDeaths() {
    let name = document.querySelector("#state-symbol").value;
    let abbreviation = us_state_abbrev[name]
    console.log(abbreviation)
    fetch(`https://api.covidtracking.com/v1/states/${abbreviation}/current.json`)
    .then(res => res.json())
    .then(function(res) {
        if (res["death"] === undefined) {
            // alert("Sorry, state invalid, Please try again!")
        }
        else if (res["death"] === null){
            document.getElementById("statedeaths").innerHTML = "Not Available";
        }
        else {
            document.getElementById("statedeaths").innerHTML = numberWithCommas( res["death"] + " Deaths");
        }
    });
    
}

function getStateVentilators() {
    let name = document.querySelector("#state-symbol").value;
    let abbreviation = us_state_abbrev[name]
    console.log(abbreviation)
    fetch(`https://api.covidtracking.com/v1/states/${abbreviation}/current.json`)
    .then(res => res.json())
    .then(function(res) {
        if (res["onVentilatorCurrently"] === undefined) {
            // alert("Sorry, state invalid, Please try again!")
        }
        else if (res["onVentilatorCurrently"] === null){
            document.getElementById("stateventilators").innerHTML = "Not Available";
        }
        else {
            document.getElementById("stateventilators").innerHTML = numberWithCommas( res["onVentilatorCurrently"] + " People");
        }
    });
    
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


getWorldCases()
getWorldTodayCases()
getWorldDeaths()
getWorldTodayDeaths()
