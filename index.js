var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return ;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({},object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  //text
}