function mySet() {
  // this collection will hold the set
  let collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection
  this.size = function () {
    return collection.length;
  };

  // this method will return the union of two sets
  this.union = function (otherSet) {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });

    secondSet.forEach((e) => {
      unionSet.add(e);
    });

    return unionSet;
  };

  // this method will return the intersection of two sets as a new set
  this.intersection = function (otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });

    return intersectionSet;
  };

  // this method will return the difference of two sets a a new set
  this.difference = function (otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  this.subset = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}
