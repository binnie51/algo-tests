// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...

  // set up init a counter var to keep track of the sum

  // sortarray, iterating and adding values as i keep on going 
  // if sum is > 60, stop
  
  const totalSongs = arr.sort().reduce( (prevSong, currentSong,) => {
    
    // return total song when mins > 60
    if (prevSong.sum + currentSong > 60){
      return prevSong;
    }
    // tracks numbers of song & sum value
    return {
      count: prevSong.count + 1, // increment 
      sum: prevSong.sum + currentSong
    }
    
  }, { sum: 0, count: 0 })

  return totalSongs.count;

};
