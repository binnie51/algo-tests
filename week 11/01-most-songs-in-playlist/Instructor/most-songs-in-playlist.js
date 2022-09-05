// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function (arr) {
  // add your code here...

  // [3, 4, 2, 1, 7, 5, 3].sort()
  // [3, 4, 2, 1, 7, 5, 3].reduce((prev, current) => prev + current, 0)
  const answer = arr.sort().reduce(
    (prev, current) => {
      if(prev.sum + current > 60){
        return prev;
      }
      // this return adds to the count and sum
      return {
        count: prev.count + 1,
        sum: prev.sum + current
      };
    }, { count: 0, sum: 0 });
  return answer.count;
};
