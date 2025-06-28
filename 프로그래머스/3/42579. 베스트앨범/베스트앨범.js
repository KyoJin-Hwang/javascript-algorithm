function solution(genres, plays) {
  const genreMap = new Map(); 
  const playCountMap = new Map(); 

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreMap.has(genre)) {
      genreMap.set(genre, []);
      playCountMap.set(genre, 0);
    }
    genreMap.get(genre).push({ id: i, play });
    playCountMap.set(genre, playCountMap.get(genre) + play);
  }
    
    // 2. 장르별 총 재생 수로 정렬
  const sortedGenres = [...playCountMap.entries()]
    .sort((a, b) => b[1] - a[1]) // 총 재생 수 기준 내림차순
    .map(entry => entry[0]);     // 장르 이름만 추출

  const result = [];
  
   // 3. 장르별 노래 정렬 후 최대 2개 선택
  for (const genre of sortedGenres) {
    const songs = genreMap.get(genre);
    console.log(songs)
    // 재생수 내림차순, 고유번호 오름차순
    songs.sort((a, b) => {
      if (b.play !== a.play) return b.play - a.play;
      return a.id - b.id;
    });

    result.push(songs[0].id);
    if (songs[1]) result.push(songs[1].id);
  }
  return result 
}