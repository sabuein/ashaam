import defaultExport, { cl, convert, retrieve, fetcher } from "./helpers.js";
import employees from "../data/employees.json" assert { type: "json" }; // Deserialization to native object
import students from "../data/students.json" assert { type: "json" }; // Deserialization to native object
import users from "../data/users.json" assert { type: "json" }; // Deserialization to native object

//////////////////////////////////////////////////////////////////////////

const propertyNames = (data) => { return Object.keys(data) };
const propertyValues = (data) => { return Object.values(data) };
const entries = (data) => { return Object.entries(data) };

//////////////////////////////////////////////////////////////////////////

defaultExport();

let issURL = "https://api.wheretheiss.at/v1/satellites/25544",
    issData = await fetcher(issURL);
const { visibility, latitude, longitude } = issData;
cl(issData);
cl(visibility);
cl(latitude);
cl(longitude);

let tomtomKey = "TMejINVPlWUiYo0QwEUjxqMSw7JDGf9b",
    tomtomURL = `https://api.tomtom.com/search/2/categorySearch/pizza.json?key=${tomtomKey}`,
    tomtomData = await fetcher(tomtomURL);
const { address } = propertyValues(entries(tomtomData["results"]));
cl(tomtomData);
cl(propertyNames(tomtomData["results"][0]));
cl("address: " + address);

//////////////////////////////////////////////////////////////////////////

var e = employees,
    s = students,
    u = users;

cl(typeof e);
cl(e);
cl(typeof s);
cl(s);
cl(typeof u);
cl(u);
cl(typeof convert(e));
cl(convert(e));

//////////////////////////////////////////////////////////////////////////

cl(propertyNames(u));
cl(propertyValues(u));
cl(entries(u));

//////////////////////////////////////////////////////////////////////////

cl("hi");
const everything = () => {
    e.employees.forEach(employee => {
        const { firstName, lastName } = employee;
        return { first_name: firstName, last_name: lastName }
    });
}
cl("bye");

// let firstEmployee = {
//     first_name: employees.employees[1].firstName,
//     last_name: employees.employees[1].lastName
// },
//     secondEmployee = {
//         first_name: employees.employees[2].firstName,
//         last_name: employees.employees[2].lastName
//     };

// retrieve("location-one", firstEmployee);
// retrieve("location-two", secondEmployee);

const { first, second, third } = everything;
retrieve("location-one", first);
retrieve("location-two", second);

//////////////////////////////////////////////////////////////////////////

