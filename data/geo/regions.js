// Region list. "geo" = SCHEMATIC outlines [lon,lat] used until you supply real boundaries:
// to use real shapes, define window.PH_GEOJSON = {type:"FeatureCollection",features:[{properties:{id:"ncr"},geometry:{...}}]}
// (ids must match below) in a script loaded before the map. Church "region" fields use these ids.
window.REGIONS=[
{id:"ncr",code:"NCR",name:"Metro Manila",full:"National Capital Region",geo:[[[120.9,14.82],[121.2,14.82],[121.2,14.4],[120.9,14.4]]]},
{id:"car",code:"CAR",name:"Cordillera",full:"Cordillera Administrative Region",geo:[[[120.75,18.2],[121.4,18.3],[121.6,17.4],[121.3,16.6],[120.8,16.6],[120.6,17.4]]]},
{id:"r1",code:"Region I",name:"Ilocos",full:"Region I — Ilocos Region",geo:[[[120.4,18.6],[120.9,18.5],[120.7,18.1],[120.55,17.4],[120.75,16.6],[120.45,15.95],[120.25,16.2],[120.3,17.5]]]},
{id:"r2",code:"Region II",name:"Cagayan Valley",full:"Region II — Cagayan Valley",geo:[[[121.0,18.55],[122.15,18.55],[122.4,17.3],[121.95,16.3],[121.5,15.95],[121.3,16.6],[121.6,17.4],[121.4,18.3]]]},
{id:"r3",code:"Region III",name:"Central Luzon",full:"Region III — Central Luzon",geo:[[[120.1,15.8],[120.5,16.1],[121.3,16.0],[121.6,15.8],[121.6,15.1],[121.25,14.82],[120.9,14.82],[120.5,14.7],[120.0,14.9]]]},
{id:"r4a",code:"Region IV-A",name:"CALABARZON",full:"Region IV-A — CALABARZON",geo:[[[120.6,14.5],[120.9,14.4],[121.2,14.4],[121.25,14.82],[121.6,15.1],[122.2,14.4],[121.9,13.8],[121.5,13.5],[121.0,13.4],[120.6,13.8]]]},
{id:"r4b",code:"MIMAROPA",name:"MIMAROPA",full:"Region IV-B — MIMAROPA",geo:[[[120.3,13.5],[121.5,13.4],[121.4,12.2],[120.6,12.2]],[[117.2,8.6],[117.9,9.9],[119.5,11.4],[119.9,11.0],[118.6,9.4],[117.9,8.3]]]},
{id:"r5",code:"Region V",name:"Bicol",full:"Region V — Bicol Region",geo:[[[122.5,14.1],[123.4,14.3],[124.0,13.8],[124.2,12.8],[123.7,12.6],[123.2,13.2],[122.8,13.4],[122.6,13.9]],[[123.2,12.6],[123.8,12.5],[123.6,11.9],[123.2,12.0]]]},
{id:"r6",code:"Region VI",name:"Western Visayas",full:"Region VI — Western Visayas",geo:[[[121.9,11.9],[122.6,11.8],[123.1,11.5],[122.7,10.9],[122.3,10.5],[121.95,10.5],[121.9,11.0]],[[122.9,10.9],[123.4,10.9],[123.4,10.0],[123.3,9.2],[122.8,9.4],[122.5,10.0]]]},
{id:"r7",code:"Region VII",name:"Central Visayas",full:"Region VII — Central Visayas",geo:[[[123.6,11.2],[124.1,11.2],[123.9,10.0],[123.5,9.5],[123.5,10.4]],[[124.1,9.9],[124.7,10.1],[124.6,9.6],[124.2,9.5]]]},
{id:"r8",code:"Region VIII",name:"Eastern Visayas",full:"Region VIII — Eastern Visayas",geo:[[[124.3,12.6],[125.6,12.6],[125.75,11.3],[125.0,11.0],[124.4,11.9]],[[124.3,11.4],[125.0,11.1],[125.05,10.0],[124.55,10.2],[124.3,10.8]]]},
{id:"r9",code:"Region IX",name:"Zamboanga Peninsula",full:"Region IX — Zamboanga Peninsula",geo:[[[122.0,7.0],[122.8,7.0],[123.4,7.7],[123.8,8.5],[123.0,8.9],[122.4,8.5],[122.0,8.0]]]},
{id:"r10",code:"Region X",name:"Northern Mindanao",full:"Region X — Northern Mindanao",geo:[[[123.8,8.6],[124.0,9.2],[124.9,9.2],[125.2,9.0],[125.0,8.2],[124.3,8.3]]]},
{id:"r11",code:"Region XI",name:"Davao Region",full:"Region XI — Davao Region",geo:[[[125.3,7.9],[125.9,7.6],[126.5,7.0],[126.3,6.0],[125.6,5.9],[125.25,6.6]]]},
{id:"r12",code:"Region XII",name:"SOCCSKSARGEN",full:"Region XII — SOCCSKSARGEN",geo:[[[124.0,7.8],[125.2,7.9],[125.25,6.6],[125.6,5.9],[124.9,5.6],[124.4,6.1],[124.0,6.9]]]},
{id:"r13",code:"Region XIII",name:"Caraga",full:"Region XIII — Caraga",geo:[[[125.2,9.9],[126.2,9.5],[126.4,8.2],[126.0,7.6],[125.5,8.0],[125.2,8.8]]]},
{id:"barmm",code:"BARMM",name:"Bangsamoro",full:"Bangsamoro Autonomous Region in Muslim Mindanao",geo:[[[123.6,8.0],[124.0,8.2],[124.0,7.6],[123.9,6.9],[123.6,7.2]],[[119.9,6.0],[121.2,6.1],[121.3,5.7],[120.0,5.3]],[[121.8,6.8],[122.3,6.7],[122.2,6.3],[121.9,6.4]]]}
];
