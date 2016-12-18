console.log("tile.js is loaded!");
class Tile {
  constructor(number) {
    this.number = number;

  } // constructor
  // creates X number of parents and adds id's and classes and special class empty
  createAmtOfParents(number) {
    const arrayOfParentsNoKids = [];
    for (let i = 0; i < this.number; i += 1) {
      const parent = document.createElement('div');
      parent.setAttribute('class', 'parent');
      parent.setAttribute('id', i);
      arrayOfParentsNoKids.push(parent);
      if (i === this.number - 1) {
        parent.classList.add('class', 'empty');
      }
    }
    return arrayOfParentsNoKids;
  }
  // create children, 1 less than number of parents
  createAmtOfChildren(number) {
    const childrenArray = [];
    for (let i = 0; i < this.number - 1; i += 1) {
      const child = document.createElement('div');
      child.setAttribute('class', 'square');
      child.innerHTML = i.toString();
      childrenArray.push(child);
    }
    return childrenArray;
  }

// shuffle chidren to render upon start
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle(array) {
    let currentIndex = array.length; // arr1.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);  // TILE
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  familyGathering(kidsGroup, parentsGroup) {
    this.shuffle(kidsGroup); // shuffled child Array to append to parents
    const board = document.getElementById('board');
    for (let i = 0; i < parentsGroup.length; i += 1) {
      if (i !== 3) {
        parentsGroup[i].append(kidsGroup[i]);
        parentsGroup[i].classList.add('class', 'full');
        board.append(parentsGroup[i]);
      } else {
        board.append(parentsGroup[i]);
      }
    }
    return parentsGroup;
  }


} // class
