function solution(array) {

  holder = array.reduce((a,b) => {
    if (b < 0) {
      return a;
    }

    a[b] = b;
    return a
  }, [])

  if (holder.length === 0 ) {
    return 1;
  }

  for (let i = 1; i < holder.length; i++) {
    if (!(holder[i])) {
      return i;
    }
  }
  return holder.length; 
}


var ans = solution([1, 3, 6, 4, 1, 2])

console.log(ans)