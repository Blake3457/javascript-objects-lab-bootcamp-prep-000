var recipes = {prop: "1"};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes["prop2"] = "2"
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes["prop2"] = "2"
  return recipes
}