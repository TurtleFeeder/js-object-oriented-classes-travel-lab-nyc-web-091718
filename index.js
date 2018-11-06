class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return parseInt(year) - this.startDate.getFullYear()
  }
} //end Driver class

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    // calculate horizontal travel
    let aveBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    // calculate vertical travel (streets)
    let stBlocks = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical);

    return aveBlocks + stBlocks;
  }

  estimatedTime(peak=false) {
    let numBlocks = this.blocksTravelled();
    if (peak === true) {
      return numBlocks/2;
    } else if (peak === false) {
      return numBlocks/3;
    }
  }

} //end Route class
