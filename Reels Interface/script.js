const reels = [
  {
    userName: "travel_with_aarav",
    likeCount: 15420,
    isLiked: false,
    commentCount: 328,
    caption: "Sunset diaries 🌅✨",
    video: "./videos/video-1.mp4",
    userProfile: "https://picsum.photos/200?1",
    shareCount: 210,
    isFollowed: true,
  },
  {
    userName: "fitness_rhea",
    likeCount: 9820,
    isLiked: true,
    commentCount: 190,
    caption: "Leg day never skips 🏋️‍♀️🔥",
    video: "./videos/video-2.mp4",
    userProfile: "https://picsum.photos/200?2",
    shareCount: 180,
    isFollowed: false,
  },
  {
    userName: "foodie_chef",
    likeCount: 22150,
    isLiked: false,
    commentCount: 450,
    caption: "Making cheesy garlic bread 🧀🍞",
    video: "./videos/video-3.mp4",
    userProfile: "https://picsum.photos/200?3",
    shareCount: 390,
    isFollowed: true,
  },
  {
    userName: "street_dancer",
    likeCount: 31040,
    isLiked: true,
    commentCount: 620,
    caption: "Freestyle vibes 💃✨",
    video: "./videos/video-4.mp4",
    userProfile: "https://picsum.photos/200?4",
    shareCount: 520,
    isFollowed: false,
  },
  {
    userName: "tech_guru",
    likeCount: 8450,
    isLiked: false,
    commentCount: 142,
    caption: "Top 5 Chrome extensions 💡💻",
    video: "./videos/video-5.mp4",
    userProfile: "https://picsum.photos/200?5",
    shareCount: 95,
    isFollowed: true,
  },
  {
    userName: "pet_paradise",
    likeCount: 27400,
    isLiked: true,
    commentCount: 410,
    caption: "Cutest dog ever 🐶❤️",
    video: "./videos/video-4.mp4",
    userProfile: "https://picsum.photos/200?6",
    shareCount: 360,
    isFollowed: false,
  },
  {
    userName: "fashion_nyra",
    likeCount: 17890,
    isLiked: false,
    commentCount: 289,
    caption: "OOTD — pastel edition 👗✨",
    video: "./videos/video-5.mp4",
    userProfile: "https://picsum.photos/200?7",
    shareCount: 230,
    isFollowed: true,
  },
  {
    userName: "music_vibes",
    likeCount: 33210,
    isLiked: true,
    commentCount: 700,
    caption: "Acoustic cover 🎶🎤",
    video: "./videos/video-3.mp4",
    userProfile: "https://picsum.photos/200?8",
    shareCount: 480,
    isFollowed: false,
  },
  {
    userName: "gaming_legend",
    likeCount: 19560,
    isLiked: false,
    commentCount: 350,
    caption: "Insane clutch moment 🎮🔥",
    video: "./videos/video-2.mp4",
    userProfile: "https://picsum.photos/200?9",
    shareCount: 310,
    isFollowed: false,
  },
  {
    userName: "motivational_sam",
    likeCount: 26580,
    isLiked: true,
    commentCount: 510,
    caption: "Believe in yourself 💪✨",
    video: "./videos/video-1.mp4",
    userProfile: "https://picsum.photos/200?10",
    shareCount: 420,
    isFollowed: true,
  },
];

let allReels = document.querySelector(".all-reels");

function renderReels() {
  let html = "";

  reels.forEach((reel, idx) => {
    html += `
        <div class="reel">
            <video src="${reel.video}" autoplay muted loop></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${reel.userProfile}"
                  alt=""
                />
                <h4>${reel.userName}</h4>
                <button>${reel.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <div id="caption">
                <h4>${reel.caption}</h4>
              </div>
            </div> 
            <div class="right icon">
              <div id=${idx} class="like">
                <h4 class="like-icon">${
                  reel.isLiked
                    ? '<i class="ri-heart-3-fill red-heart"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h4> 
                <h5 class="like-count">${reel.likeCount}</h5>
              </div>
              <div class="comment icon">
                <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                <h5 class="comment-count">${reel.commentCount}</h5>
              </div>
              <div class="share icon">
                <h4 class="share-icon"><i class="ri-send-plane-fill"></i></h4>
                <h5 class="share-count">${reel.shareCount}</h5>
              </div>
              <div class="menu icon">
                <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
              </div>
            </div>
          </div>
    `;
  });

  allReels.innerHTML = html;
}

renderReels();

allReels.addEventListener("click", (event) => {
  if (!(reels[event.target.id].isLiked === true)) {
    reels[event.target.id].likeCount++;
    reels[event.target.id].isLiked = true;
  } else {
    reels[event.target.id].likeCount--;
    reels[event.target.id].isLiked = false;
  }

  renderReels();
});