/*
Category
Automotive			
Automotive > Car Appraisers			
Automotive > Car Dealers and Leasing			
Automotive > Car Dealers and Leasing > Car Dealers			
5	Automotive > Car Dealers and Leasing > Used Cars			
6	Automotive > Car Parts and Accessories			
7	Automotive > Car Wash and Detail			
8	Automotive > Classic and Antique Car			
9	Automotive > Maintenance and Repair			
10	Automotive > Maintenance and Repair > Oil and Lube			
11	Automotive > Maintenance and Repair > Smog Check			
12	Automotive > Maintenance and Repair > Tires			
13	Automotive > Maintenance and Repair > Transmissions			
14	Automotive > Motorcycles, Mopeds and Scooters			
15	Automotive > Motorcycles, Mopeds and Scooters > Repair			
16	Automotive > Motorcycles, Mopeds and Scooters > Sales			
17	Automotive > RVs and Motor Homes			
18	Automotive > Salvage Yards			
19	Automotive > Towing			
20	Community and Government			
21	Community and Government > Animal Shelters and Humane Societies			
22	Community and Government > Cemeteries			
477	Community and Government > City Halls			
23	Community and Government > Day Care and Preschools			
24	Community and Government > Disabled Persons Services			
25	Community and Government > Drug and Alcohol Services			
26	Community and Government > Education			
27	Community and Government > Education > Adult Education			
28	Community and Government > Education > Art Lessons and Schools			
29	Community and Government > Education > Colleges and Universities			
30	Community and Government > Education > Computer Training			
31	Community and Government > Education > Culinary Lessons and Schools			
32	Community and Government > Education > Driving Schools			
33	Community and Government > Education > Fraternities and Sororities			
34	Community and Government > Education > Primary and Secondary Schools			
35	Community and Government > Education > Tutoring and Educational Services			
36	Community and Government > Education > Vocational Schools			
37	Community and Government > Government Departments and Agencies			
453	Community and Government > Government Departments and Agencies > Embassies			
38	Community and Government > Government Lobbyists			
39	Community and Government > Housing Assistance and Shelters			
40	Community and Government > Law Enforcement and Public Safety			
41	Community and Government > Law Enforcement and Public Safety > Rescue Services			
42	Community and Government > Law Enforcement and Public Safety > Fire Stations			
43	Community and Government > Law Enforcement and Public Safety > Police Stations			
44	Community and Government > Libraries			
45	Community and Government > Military			
46	Community and Government > Military > Bases			
47	Community and Government > Organizations and Associations			
48	Community and Government > Organizations and Associations > Charities and Non-Profits			
49	Community and Government > Organizations and Associations > Environmental			
50	Community and Government > Organizations and Associations > Youth Organizations			
51	Community and Government > Post Offices			
52	Community and Government > Public and Social Services			
53	Community and Government > Religious			
54	Community and Government > Religious > Buddhist Temples			
55	Community and Government > Religious > Churches			
56	Community and Government > Religious > Hindu Temples			
57	Community and Government > Religious > Mosques			
58	Community and Government > Religious > Synagogues			
59	Community and Government > Senior Citizen Services			
60	Community and Government > Senior Citizen Services > Retirement			
61	Community and Government > Utility Companies			
62	Healthcare	✓		
63	Healthcare > AIDS Resources			
64	Healthcare > Assisted Living Services			
66	Healthcare > Assisted Living Services > Facilities and Nursing Homes			
65	Healthcare > Home Health Care Services			
67	Healthcare > Blood Banks and Centers			
68	Healthcare > Chiropractors	✓		
69	Healthcare > Dentists	✓		
70	Healthcare > Emergency Services			
71	Healthcare > Emergency Services > Ambulance			
72	Healthcare > Holistic, Alternative and Naturopathic Medicine	✓		
73	Healthcare > Holistic, Alternative and Naturopathic Medicine > Acupuncture	✓		
74	Healthcare > Hospitals, Clinics and Medical Centers			
75	Healthcare > Medical Supplies and Labs			
76	Healthcare > Mental Health	✓		
77	Healthcare > Mental Health > Counseling and Therapy	✓		
78	Healthcare > Mental Health > Psychologists	✓		
79	Healthcare > Nurses	✓		
475	Healthcare > Other Healthcare Professionals	✓		
80	Healthcare > Pharmacies			
81	Healthcare > Physical Therapy and Rehabilitation	✓		
82	Healthcare > Physical Therapy and Rehabilitation > Sports Medicine	✓		
83	Healthcare > Physicians	✓		
84	Healthcare > Physicians > Anesthesiologists	✓		
85	Healthcare > Physicians > Cardiologists	✓		
86	Healthcare > Physicians > Dermatologists	✓		
87	Healthcare > Physicians > Ear, Nose and Throat	✓		
88	Healthcare > Physicians > Family Medicine	✓		
89	Healthcare > Physicians > Gastroenterologists	✓		
90	Healthcare > Physicians > General Surgery	✓		
91	Healthcare > Physicians > Internal Medicine	✓		
92	Healthcare > Physicians > Neurologists	✓		
93	Healthcare > Physicians > Obstetricians and Gynecologists	✓		
94	Healthcare > Physicians > Oncologists	✓		
95	Healthcare > Physicians > Ophthalmologists	✓		
476	Healthcare > Physicians > Oral Surgeons	✓		
96	Healthcare > Physicians > Orthopedic Surgeons	✓		
97	Healthcare > Physicians > Pathologists	✓		
98	Healthcare > Physicians > Pediatricians	✓		
99	Healthcare > Physicians > Plastic Surgeons	✓		
100	Healthcare > Physicians > Psychiatrists	✓		
101	Healthcare > Physicians > Radiologists	✓		
102	Healthcare > Physicians > Respiratory	✓		
103	Healthcare > Physicians > Urologists	✓		
441	Healthcare > Physicians > Geriatrics	✓		
104	Healthcare > Podiatrists	✓		
105	Healthcare > Pregnancy and Sexual Health			
106	Healthcare > Weight Loss and Nutritionists			
466	Healthcare > Optometrist	✓		
107	Landmarks			
108	Landmarks > Buildings and Structures			
109	Landmarks > Gardens			
110	Landmarks > Historic and Protected Sites			
111	Landmarks > Monuments and Memorials			
112	Landmarks > Natural			
113	Landmarks > Natural > Beaches			
114	Landmarks > Natural > Mountains			
Landmarks > Natural > Forests			
Landmarks > Natural > Lakes			
Landmarks > Natural > Rivers			
Landmarks > Parks			
Landmarks > Parks > Natural Parks			
Landmarks > Parks > Picnic Areas			
Landmarks > Parks > Playgrounds			
Landmarks > Parks > Urban Parks			
Landmarks > Parks > Dog Parks			

Retail			
Retail > Adult			
Retail > Antiques			
Retail > Arts and Crafts			
Retail > Auctions			
Retail > Beauty Products			
Retail > Bicycles			
Retail > Bookstores			
Retail > Cannabis Stores			
Retail > Cards and Stationery			
Retail > Children			
Retail > Comic Book Stores			
Retail > Computers and Electronics			
Retail > Computers and Electronics > Cameras			
Retail > Computers and Electronics > Mobile Phones			
Retail > Computers and Electronics > Video Games			
Retail > Construction Supplies			
Retail > Convenience Stores			
Retail > Costumes			
Retail > Dance and Music			
Retail > Department Stores			
Retail > Fashion			
Retail > Fashion > Clothing and Accessories			
Retail > Fashion > Jewelry and Watches			
Retail > Fashion > Shoes			
Retail > Fashion > Swimwear			
Retail > Flea Markets			
Retail > Florists			
Retail > Food and Beverage			
Retail > Food and Beverage > Beer, Wine and Spirits			
Retail > Food and Beverage > Candy Stores			
Retail > Food and Beverage > Cheese			
Retail > Food and Beverage > Chocolate			
Retail > Food and Beverage > Farmers' Markets			
Retail > Food and Beverage > Health and Diet Food			
Retail > Food and Beverage > Kosher			
Retail > Food and Beverage > Meat and Seafood			
Retail > Furniture and Decor
Retail > Gift and Novelty			
Retail > Glasses			
Retail > Hardware Stores			
Retail > Hobby and Collectibles
Retail > Luggage
Retail > Music, Video and DVD
Retail > Newsstands
Retail > Nurseries and Garden Centers
Retail > Outlet
Retail > Pawn Shops
Retail > Pets
Retail > Pets > Grooming
Retail > Pets > Pet Sitting and Boarding
Retail > Pets > Pet Supplies
Retail > Photos and Frames
Retail > Shopping Centers and Malls
Retail > Sporting Goods
Retail > Supermarkets and Groceries
Retail > Tobacco
Retail > Tobacco > Vaporizer Shops
Retail > Toys
Retail > Vintage and Thrift
Retail > Warehouses and Wholesale Stores
Retail > Wedding and Bridal
Retail > Home Appliances
Retail > Housewares
Retail > Discount Stores
Retail > Office Supplies
Retail > Party Supplies

177	Businesses and Services			
178	Businesses and Services > Business and Strategy Consulting			
179	Businesses and Services > Industrial Machinery and Vehicles			
180	Businesses and Services > Logging and Sawmills			
181	Businesses and Services > Metals			
182	Businesses and Services > Packaging			
183	Businesses and Services > Petroleum			
184	Businesses and Services > Plastics			
185	Businesses and Services > Refrigeration and Ice			
186	Businesses and Services > Rubber			
187	Businesses and Services > Scientific			
188	Businesses and Services > Security and Safety			
189	Businesses and Services > Telecommunication Services			
190	Businesses and Services > Textiles			
191	Businesses and Services > Water and Waste Management			
192	Businesses and Services > Welding			
193	Businesses and Services > Advertising and Marketing			
194	Businesses and Services > Advertising and Marketing > Advertising Agencies and Media Buyers			
195	Businesses and Services > Advertising and Marketing > Creative Services			
196	Businesses and Services > Advertising and Marketing > Direct Mail and Email Marketing Services			
197	Businesses and Services > Advertising and Marketing > Market Research and Consulting			
198	Businesses and Services > Advertising and Marketing > Online Advertising			
199	Businesses and Services > Advertising and Marketing > Print, TV, Radio and Outdoor Advertising			
200	Businesses and Services > Advertising and Marketing > Promotional Items			
201	Businesses and Services > Advertising and Marketing > Public Relations			
202	Businesses and Services > Advertising and Marketing > Search Engine Marketing and Optimization			
203	Businesses and Services > Advertising and Marketing > Writing, Copywriting and Technical Writing			
204	Businesses and Services > Agriculture and Forestry			
205	Businesses and Services > Art Restoration			
206	Businesses and Services > Audiovisual			
207	Businesses and Services > Automation and Control Systems			
208	Businesses and Services > Chemicals and Gasses			
209	Businesses and Services > Computers			
210	Businesses and Services > Corporate HQ			
211	Businesses and Services > Electrical Equipment			
212	Businesses and Services > Employment Agencies			
213	Businesses and Services > Engineering			
214	Businesses and Services > Entertainment			
215	Businesses and Services > Entertainment > Media			
216	Businesses and Services > Equipment Rental			
217	Businesses and Services > Events and Event Planning			
465	Businesses and Services > Events and Event Planning > Convention Centers			
219	Businesses and Services > Financial			
220	Businesses and Services > Financial > Accounting and Bookkeeping			
221	Businesses and Services > Financial > Banking and Finance			
218	Businesses and Services > Financial > Banking and Finance > ATMs			
473	Businesses and Services > Financial > Banking and Finance > Banks and Credit Unions			
222	Businesses and Services > Financial > Business Brokers and Franchises			
223	Businesses and Services > Financial > Check Cashing			
224	Businesses and Services > Financial > Collections			
225	Businesses and Services > Financial > Financial Planning and Investments			
226	Businesses and Services > Financial > Fund Raising			
227	Businesses and Services > Financial > Loans and Mortgages			
228	Businesses and Services > Financial > Stock Brokers			
229	Businesses and Services > Financial > Student Aid and Grants			
230	Businesses and Services > Food and Beverage			
231	Businesses and Services > Food and Beverage > Catering			
232	Businesses and Services > Food and Beverage > Distribution			
233	Businesses and Services > Funeral Services			
234	Businesses and Services > Geological			
235	Businesses and Services > Home Improvement			
236	Businesses and Services > Home Improvement > Architects			
237	Businesses and Services > Home Improvement > Carpenters			
238	Businesses and Services > Home Improvement > Carpet and Flooring			
239	Businesses and Services > Home Improvement > Contractors			
240	Businesses and Services > Home Improvement > Contractors > Bathrooms			
241	Businesses and Services > Home Improvement > Contractors > Deck and Patio			
242	Businesses and Services > Home Improvement > Contractors > Sewer			
243	Businesses and Services > Home Improvement > Doors and Windows			
244	Businesses and Services > Home Improvement > Electricians			
245	Businesses and Services > Home Improvement > Fences, Fireplaces and Garage Doors			
246	Businesses and Services > Home Improvement > Hardware and Services			
247	Businesses and Services > Home Improvement > Heating, Ventilating and Air Conditioning			
249	Businesses and Services > Home Improvement > Home Inspection Services			
251	Businesses and Services > Home Improvement > Interior Design			
252	Businesses and Services > Home Improvement > Kitchens			
253	Businesses and Services > Home Improvement > Landscaping and Gardeners			
254	Businesses and Services > Home Improvement > Lighting Fixtures			
256	Businesses and Services > Home Improvement > Movers			
257	Businesses and Services > Home Improvement > Painting			
258	Businesses and Services > Home Improvement > Pest Control			
259	Businesses and Services > Home Improvement > Plumbing			
260	Businesses and Services > Home Improvement > Pools and Spas			
261	Businesses and Services > Home Improvement > Roofers			
263	Businesses and Services > Home Improvement > Swimming Pool Maintenance and Services			
264	Businesses and Services > Home Improvement > Tree Service			
265	Businesses and Services > Home Improvement > Upholstery			
262	Businesses and Services > Storage			
266	Businesses and Services > Human Resources			
267	Businesses and Services > Import and Export			
268	Businesses and Services > Leather			
269	Businesses and Services > Legal			
474	Businesses and Services > Legal > Attorneys and Law Offices			
270	Businesses and Services > Legal > Credit Counseling and Bankruptcy Services			
271	Businesses and Services > Legal > Immigration			
448	Businesses and Services > Legal > Notary			
272	Businesses and Services > Insurance			
273	Businesses and Services > Machine Shops			
274	Businesses and Services > Management			
275	Businesses and Services > Manufacturing			
276	Businesses and Services > Paper			
277	Businesses and Services > Personal Care			
278	Businesses and Services > Personal Care > Dry Cleaning, Ironing and Laundry			
279	Businesses and Services > Personal Care > Hair Removal			
280	Businesses and Services > Personal Care > Beauty Salons and Barbers			
281	Businesses and Services > Personal Care > Manicures and Pedicures			
282	Businesses and Services > Personal Care > Massage Clinics and Therapists			
283	Businesses and Services > Personal Care > Piercing			
284	Businesses and Services > Personal Care > Skin Care			
285	Businesses and Services > Personal Care > Spas			
286	Businesses and Services > Personal Care > Tanning Salons			
287	Businesses and Services > Personal Care > Tattooing			
288	Businesses and Services > Printing, Copying and Signage			
289	Businesses and Services > Professional Cleaning			
290	Businesses and Services > Publishing			
291	Businesses and Services > Real Estate			
255	Businesses and Services > Real Estate > Mobile Homes			
292	Businesses and Services > Real Estate > Property Management			
293	Businesses and Services > Real Estate > Real Estate Agents			
294	Businesses and Services > Real Estate > Real Estate Appraiser			
295	Businesses and Services > Real Estate > Real Estate Development and Title Companies			
296	Businesses and Services > Real Estate > Apartments, Condos, and Houses			
297	Businesses and Services > Real Estate > Boarding Houses			
298	Businesses and Services > Real Estate > Building and Land Surveyors			
299	Businesses and Services > Real Estate > Commercial Real Estate			
300	Businesses and Services > Real Estate > Corporate Housing			
301	Businesses and Services > Renewable Energy			
302	Businesses and Services > Repair Services			
303	Businesses and Services > Shipping, Freight, and Material Transportation			
304	Businesses and Services > Tailors			
305	Businesses and Services > Veterinarians			
307	Businesses and Services > Wholesale			
446	Businesses and Services > Career Counseling			
447	Businesses and Services > Construction			
449	Businesses and Services > Photography			
450	Businesses and Services > Translation Services			
460	Businesses and Services > Technology			
306	Businesses and Services > Technology > Web Design and Development			
454	Businesses and Services > Technology > Infrastructure			
455	Businesses and Services > Technology > Mobile			
456	Businesses and Services > Technology > Advertising			
308	Social			
309	Social > Arts			
310	Social > Arts > Art Dealers and Galleries			
311	Social > Arts > Museums			
312	Social > Bars		✓	
313	Social > Bars > Hotel Lounges		✓	
314	Social > Bars > Jazz and Blues Cafes		✓	
315	Social > Bars > Sports Bars		✓	
316	Social > Bars > Wine Bars		✓	
317	Social > Entertainment			
318	Social > Entertainment > Adult Entertainment			
319	Social > Entertainment > Amusement Parks			
320	Social > Entertainment > Billiard and Pool			
321	Social > Entertainment > Bingo			
322	Social > Entertainment > Bowling			
323	Social > Entertainment > Carnivals			
324	Social > Entertainment > Casinos and Gaming			
325	Social > Entertainment > Circuses			
481	Social > Entertainment > Comedy Clubs			
326	Social > Entertainment > Dance Halls and Saloons			
327	Social > Entertainment > Fairgrounds and Rodeos			
328	Social > Entertainment > Go Carts			
329	Social > Entertainment > Hookah Lounges			
330	Social > Entertainment > Karaoke			
331	Social > Entertainment > Miniature Golf			
332	Social > Entertainment > Movie Theatres			
333	Social > Entertainment > Music and Show Venues			
334	Social > Entertainment > Night Clubs			
335	Social > Entertainment > Party Centers			
336	Social > Entertainment > Psychics and Astrologers			
337	Social > Entertainment > Ticket Sales			
463	Social > Entertainment > Arcades			
338	Social > Food and Dining		✓	
339	Social > Food and Dining > Bagels and Donuts		✓	
340	Social > Food and Dining > Bakeries		✓	
341	Social > Food and Dining > Breweries		✓	
342	Social > Food and Dining > Cafes, Coffee and Tea Houses		✓	
482	Social > Food and Dining > Cafes, Coffee and Tea Houses > Bubble Tea		✓	
343	Social > Food and Dining > Dessert		✓	
344	Social > Food and Dining > Ice Cream Parlors		✓	
345	Social > Food and Dining > Internet Cafes		✓	
346	Social > Food and Dining > Juice Bars and Smoothies		✓	
347	Social > Food and Dining > Restaurants		✓	
348	Social > Food and Dining > Restaurants > American		✓	
349	Social > Food and Dining > Restaurants > Barbecue		✓	
350	Social > Food and Dining > Restaurants > Buffets		✓	
351	Social > Food and Dining > Restaurants > Burgers		✓	
352	Social > Food and Dining > Restaurants > Chinese		✓	
353	Social > Food and Dining > Restaurants > Delis		✓	
354	Social > Food and Dining > Restaurants > Diners		✓	
355	Social > Food and Dining > Restaurants > Fast Food		✓	
356	Social > Food and Dining > Restaurants > French		✓	
357	Social > Food and Dining > Restaurants > Indian		✓	
358	Social > Food and Dining > Restaurants > Italian		✓	
359	Social > Food and Dining > Restaurants > Japanese		✓	
360	Social > Food and Dining > Restaurants > Korean		✓	
361	Social > Food and Dining > Restaurants > Mexican		✓	
362	Social > Food and Dining > Restaurants > Middle Eastern		✓	
363	Social > Food and Dining > Restaurants > Pizza		✓	
364	Social > Food and Dining > Restaurants > Seafood		✓	
365	Social > Food and Dining > Restaurants > Steakhouses		✓	
366	Social > Food and Dining > Restaurants > Sushi		✓	
367	Social > Food and Dining > Restaurants > Thai		✓	
368	Social > Food and Dining > Restaurants > Vegan and Vegetarian		✓	
457	Social > Food and Dining > Restaurants > Asian		✓	
458	Social > Food and Dining > Restaurants > Food Trucks		✓	
464	Social > Food and Dining > Restaurants > International		✓	
369	Social > Country Clubs			
370	Social > Wineries and Vineyards			
371	Social > Zoos, Aquariums and Wildlife Sanctuaries			
372	Sports and Recreation			
373	Sports and Recreation > Athletic Fields			
374	Sports and Recreation > Baseball			
375	Sports and Recreation > Baseball > Batting Ranges			
376	Sports and Recreation > Basketball			
377	Sports and Recreation > Combat Sports			
378	Sports and Recreation > Cycling			
379	Sports and Recreation > Dance			
380	Sports and Recreation > Equestrian			
381	Sports and Recreation > Football			
382	Sports and Recreation > Golf			
451	Sports and Recreation > Golf > Golf Courses			
383	Sports and Recreation > Gun Ranges			
384	Sports and Recreation > Gymnastics			
385	Sports and Recreation > Gyms and Fitness Centers			
386	Sports and Recreation > Hockey			
387	Sports and Recreation > Outdoors			
388	Sports and Recreation > Outdoors > Campgrounds and RV Parks			
389	Sports and Recreation > Outdoors > Hiking			
390	Sports and Recreation > Outdoors > Hot Air Balloons			
391	Sports and Recreation > Outdoors > Hunting and Fishing			
392	Sports and Recreation > Outdoors > Rock Climbing			
393	Sports and Recreation > Outdoors > Skydiving			
394	Sports and Recreation > Paintball			
395	Sports and Recreation > Personal Trainers			
396	Sports and Recreation > Race Tracks			
397	Sports and Recreation > Racquet Sports			
398	Sports and Recreation > Racquet Sports > Racquetball			
399	Sports and Recreation > Racquet Sports > Tennis			
400	Sports and Recreation > Recreation Centers			
401	Sports and Recreation > Running			
402	Sports and Recreation > Skating			
403	Sports and Recreation > Snow Sports			
404	Sports and Recreation > Soccer			
405	Sports and Recreation > Sports Clubs			
406	Sports and Recreation > Stadiums and Arenas			
407	Sports and Recreation > Swimming Pools			
408	Sports and Recreation > Water Sports			
409	Sports and Recreation > Water Sports > Boating			
410	Sports and Recreation > Water Sports > Canoes and Kayaks			
411	Sports and Recreation > Water Sports > Rafting			
412	Sports and Recreation > Water Sports > Scuba Diving			
413	Sports and Recreation > Water Sports > Swimming			
452	Sports and Recreation > Water Sports > Surfing			
414	Sports and Recreation > Yoga and Pilates			
415	Transportation			
416	Transportation > Airlines and Aviation Services			
417	Transportation > Fuel Stations			
479	Transportation > Fuel Stations > Electric Vehicle Charging Stations			
418	Transportation > Parking			
419	Transportation > Public Transportation Services			
420	Transportation > Taxi and Car Services			
421	Transportation > Taxi and Car Services > Car and Truck Rentals			
422	Transportation > Taxi and Car Services > Charter Buses			
423	Transportation > Taxi and Car Services > Limos and Chauffeurs			
424	Transportation > Transport Hubs			
425	Transportation > Transport Hubs > Airports			
462	Transportation > Transport Hubs > Airports > International Airports			
478	Transportation > Transport Hubs > Airports > Private Airports			
426	Transportation > Transport Hubs > Bus Stations			
427	Transportation > Transport Hubs > Heliports			
428	Transportation > Transport Hubs > Ports			
429	Transportation > Transport Hubs > Rail Stations			
459	Transportation > Rest Areas			
430	Travel			
431	Travel > Cruises			
432	Travel > Lodging
433	Travel > Lodging > Bed and Breakfasts
434	Travel > Lodging > Cottages and Cabins
435	Travel > Lodging > Hostels
436	Travel > Lodging > Hotels and Motels
437	Travel > Lodging > Lodges and Vacation Rentals
438	Travel > Lodging > Resorts
439	Travel > Tourist Information and Services			
440	Travel > Travel Agents and Tour Operators
*/