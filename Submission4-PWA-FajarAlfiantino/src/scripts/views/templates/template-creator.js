const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
  <i class="bi bi-heart"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
  <i class="bi bi-heart-fill"></i>
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
