const { SDS } = require("aws-sds");
(async () => {
  //Welcome to the dollar store knockoff of Firestore built on S3.
  //This quick code snippet is all you need to know...because thats
  // all there is to know.This module uses the aws-sdk. Make sure you
  // have credentials in one of the places that the sdk looks for them.
  //Sir Googles can direct you I'm sure.
  //Onwards - to the code yo!
  //First fire up an instance of SDS. 2 properties are required -
  //bucket, region
  let sds = new SDS("tmb-pokedex-app", "us-east-1");
  //Here goes a collection
  let users = sds.collection("wharf");
  //Lets jump into the deep end and fire off all the main features
  //back to back! Dropping a doc on you dudes. If you don't pass an id
  //one gets generated autmagically.
  let mort = users.doc();
  //list out all the docs in the current collection. Default is up to
  //100 docs
  let onlyMort = await users.list();
  console.log("onlyMort", onlyMort);
  //without the ability to add data what are we even doing here...
  let mortDeets = await mort.set({ name: "mort", job: "mortician" });
  //and if there's an update...
  mortDeets = await mort.update({ likes: ["burgers"] });
  console.log("mortDeets", mortDeets);
  //and dropping that doc like your new years goals on Jan 2nd.
  await mort.del();
  //Now I know what your saying, what about those "where" joints in
  //ole firestore. Got you covered! I got a half baked version of it
  //built right into this piece. Just pass an index property anytime
  //a collection is used that you want an index on. Pass the index an
  //array of properties to index. Boom, headshot! FYI, it won't add
  //already created docs to the index. So don't be whining about it
  //later if you don't use if from the beginning.
  //Also nested collections - thats a thing.
  users = sds.collection("wharf").collection("burgershop", { index: ["job"] });
  //We got a shop, we need some peeps...
  let bob = users.doc("bob");
  let linda = users.doc("linda");
  let gene = users.doc("gene");
  let jimmy = users.doc("jimmy");
  //Boom!
  //add some data
  let bobDeets = await bob.set({ name: "bob", job: "cook" });
  let lindaDeets = await linda.set({ name: "linda", job: "cook" });
  let geneDeets = await gene.set({ name: "gene", job: "beefsquash" });
  let jimmyDeets = await jimmy.set({ name: "jimmy", job: "cook" });
  console.log("bobDeets", bobDeets);
  //update some stuff
  bobDeets = await bob.update({ likes: ["cake the musical"] });
  //get a doc
  lindaDeets = await linda.get();
  console.log("lindaDeets", lindaDeets);
  //delete a doc
  let byeJimmy = await jimmy.del();
  console.log("byeJimmy", byeJimmy);
  //Okay, so if you want to use the index
  //pass the Where object to list. Where has 2 props. key is the name of
  //the indexed prop and value is what the properties value is....obviously.
  //Take Where for a joy ride by finding the cooks.
  let theCooks = await users.list({ Where: { key: "job", value: "cook" } });
  console.log("theCooks", theCooks);
  //There is also MaxKeys. What does it do? Yup, limits the docs returned.
  let only2 = await users.list({ MaxKeys: 2 });
  console.log("only2", only2);
  //theres also StartAfter....which gets passed a key and the
  //return list starts after the given key.
  //Rocket science right there yall.
  let notBob = await users.list({ StartAfter: "gene" });
  console.log("notBob", notBob);
  //If your reading this part that means you at least skimmed
  //the above. Which probably also means you have an idea at
  //work or on a side job but have little to no funds available.
  //S3 is so cheap it probably contains lead paint which is exactly
  // why it was worth the 2 minutes it took to whip this baby up. For
  //the firestore homies talking about, "Firestore is free until
  //upgrade to Spark", Yup, so then why are you here then?
  //Peace out!
})();
