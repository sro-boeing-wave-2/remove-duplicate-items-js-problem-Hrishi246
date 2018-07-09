/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const expectedItems = [];
  for (let i = 0; i < items.length; i += 1) {
    if (expectedItems.indexOf(items[i]) === -1) {
      expectedItems.push(items[i]);
    }
  }
  return expectedItems;
};

module.exports = removeDuplicateItems;
